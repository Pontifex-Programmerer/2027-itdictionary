import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { hentElev, lagreVurdering } from "../api.js";
import { RUBRIKK, MAKS, seksjonMaks, oppsummer } from "../../../shared/rubrikk.js";
import { Karakterboks, Poengstolpe } from "../components/Resultat.jsx";
import Kriterium from "../components/Kriterium.jsx";

// Relative lenker i notatene peker fra prosjektroten; serveren har dem under /filer.
const lenke = (url) => (/^([a-z]+:|#|\/)/i.test(url) ? url : `/filer/${url}`);

const tidspunkt = (iso) => new Date(iso).toLocaleString("no");

export default function Elevside() {
  const { mappe } = useParams();
  const [elev, setElev] = useState(null);
  const [skjema, setSkjema] = useState(null);
  const [endret, setEndret] = useState(false);
  const [lagrer, setLagrer] = useState(false);
  const [melding, setMelding] = useState(null);

  function last(e) {
    setElev(e);
    setSkjema({ poeng: e.poeng, notater: e.notater, forbedring: e.forbedring, forutsetninger: e.forutsetninger });
    setEndret(false);
  }

  useEffect(() => {
    hentElev(mappe).then(last, (f) => setMelding(`Kunne ikke hente eleven: ${f.message}`));
  }, [mappe]);

  useEffect(() => {
    if (elev) document.title = `${elev.navn} – IT Dictionary`;
  }, [elev]);

  useEffect(() => {
    if (!endret) return;
    const advar = (e) => e.preventDefault();
    window.addEventListener("beforeunload", advar);
    return () => window.removeEventListener("beforeunload", advar);
  }, [endret]);

  const resultat = useMemo(() => skjema && oppsummer(skjema.poeng), [skjema]);
  const forslag = useMemo(
    () => elev && oppsummer(Object.fromEntries(Object.entries(elev.forslag).map(([id, f]) => [id, f.poeng]))),
    [elev],
  );

  if (!elev || !skjema) return <main className="elevside">{melding && <p className="feilmelding">{melding}</p>}</main>;

  function endre(felt, nøkkel, verdi) {
    setSkjema((s) => ({ ...s, [felt]: nøkkel ? { ...s[felt], [nøkkel]: verdi } : verdi }));
    setEndret(true);
    setMelding(null);
  }

  async function lagre(e) {
    e.preventDefault();
    setLagrer(true);
    try {
      last(await lagreVurdering(mappe, skjema));
    } catch (f) {
      setMelding(`Kunne ikke lagre: ${f.message}`);
    } finally {
      setLagrer(false);
    }
  }

  const status = melding
    ?? (endret ? "Ulagrede endringer" : elev.oppdatert ? `Sist lagret ${tidspunkt(elev.oppdatert)}` : "Ikke lagret ennå");

  return (
    <main className="elevside">
      <Link className="tilbake" to="/">← Alle elever</Link>
      <header className="elevhode">
        <div>
          <p className="overlinje">IT Dictionary · vurdering</p>
          <h1>{elev.navn}</h1>
          {elev.prosjekt && (
            <a className="nettsidelenke" href={`/api/elever/${encodeURIComponent(mappe)}/nettside`}
              target="_blank" rel="noreferrer">Åpne nettsiden ↗</a>
          )}
        </div>
        <Karakterboks {...resultat} />
      </header>

      <section className="oppsummering">
        <Poengstolpe {...resultat} />
        <ul className="forklaring">
          <li><span className="prikk dok" />Poeng <strong>{resultat.sum}</strong>/{MAKS}</li>
          <li><span className="prikk uavklart" />Ikke vurdert <strong>{resultat.ikkeVurdert}</strong></li>
          <li><span className="prikk tapt" />Ikke oppnådd <strong>{resultat.tapt}</strong></li>
        </ul>
      </section>

      <form onSubmit={lagre}>
        <section className="seksjon">
          <h2>Forutsetninger</h2>
          <label className="notat">Rettelser gjort for å kunne vurdere: hvem eleven er, om det ble levert som ZIP, filer som er flyttet
            <textarea rows={4} value={skjema.forutsetninger}
              onChange={(e) => endre("forutsetninger", null, e.target.value)} />
          </label>
        </section>
        <p className="hjelp">Tab mellom feltene, pil opp/ned endrer poeng. Klikk på et forslag for å bruke det.</p>
        {RUBRIKK.map((s) => {
          const vurderte = s.kriterier.filter((k) => typeof skjema.poeng[k.id] === "number");
          const sum = vurderte.reduce((a, k) => a + skjema.poeng[k.id], 0);
          const fsum = s.kriterier.reduce((a, k) => a + (elev.forslag[k.id]?.poeng ?? 0), 0);
          const harForslag = s.kriterier.some((k) => elev.forslag[k.id]);
          return (
            <section className="seksjon" key={s.id}>
              <h2>
                {s.tittel} <span className="seksjonspoeng">{vurderte.length ? sum : "–"}/{seksjonMaks(s)}</span>
              </h2>
              <div className="seksjonsrutenett">
                <div>
                  <div className="kolonnehode" aria-hidden="true">
                    <span>Kriterium</span>
                    <span>Forslag{harForslag && ` (${fsum})`}</span>
                    <span>Poeng</span>
                  </div>
                  {s.kriterier.map((k) => (
                    <Kriterium key={k.id} kriterium={k} verdi={skjema.poeng[k.id] ?? null}
                      forslag={elev.forslag[k.id]} onEndre={(p) => endre("poeng", k.id, p)} />
                  ))}
                </div>
                <label className="notat sidenotat">Notat
                  <textarea value={skjema.notater[s.id] ?? ""}
                    onChange={(e) => endre("notater", s.id, e.target.value)} />
                </label>
              </div>
            </section>
          );
        })}
        <section className="seksjon">
          <h2>Karakter og tilbakemelding</h2>
          <div className="karakterkort">
            <div className="kort forslagskort">
              <span className="etikett">Claudes forslag</span>
              <span className="karakter">{forslag.karakter ?? "–"}</span>
              <span className="kortpoeng">{forslag.status === "ingen" ? "Ingen forslag" : `${forslag.sum} / ${MAKS} poeng`}</span>
            </div>
            <div className={`kort ${resultat.status}`}>
              <span className="etikett">Karakter fra dine poeng</span>
              <span className="karakter">{resultat.karakter ?? "–"}</span>
              <span className="kortpoeng">
                {resultat.status === "ingen" ? "Ingen poeng satt"
                  : `${resultat.sum} / ${MAKS} poeng${resultat.status === "delvis" ? ` · ${resultat.ikkeVurdert} p ikke vurdert` : ""}`}
              </span>
            </div>
          </div>
          <label className="notat">Tilbakemelding til eleven
            <textarea rows={7} value={skjema.forbedring} onChange={(e) => endre("forbedring", null, e.target.value)} />
          </label>
          <p className="hjelp">PDF-en inneholder bare dine poeng, karakteren og tilbakemeldingen.</p>
        </section>
        <div className="lagrelinje">
          <span>{status}</span>
          <span className="knapper">
            {endret
              ? <button type="button" className="sekundær" disabled title="Lagre først">Last ned PDF</button>
              : <a className="knapp sekundær" href={`/api/elever/${encodeURIComponent(mappe)}/vurdering.pdf`} download>Last ned PDF</a>}
            <button type="submit" disabled={lagrer || !endret}>{lagrer ? "Lagrer …" : "Lagre vurdering"}</button>
          </span>
        </div>
      </form>

      {elev.filnotater && (
        <details className="vurdering">
          <summary>Notater fra filgjennomgangen (gammel rubrikk)</summary>
          <Markdown remarkPlugins={[remarkGfm]} urlTransform={lenke}
            components={{ table: (props) => <div className="tabell"><table {...props} /></div> }}>
            {elev.filnotater}
          </Markdown>
        </details>
      )}
    </main>
  );
}

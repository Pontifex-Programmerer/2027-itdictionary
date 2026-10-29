import { useEffect } from "react";
import { Link } from "react-router-dom";
import { RUBRIKK, MAKS, GRENSER, seksjonMaks } from "../../../shared/rubrikk.js";

export default function Rubrikkside() {
  useEffect(() => { document.title = "Vurderingsrubrikk – IT Dictionary"; }, []);

  return (
    <main className="smal">
      <Link className="tilbake" to="/">← Alle elever</Link>
      <header>
        <p className="overlinje">IT Dictionary</p>
        <h1>Vurderingsrubrikk</h1>
      </header>
      <div className="vurdering">
        <p>{MAKS} poeng totalt. Innholdet i forklaringene vurderes i engelsk og gir ikke poeng her.</p>
        {RUBRIKK.map((s) => (
          <section key={s.id}>
            <h2>{s.tittel} <span className="seksjonspoeng">{seksjonMaks(s)} p</span></h2>
            <div className="tabell">
              <table>
                <thead><tr><th>Kriterium</th><th className="tall">Poeng</th></tr></thead>
                <tbody>
                  {s.kriterier.map((k) => (
                    <tr key={k.id}>
                      <td>
                        {k.tittel}{k.bonus && <span className="bonus">bonus</span>}
                        {k.beskrivelse && <span className="kbeskrivelse">{k.beskrivelse}</span>}
                      </td>
                      <td className="tall">{k.maks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
        <h2>Karaktergrenser</h2>
        <div className="tabell">
          <table>
            <thead><tr><th>Karakter</th><th className="tall">Poeng</th></tr></thead>
            <tbody>
              {GRENSER.map(([min, k], i) => {
                const øvre = i === 0 ? MAKS : GRENSER[i - 1][0] - 1;
                return <tr key={k}><td>{k}</td><td className="tall">{min === øvre ? min : `${min}–${øvre}`}</td></tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

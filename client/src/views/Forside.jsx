import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { hentElever } from "../api.js";
import { MAKS } from "../../../shared/rubrikk.js";
import { Karakterboks, Poengstolpe } from "../components/Resultat.jsx";

function poengtekst(e) {
  if (e.status === "ingen") return "Ingen poeng satt";
  return `${e.sum} av ${MAKS} poeng${e.status === "delvis" ? ` · ${e.ikkeVurdert} ikke vurdert` : ""}`;
}

export default function Forside() {
  const [elever, setElever] = useState(null);
  const [feil, setFeil] = useState(null);

  useEffect(() => {
    document.title = "IT Dictionary";
    hentElever().then(setElever, (f) => setFeil(f.message));
  }, []);

  return (
    <main>
      <header className="forsidehode">
        <h1>IT Dictionary</h1>
        <p>
          Resultater per elev. Se <Link to="/rubrikk">vurderingsrubrikken</Link> for kriterier,
          vekting og karaktergrenser.
        </p>
      </header>
      {feil && <p className="feilmelding">Kunne ikke hente elevene: {feil}</p>}
      <nav className="rutenett">
        {elever?.map((e) => (
          <Link key={e.mappe} className="flis" to={`/elev/${encodeURIComponent(e.mappe)}`}>
            <span className="navn">{e.navn}</span>
            <Karakterboks {...e} />
            <Poengstolpe {...e} />
            <span className="poeng">{poengtekst(e)}</span>
          </Link>
        ))}
      </nav>
    </main>
  );
}

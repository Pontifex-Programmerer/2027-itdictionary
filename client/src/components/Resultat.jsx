import { MAKS } from "../../../shared/rubrikk.js";

const ETIKETT = { ingen: "Ikke vurdert", delvis: "Under vurdering", ferdig: "Karakter" };

export function Karakterboks({ status, karakter }) {
  return (
    <span className={`karakterboks ${status}`}>
      <span className="etikett">{ETIKETT[status]}</span>
      <span className="karakter">{karakter ?? "–"}</span>
    </span>
  );
}

export function Poengstolpe({ sum, tapt, ikkeVurdert }) {
  return (
    <div className="stolpe" role="img"
      aria-label={`${sum} poeng, ${tapt} ikke oppnådd, ${ikkeVurdert} ikke vurdert av ${MAKS}`}>
      <span className="dok" style={{ width: `${sum}%` }} />
      <span className="uavklart" style={{ width: `${ikkeVurdert}%` }} />
      <span className="tapt" style={{ width: `${tapt}%` }} />
    </div>
  );
}

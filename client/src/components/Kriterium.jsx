// Én rad i skjemaet: kriterium, Claudes forslag (skyggekolonne) og lærerens poengfelt.
// Feltet styres med tastaturet: Tab mellom feltene, pil opp/ned for å legge til
// eller trekke fra poeng. Tomt felt = ikke vurdert.
export default function Kriterium({ kriterium, verdi, forslag, onEndre }) {
  const { id, tittel, beskrivelse, maks, bonus } = kriterium;
  const sett = (p) => onEndre(p === null ? null : Math.min(maks, Math.max(0, p)));

  function tast(e) {
    if (e.key === "ArrowUp") { e.preventDefault(); sett((verdi ?? 0) + 1); }
    if (e.key === "ArrowDown") { e.preventDefault(); sett((verdi ?? 0) - 1); }
  }

  function skriv(e) {
    const tekst = e.target.value.replace(/\D/g, "");
    sett(tekst === "" ? null : Number(tekst));
  }

  return (
    <div className="kriterium">
      <label className="ktekst" htmlFor={id}>
        <span className="ktittel">{tittel}{bonus && <span className="bonus">bonus</span>}</span>
        {beskrivelse && <span className="kbeskrivelse">{beskrivelse}</span>}
      </label>
      <div className="forslag" title={forslag?.grunn}>
        {forslag ? (
          <button type="button" tabIndex={-1} onClick={() => sett(forslag.poeng)}
            aria-label={`Bruk forslaget ${forslag.poeng} poeng`}>
            {forslag.poeng}
          </button>
        ) : <span className="tomt">–</span>}
        {forslag?.grunn && <span className="grunn">{forslag.grunn}</span>}
      </div>
      <div className="poengfelt">
        <span className="stepper">
          <button type="button" tabIndex={-1} onClick={() => sett((verdi ?? 0) + 1)} aria-label="Legg til ett poeng">+</button>
          <button type="button" tabIndex={-1} onClick={() => sett((verdi ?? 0) - 1)} aria-label="Trekk fra ett poeng">−</button>
        </span>
        <input id={id} type="text" inputMode="numeric" autoComplete="off"
          value={verdi ?? ""} placeholder="–" onKeyDown={tast} onChange={skriv}
          onFocus={(e) => e.target.select()} aria-describedby={`${id}-maks`} />
        <span className="kmaks" id={`${id}-maks`}>/ {maks}</span>
      </div>
    </div>
  );
}

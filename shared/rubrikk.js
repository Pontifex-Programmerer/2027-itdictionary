// Vurderingsrubrikk for IT Dictionary: 100 poeng.
// Brukes av både serveren (validering) og React-klienten (skjema og visning).
// bonus: true betyr at kriteriet ikke må vurderes for at vurderingen er ferdig.

export const RUBRIKK = [
  {
    id: "sider",
    tittel: "Alle sider finnes",
    kriterier: [
      { id: "sider-finnes", maks: 6, tittel: "Forside og fem begrepssider", beskrivelse: "1 p per side." },
    ],
  },
  {
    id: "wireframes",
    tittel: "Wireframes og navigasjon",
    kriterier: [
      { id: "wf-forside", maks: 10, tittel: "Forsiden ser ut som wireframen" },
      { id: "wf-ordsider", maks: 10, tittel: "Begrepssidene ser ut som wireframen" },
      { id: "nav-lenker", maks: 10, tittel: "Alle lenker fungerer" },
      { id: "nav-kjede", maks: 5, tittel: "Forrige/neste følger rekkefølgen på forsiden og tar brukeren gjennom hele kjeden" },
    ],
  },
  {
    id: "filer",
    tittel: "Filer og mappestruktur",
    kriterier: [
      { id: "filer-index", maks: 5, tittel: "index.html ligger i rotmappen" },
      { id: "filer-html", maks: 5, tittel: "HTML-sidene ligger i html-mappen" },
      { id: "filer-css", maks: 2, tittel: "CSS ligger i css-mappen" },
      { id: "filer-js", maks: 2, bonus: true, tittel: "JS ligger i js-mappen", beskrivelse: "Bonus, bare hvis eleven bruker JS." },
      { id: "filer-navn", maks: 5, tittel: "Rotmappen heter [elevnavn]_it_dictionary", beskrivelse: "Eller inneholder i det minste begge delene." },
    ],
  },
  {
    id: "kode",
    tittel: "Kode",
    kriterier: [
      { id: "kode-doctype", maks: 5, tittel: "Doctype er brukt; html, head og body er til stede" },
      { id: "kode-lukket", maks: 5, tittel: "Tagger åpnes og lukkes riktig" },
      { id: "kode-innrykk", maks: 5, tittel: "Innrykk i henhold til nøsting" },
      { id: "kode-struktur", maks: 5, tittel: "Strukturtagger brukes for å holde orden på innhold" },
      { id: "kode-nosting", maks: 5, tittel: "Nøstingen viser forståelse for hvordan elementer er ordnet",
        beskrivelse: "Strukturen understøtter CSS og gir en semantisk beskrivelse av innholdet." },
      { id: "kode-fonter", maks: 2, tittel: "Eksterne fonter" },
      { id: "kode-css-kobling", maks: 6, tittel: "Kobler CSS og HTML med id, class og tagger",
        beskrivelse: "2 p for hver type selektor som brukes, opptil 6 p." },
    ],
  },
  {
    id: "design",
    tittel: "Design",
    kriterier: [
      { id: "design-kontrast", maks: 5, tittel: "Bruker kontrast for å fremheve tekst og annet innhold" },
      { id: "design-fonter", maks: 2, tittel: "Bruker font for å skille mellom innholdstyper" },
    ],
  },
];

export const KRITERIER = RUBRIKK.flatMap((s) => s.kriterier);
export const MAKS = KRITERIER.reduce((sum, k) => sum + k.maks, 0);
export const seksjonMaks = (s) => s.kriterier.reduce((sum, k) => sum + k.maks, 0);

export const GRENSER = [[95, 6], [85, 5], [70, 4], [40, 3], [20, 2], [0, 1]];
export const karakterFor = (poeng) => GRENSER.find(([min]) => poeng >= min)[1];

// Karakter settes først når alle kriterier som ikke er bonus, har poeng.
export function oppsummer(poeng) {
  let sum = 0, vurdertMaks = 0, ikkeVurdert = 0, mangler = 0;
  for (const k of KRITERIER) {
    const p = poeng[k.id];
    if (typeof p === "number") { sum += p; vurdertMaks += k.maks; }
    else if (!k.bonus) { ikkeVurdert += k.maks; mangler++; }
  }
  const påkrevde = KRITERIER.filter((k) => !k.bonus).length;
  const status = mangler === påkrevde ? "ingen" : mangler === 0 ? "ferdig" : "delvis";
  return {
    sum,
    tapt: vurdertMaks - sum,
    ikkeVurdert,
    status,
    karakter: status === "ferdig" ? karakterFor(sum) : null,
  };
}

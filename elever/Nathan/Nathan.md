---
prosjekt: elever/Nathan/itDictionary_Nathan 4/itDictionary_Nathan
forslag:
  sider-finnes:
    poeng: 6
    grunn: >-
      index.html og fem begrepssider (HTML, CSS, Database, Cybersecurity, LAN)
      finnes.
  wf-forside:
    poeng: 3
    grunn: >-
      Overskriften er sentrert, men listen ligger øverst til venstre og bildet
      under den, ikke ved siden av. Forsiden har nesten ingen styling.
  wf-ordsider:
    poeng: 3
    grunn: >-
      Ordet er sentrert, men Home og Next/Previous ligger under hverandre til
      venstre under bildet, ikke i hjørnene. Kilden ligger nederst til høyre.
  nav-lenker:
    poeng: 6
    grunn: >-
      Database-lenken på forsiden peker til dictionarydatabase.html (mangler /)
      og virker ikke. Begrepssidene bruker rot-relative stier (/css/main.css,
      /index.html), og LAN-bildet bruker \img\lan.jpeg med bakoverstrek og feil
      store/små bokstaver.
  nav-kjede:
    poeng: 5
    grunn: >-
      Previous/Next følger forsidens rekkefølge HTML → CSS → Database →
      Cybersecurity → LAN. Første side har ingen Previous og siste ingen Next.
  filer-index:
    poeng: 5
    grunn: index.html ligger i rotmappen.
  filer-html:
    poeng: 3
    grunn: 'Begrepssidene ligger samlet i dictionary/, ikke i en mappe som heter html.'
  filer-css:
    poeng: 2
    grunn: main.css ligger i css/. Bildet OIP.webp ligger også i css-mappen.
  filer-navn:
    poeng: 5
    grunn: 'Rotmappen heter itDictionary_Nathan, som oppgaven ber om.'
  kode-doctype:
    poeng: 2
    grunn: 'Ingen av sidene har <!DOCTYPE html>. html, head og body er til stede.'
  kode-lukket:
    poeng: 4
    grunn: Taggene er stort sett riktig lukket. database.html har id på head-taggen.
  kode-innrykk:
    poeng: 1
    grunn: >-
      Lite og ujevnt innrykk: <p>, <div> og <section> står helt til venstre
      eller tilfeldig rykket inn.
  kode-struktur:
    poeng: 2
    grunn: >-
      Section brukes rundt teksten på begrepssidene, men forsiden har ingen
      strukturtagger, og navigasjonen ligger i løse p og div.
  kode-nosting:
    poeng: 2
    grunn: >-
      Ordlisten er laget som fem <p> med tall i stedet for <ol>/<li>. Hver lenke
      ligger i en p inne i en div bare for å få farge.
  kode-fonter:
    poeng: 0
    grunn: 'Ingen eksterne fonter. Silkscreen står i CSS-en, men er ikke lenket inn.'
  kode-css-kobling:
    poeng: 6
    grunn: >-
      Bruker tagger (html, body, p), klasser og id-er (#html-side, #database
      osv.). Mange klasser (.ex1–.ex11) er nesten like eller brukes ikke.
  design-kontrast:
    poeng: 3
    grunn: >-
      Svart på cyan og grønt på svart er lesbart, men blå lenketekst på rosa
      knapper (2,7:1) er vanskelig å lese.
  design-fonter:
    poeng: 1
    grunn: Monospace på Database-siden er eneste fontvalg; resten er standardfont.
forbedring: >-
  Det viktigste du kan jobbe med, er grunnstrukturen i HTML-en. Start hver side
  med <!DOCTYPE html>, lag ordlisten som en ekte liste med <ol> og <li>, og rykk
  inn koden slik at det som ligger inni et element, står ett hakk inn. Da blir
  det mye lettere å bruke CSS til å plassere listen til venstre for bildet og
  Previous/Next i hvert sitt hjørne, slik wireframen viser.


  Et lite tips i tillegg: Database-lenken på forsiden mangler en skråstrek
  (dictionarydatabase.html skal være dictionary/database.html). Prøv også å lage
  én klasse for alle navigasjonsknappene i stedet for .ex1 til .ex11.
forutsetninger: >-
  Levering: Utpakket mappe «itDictionary_Nathan 4/itDictionary_Nathan». Ytre
  mappe med « 4» tyder på at den er pakket ut fra en ZIP; ZIP-fila finnes ikke i
  arbeidsmappen.

  Navn: Fra mappenavnet.

  Rettelser: Ingen filer er endret. Nettsiden åpnes med prosjektmappen som rot,
  fordi begrepssidene bruker rot-relative stier (/css/...).
---
# Nathan – IT Dictionary

**Status:** Foreløpig filvurdering, ikke endelig karakter. ZIP-ene finnes ikke i arbeidsmappen. AI-/kodeforståelse avklares i samtalen.

Prosjekt: [elever/Nathan/itDictionary_Nathan 4/itDictionary_Nathan/index.html](elever/Nathan/itDictionary_Nathan%204/itDictionary_Nathan/index.html)

## Poeng

| Område | Dokumentert poeng | Merknad |
| --- | ---: | --- |
| Sider og innhold | 20/30 dokumentert | Fem begrepssider, liste, overskrifter og engelske forklaringer finnes. HTML og CSS er beginner; Database, Cybersecurity og LAN er tre advanced. Valget er 2 + 3, ikke 3 + 2 (0/5). Fem eksterne kildelenker er ikke nettverkstestet (5 poeng uavklart). |
| Navigasjon | 17/18 statisk kontrollert | Fire av fem forside-lenker peker til eksisterende sider (4/5); Database-lenken peker til `dictionarydatabase.html`, som mangler. Hjemlenker (5/5) og Next/Previous mellom de fire naboparene (8/8) har mål i prosjektet. Klikktest i Live Server gjenstår. |
| Plassering mot wireframe | Ikke vurdert /30 | Sonesystemet ble ikke oppgitt til elevene på forhånd; ikke trekk poeng for de nye numeriske grensene. |
| Mappestruktur og ZIP | 5/12 dokumentert; 2 ikke oppfylt; 5 uavklart | `index.html`, HTML-sider og CSS-mappe er på plass (5 poeng). Bildet `css/OIP.webp` ligger i CSS-mappen, ikke bildemappen (0/1). Flere stier begynner med `/` eller `\` og er ikke relative (0/1). Live Server-sideåpning (1), lokale ressurser (2), ZIP (1) og ekstra lenker (1) er uavklart. |
| Kontrast | Ikke målt /10 | CSS inneholder blant annet sterke farger, men ingen WAVE-/kontrastmåling er utført; ikke trekk eller gi poeng uten måling. |

**Dokumentert delsum: 42 poeng.** Ikke oppfylt: 8 poeng. Uavklart: 50 poeng. Dette er ikke en karakter.

## Konkrete funn

- `dictionarydatabase.html` i forsidelenken finnes ikke; riktig fil ligger i `dictionary/database.html`.
- LAN-siden har «Previous», men ingen «Next». Dette påvirker ikke de fire naboparene, som er poengsatt i rubrikken.
- Kildelenkene er i HTML, men de eksterne sidene er ikke åpnet.
- Bildet `OIP.webp` ligger i `css/`; de øvrige brukte bildene ligger i `img/`.
- Flere detaljsider bruker rot-relative stier som `/css/main.css`, `/img/...` og `/dictionary/...`.

## Må avklares

- Test alle sider og lokale ressurser gjennom Live Server; særlig rot-relative stier og stier med omvendt skråstrek.
- Kjør WAVE og mål kontrastkombinasjonene.
- ZIP-navn og ZIP-innhold kan ikke vurderes uten ZIP-filen.
- Samtalen om elevens forklaring av kode/AI er lærerens vurdering og inngår ikke i poengene her.

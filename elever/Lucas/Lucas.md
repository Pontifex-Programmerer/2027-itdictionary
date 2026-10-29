---
prosjekt: elever/Lucas/lucas/It Dictionary
forslag:
  sider-finnes:
    poeng: 6
    grunn: >-
      index.html og fem begrepssider (Malware, Phishing, Ransomware, Trojan,
      Virus) finnes, pluss en kildeside.
  wf-forside:
    poeng: 5
    grunn: >-
      Overskriften er sentrert, men listen ligger alene midt i en boks, og det
      er ikke noe bilde på forsiden.
  wf-ordsider:
    poeng: 9
    grunn: >-
      Home ligger øverst til venstre, ordet er sentrert med bilde og forklaring
      under, kildeknappen nederst til høyre og Previous/Next nederst på hver sin
      side. Navbaren med alle ordene er en fin bonus.
  nav-lenker:
    poeng: 9
    grunn: >-
      Relative stier, og alle lenker mellom sidene virker. Home på forsiden
      peker til ../index.html, som ligger utenfor prosjektet.
  nav-kjede:
    poeng: 5
    grunn: >-
      Previous/Next følger forsidens rekkefølge Malware → Phishing → Ransomware
      → Trojan → Virus og går i ring.
  filer-index:
    poeng: 5
    grunn: index.html ligger i rotmappen.
  filer-html:
    poeng: 5
    grunn: Alle begrepssidene ligger i html/.
  filer-css:
    poeng: 2
    grunn: main.css og styles.css ligger i css/.
  filer-navn:
    poeng: 2
    grunn: Rotmappen heter «It Dictionary» og mangler navnet ditt.
  kode-doctype:
    poeng: 5
    grunn: >-
      Alle sider har <!DOCTYPE html>, html med lang, head med charset og
      viewport, og body.
  kode-lukket:
    poeng: 3
    grunn: >-
      malware.html har en ekstra </p> og en ekstra </div> som ikke hører til
      noe.
  kode-innrykk:
    poeng: 3
    grunn: >-
      Navbaren har feil innrykk: den avsluttende </div> står helt til venstre,
      og lenkene inne i .centered er ikke rykket inn.
  kode-struktur:
    poeng: 4
    grunn: Bruker div og section. Navigasjonen ligger i div-er i stedet for nav.
  kode-nosting:
    poeng: 4
    grunn: >-
      Fornuftig: topnav > div.centered med lenkene, section#main > div.sub med
      bilde og tekst i grid.
  kode-fonter:
    poeng: 0
    grunn: 'Ingen eksterne fonter. Quicksand står i CSS-en, men er ikke lenket inn.'
  kode-css-kobling:
    poeng: 6
    grunn: >-
      Bruker tagger (body, h1, ol, li), klasser (.topnav, .bottomnav, .sub,
      .sources-btn) og id (#main). body:not(.topnav) er en uvanlig selektor som
      bare treffer body uansett.
  design-kontrast:
    poeng: 5
    grunn: 'God kontrast: mørk tekst på hvitt (7,6:1) og lys tekst på mørk navbar.'
  design-fonter:
    poeng: 2
    grunn: >-
      Comic Sans/Arial Rounded på h1 og systemfont på p skiller overskrift og
      tekst. «font-size: Times New Roman» skulle vært font-family og gjør
      ingenting.
forbedring: >-
  Det viktigste du kan jobbe med, er å holde HTML-en ryddig. På malware.html er
  det en ekstra </p> og en ekstra </div> som ikke lukker noe, og navbaren har
  innrykk som ikke følger nøstingen. Rykk inn alt som ligger inni et element ett
  hakk, og sjekk at hver tagg du åpner, lukkes på samme nivå. Da er det lett å
  se slike feil, og CSS-en blir lettere å styre.


  Et lite tips i tillegg: Forsiden mangler bildet til høyre for listen i
  wireframen. Sjekk også linjen «font-size: Times New Roman» i styles.css; den
  skulle vært font-family.
forutsetninger: >-
  Levering: Utpakket mappe «lucas/It Dictionary». Ukjent om den ble levert som
  ZIP; ZIP-fila finnes ikke i arbeidsmappen.

  Navn: Fra den ytre mappen «lucas»; selve prosjektmappen heter «It Dictionary».

  Rettelser: Ingen filer er endret.
---
# Lucas – IT Dictionary

**Status:** Foreløpig filvurdering, ikke endelig karakter. ZIP-ene finnes ikke i arbeidsmappen. AI-/kodeforståelse avklares i samtalen.

Prosjekt: [elever/Lucas/lucas/It Dictionary/index.html](elever/Lucas/lucas/It%20Dictionary/index.html)

## Poeng

| Område | Dokumentert poeng | Merknad |
| --- | ---: | --- |
| Sider og innhold | 20/30 dokumentert | Fem begrepssider, forside, overskrifter og engelske forklaringer finnes. De valgte ordene oppfyller ikke 3 beginner + 2 advanced fra oppgavelistene (0/5). Kildene nås via en kildeside; fem eksterne lenker er ikke testet (5 poeng uavklart). |
| Navigasjon | 18/18 statisk kontrollert | Fem forside-lenker, hjemlenker på begrepssidene og Next/Previous-kjede peker til eksisterende sider. Klikktest i Live Server gjenstår. |
| Plassering mot wireframe | Ikke vurdert /30 | Sonesystemet ble ikke oppgitt til elevene på forhånd; ikke trekk poeng for de nye numeriske grensene. |
| Mappestruktur og ZIP | 7/12 dokumentert; 1 ikke oppfylt; 4 uavklart | `index.html`, HTML-, CSS- og bildemapper er på plass (6 poeng), og lokale stier er relative (1 poeng). Ekstralenken «Home» på forsiden peker til manglende `../index.html` (0/1). Live Server-sideåpning (1), lokale ressurser (2) og ZIP (1) er uavklart. |
| Kontrast | Ikke målt /10 | WAVE/kontrastforhold må kontrolleres. |

**Dokumentert delsum: 45 poeng.** Ikke oppfylt: 6 poeng. Uavklart: 49 poeng. Dette er ikke en karakter.

## Konkrete funn

- Forsidens ekstra «Home»-lenke peker til `../index.html`; prosjektet har ikke en slik fil i overmappen.
- Alle fem begrepssider har en relativ lenke til `sources.html`. Kildesiden inneholder eksterne kildelenker for begrepene; de er ikke testet.
- Filnavnet `ransomeware.html` er feilstavet, men lenkene bruker samme filnavn, så prosjektinterne lenker samsvarer med filen.

## Må avklares

- Test alle sider, bilder, stilark og kildelenker gjennom Live Server.
- Kontroller kontrast med WAVE.
- ZIP-navn og ZIP-innhold kan ikke vurderes uten ZIP-filen.
- Samtalen om elevens forklaring av kode/AI er lærerens vurdering og inngår ikke i poengene her.

---
prosjekt: elever/Eirik/IT-dictionary Eirik
forside: Index.html
forslag:
  sider-finnes:
    poeng: 6
    grunn: >-
      Index.html og fem begrepssider (Hyperlink, Program, Hardware, Source code,
      Password) finnes.
  wf-forside:
    poeng: 10
    grunn: >-
      Overskriften er sentrert over en boks med listen til venstre og bildet til
      høyre, som i wireframen.
  wf-ordsider:
    poeng: 9
    grunn: >-
      Home ligger øverst til venstre, ord og forklaring er sentrert, kilden
      nederst til høyre i boksen, og Previous/Next ligger i hvert sitt hjørne
      under. Knappene står litt opp fra bunnen, og Home er delvis klippet i
      toppkanten.
  nav-lenker:
    poeng: 8
    grunn: >-
      Alle lenker virker i Live Server fra prosjektmappen. Alle stier er
      rot-relative (/CSS/..., /Html/...), så CSS, bilde og lenker brytes hvis
      index åpnes direkte. Forsidelenken /html/Hyperlink_word.html har liten h,
      mappen heter Html.
  nav-kjede:
    poeng: 5
    grunn: >-
      Next/Previous følger forsidens rekkefølge Hyperlink → Program → Hardware →
      Source code → Password og går i ring.
  filer-index:
    poeng: 4
    grunn: >-
      Forsiden ligger i rotmappen, men heter Index.html med stor I. På en vanlig
      webserver blir den ikke åpnet som standardside.
  filer-html:
    poeng: 5
    grunn: Alle fem begrepssidene ligger i Html/.
  filer-css:
    poeng: 2
    grunn: Main.CSS og Words.CSS ligger i CSS/.
  filer-navn:
    poeng: 5
    grunn: >-
      Rotmappen heter «IT-dictionary Eirik» og inneholder både navn og
      IT-dictionary.
  kode-doctype:
    poeng: 5
    grunn: 'Alle sider har <!DOCTYPE html>, html med lang, head og body.'
  kode-lukket:
    poeng: 5
    grunn: Taggene er riktig åpnet og lukket.
  kode-innrykk:
    poeng: 4
    grunn: >-
      Stort sett jevnt innrykk, men h1 på begrepssidene er rykket inn for langt
      etter tomme linjer, og noen </div> står feil.
  kode-struktur:
    poeng: 4
    grunn: 'Bruker section, div og footer. Ingen header/nav rundt Home-lenken.'
  kode-nosting:
    poeng: 4
    grunn: >-
      Fornuftig: section som boks, div med flex rundt listen og bildet, footer >
      div.prev_next. Regelen div { display: flex } treffer alle div-er på
      forsiden.
  kode-fonter:
    poeng: 0
    grunn: Ingen eksterne fonter. Bare sans-serif og nettleserens standardfont.
  kode-css-kobling:
    poeng: 4
    grunn: >-
      Tagger (section, div, h1, p, img) og klasser (.button, .tekst, .prev_next,
      .source) brukes i CSS. Id-ene Home, Previous og Next finnes i HTML, men
      brukes ikke i CSS.
  design-kontrast:
    poeng: 5
    grunn: >-
      Svart tekst på #F5D189 (14:1), hvit tekst på knappene (4,9:1) og
      kildelenken (4,9:1) består alle.
  design-fonter:
    poeng: 1
    grunn: >-
      h1 er sans-serif og p får nettleserens standard serif, så de skiller seg,
      men p har ikke fått en font med vilje.
forbedring: >-
  Det viktigste du kan jobbe med, er filstiene. Alle lenkene dine starter med /
  (for eksempel /CSS/Main.CSS og /Html/Program_word.html). Da fungerer siden
  bare når Live Server startes akkurat fra prosjektmappen; åpner man Index.html
  direkte, forsvinner både stil, bilde og lenker. Bruk relative stier i stedet:
  CSS/Main.CSS fra forsiden og ../CSS/Words.CSS fra begrepssidene. Pass også på
  at store og små bokstaver stemmer (Html, ikke html), og gi forsiden navnet
  index.html med liten i.


  Et lite tips i tillegg: Oppsettet ditt følger wireframen veldig godt. Neste
  steg er å hente to fonter fra Google Fonts og bruke én på h1 og en annen på p.
forutsetninger: >-
  Levering: Mappe «IT-dictionary Eirik». Ukjent om den ble levert som ZIP;
  ZIP-fila finnes ikke i arbeidsmappen.

  Navn: Fra mappenavnet.

  Rettelser: Ingen filer er endret. Nettsiden åpnes med prosjektmappen som rot,
  fordi alle stier er rot-relative (/CSS/...).
---
# Eirik – IT Dictionary

**Status:** Foreløpig filvurdering, ikke endelig karakter. ZIP-ene finnes ikke i arbeidsmappen. AI-/kodeforståelse avklares i samtalen.

Prosjekt: [elever/Eirik/IT-dictionary Eirik/Index.html](elever/Eirik/IT-dictionary%20Eirik/Index.html)

## Poeng

| Område | Dokumentert poeng | Merknad |
| --- | ---: | --- |
| Sider og innhold | 20/30 dokumentert | Fem begrepssider, liste på forsiden, overskrifter og engelske forklaringer finnes. Begrepene oppfyller ikke nøyaktig 3 beginner + 2 advanced (0/5). Fem eksterne kildelenker (Cambridge Dictionary) er ikke nettverkstestet (5 poeng uavklart). |
| Navigasjon | 18/18 statisk kontrollert | Fem forside-lenker, fem hjemlenker og Next/Previous mellom de fire naboparene peker til eksisterende sider. Alle lenkene er rot-relative (`/Html/...`, `/Index.html`) og fungerer bare når Live Server startes fra prosjektmappen. Klikktest i Live Server gjenstår. |
| Plassering mot wireframe | Ikke vurdert /30 | Sonesystemet ble ikke oppgitt til elevene på forhånd; ikke trekk poeng for de nye numeriske grensene. |
| Mappestruktur og ZIP | 7/12 dokumentert; 1 ikke oppfylt; 4 uavklart | `Index.html` i roten (2), HTML-sider i `Html/` (2), CSS i `CSS/` (1) og bilde i `img/` (1). Ingen ekstra lenker utover navigasjon og kilder (1). Alle lokale stier begynner med `/` og er ikke relative (0/1). Live Server-sideåpning (1), lokale ressurser (2) og ZIP (1) er uavklart. |
| Kontrast | Ikke målt /10 | Foreløpig beregnet fra CSS: alle fire kombinasjoner består (se under). Bekreftes med WAVE. |

**Dokumentert delsum: 45 poeng.** Ikke oppfylt: 6 poeng. Uavklart: 49 poeng. Dette er ikke en karakter.

## Konkrete funn

- Begrepene er Hyperlink, Program, Hardware, Source code og Password. Bare Hardware og Password står i oppgavelisten (beginner). «Hyperlink» og «Program» står ikke på listen (listen har «Link» og «Programming»), «Source code» finnes ikke, og ingen advanced-begreper er valgt.
- Alle lokale stier er rot-relative: `/CSS/Main.CSS`, `/CSS/Words.CSS`, `/img/Programering.jpg`, `/Html/...` og `/Index.html`. Åpnes `Index.html` direkte i nettleseren (uten Live Server), eller startes Live Server fra en overmappe, brytes stilark, bilde og alle lenker.
- Forsidelenken til Hyperlink bruker `/html/Hyperlink_word.html` (liten `h`), mens mappen heter `Html/`. Det fungerer på Windows, men ikke på en server som skiller mellom store og små bokstaver.
- Forsiden heter `Index.html` med stor `I`, og hjemlenkene peker til `/Index.html`. Det fungerer på Windows; oppgaven ber om `index.html`.
- Overskriftene er «IT-dictonary: Hardware» osv. Begrepet står i `<h1>`, så overskriftspoenget gis. «dictonary» er feilstavet på alle sider.
- Forklaringene har manuelle `<br>`-linjeskift og noen skrivefeil («would'nt», «alows», «diffrent», «whitout»). Det påvirker ikke poengene i rubrikken.
- `width: 35sch;` i `Main.CSS` er en ugyldig enhet og ignoreres av nettleseren.
- Begge stilark bruker `font-family: sans-serif` for `h1`, og `p` har ingen egen font. Oppgaven ber om ulik font på `h1` og `p`, men rubrikken poengsetter ikke fontvalg.

## Kontrast (foreløpig, beregnet fra CSS)

| Tekst | Bakgrunn | Forhold | Krav | Resultat |
| --- | --- | ---: | ---: | --- |
| `#000000` (h1, p) | `#F5D189` | 14,36:1 | 4,5:1 | Består |
| `#ffffff` (knapper) | `#7d7237` | 4,85:1 | 4,5:1 | Består |
| `#ffffff` (knapper, hover) | `#615723` | 7,25:1 | 4,5:1 | Består |
| `#61572f` (kildelenke) | `#F5D189` | 4,93:1 | 4,5:1 | Består |

Hvis WAVE bekrefter dette: 10/10.

## Må avklares

- Test alle sider, stilark og bilde gjennom Live Server startet fra prosjektmappen `elever/Eirik/IT-dictionary Eirik/`.
- Kontroller kontrast med WAVE.
- ZIP-navn og ZIP-innhold kan ikke vurderes uten ZIP-filen.
- Samtalen om elevens forklaring av kode/AI er lærerens vurdering og inngår ikke i poengene her.

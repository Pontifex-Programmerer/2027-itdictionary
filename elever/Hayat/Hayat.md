---
prosjekt: elever/Hayat/IT-PROJECT-ENLGISH 1/IT-PROJECT-ENLGISH
forside: html/index.html
forslag:
  sider-finnes:
    poeng: 6
    grunn: >-
      index.html og fem begrepssider (CSS, HTML, Algorithm, Storage, Hyperlink)
      finnes.
  wf-forside:
    poeng: 9
    grunn: >-
      Overskriften er sentrert over listen til venstre og bildet til høyre, som
      i wireframen. Hele oppsettet ligger litt lavt, så det siste ordet havner
      under kanten på en laptopskjerm.
  wf-ordsider:
    poeng: 10
    grunn: >-
      Følger wireframen: Home øverst til venstre, ordet sentrert, forklaring og
      bilde i midten, ressurslenke under, og Previous/Next i hvert sitt hjørne
      nederst.
  nav-lenker:
    poeng: 10
    grunn: 'Alle lenker er relative og virker, også når index.html åpnes direkte.'
  nav-kjede:
    poeng: 5
    grunn: >-
      Previous/Next følger forsidens rekkefølge CSS → HTML → Algorithm → Storage
      → Hyperlink. Første og siste side sender brukeren tilbake til forsiden.
  filer-index:
    poeng: 0
    grunn: >-
      index.html ligger inne i html-mappen sammen med begrepssidene, ikke i
      rotmappen.
  filer-html:
    poeng: 5
    grunn: Alle begrepssidene ligger i html/.
  filer-css:
    poeng: 1
    grunn: >-
      main.css ligger i en css-mappe, men den ligger inne i html/ i stedet for i
      roten.
  filer-navn:
    poeng: 0
    grunn: >-
      Rotmappen heter IT-PROJECT-ENLGISH og har verken navnet ditt eller
      it_dictionary.
  kode-doctype:
    poeng: 5
    grunn: 'Alle sider har <!DOCTYPE html>, html med lang, head og body.'
  kode-lukket:
    poeng: 3
    grunn: >-
      Forsiden har en løs <li> etter bildet som ikke ligger i en liste og aldri
      lukkes.
  kode-innrykk:
    poeng: 3
    grunn: >-
      Ujevnt innrykk: <ol> står på samme nivå som <main>, head-innholdet er
      rykket feil, og det er mange tomme linjer på slutten.
  kode-struktur:
    poeng: 4
    grunn: Bruker main og div.box. Ingen nav eller header rundt navigasjonen.
  kode-nosting:
    poeng: 4
    grunn: >-
      Fornuftig: main.home-content med flex rundt listen og bildeboksen, og grid
      på begrepssidene. Den løse <li>-en med bildekreditten bryter strukturen.
  kode-fonter:
    poeng: 0
    grunn: Ingen eksterne fonter.
  kode-css-kobling:
    poeng: 4
    grunn: >-
      Tagger (body, li, a, h1, p, img) og klasser (.word-list, .home-content,
      .word-content, .previous-link osv.) brukes i CSS. Ingen id-er.
  design-kontrast:
    poeng: 4
    grunn: >-
      Svart tekst på #8bb6e7 er godt lesbar (9,9:1). Lenkene på begrepssidene
      har standard blå farge (4,45:1) og er så vidt under kravet.
  design-fonter:
    poeng: 0
    grunn: 'Ingen font-family er satt, så alt er nettleserens standardfont.'
forbedring: >-
  Det viktigste du kan jobbe med, er mappestrukturen. index.html skal ligge i
  rotmappen, og css-mappen skal ligge ved siden av html-mappen, ikke inne i den.
  Da blir lenkene fra forsiden html/css.html, og fra begrepssidene ../index.html
  og ../css/main.css. Øv på å flytte filene og rette stiene; det viser at du
  forstår hvordan relative stier virker mellom mapper. Gi også rotmappen navnet
  itDictionary_Dittnavn.


  Et lite tips i tillegg: Oppsettet ditt følger wireframen veldig godt. Hent to
  fonter fra Google Fonts og bruk én på h1 og en annen på p, og fjern den løse
  <li>-en rundt bildekreditten.
forutsetninger: >-
  Levering: Utpakket mappe «IT-PROJECT-ENLGISH 1/IT-PROJECT-ENLGISH». Ytre mappe
  med « 1» tyder på at den er pakket ut fra en ZIP; ZIP-fila finnes ikke i
  arbeidsmappen.

  Navn: Antatt ut fra innleveringen; mappenavnet har ikke elevnavn. Identiteten
  er ikke bekreftet. Filnavnet er Hayat.md fordi «?» ikke er tillatt i
  Windows-filnavn.

  Rettelser: Ingen filer er endret.
---
# Hayat? – IT Dictionary

**Navn:** Antatt ut fra mappen `IT-PROJECT-ENLGISH 1`; identiteten er ikke bekreftet. Filnavnet er `Hayat.md` fordi `?` ikke er tillatt i Windows-filnavn.

**Status:** Foreløpig filvurdering, ikke endelig karakter. ZIP-ene finnes ikke i arbeidsmappen. AI-/kodeforståelse avklares i samtalen.

Prosjekt: [elever/Hayat/IT-PROJECT-ENLGISH 1/IT-PROJECT-ENLGISH/html/index.html](elever/Hayat/IT-PROJECT-ENLGISH%201/IT-PROJECT-ENLGISH/html/index.html)

## Poeng

| Område | Dokumentert poeng | Merknad |
| --- | ---: | --- |
| Sider og innhold | 20/30 dokumentert | Fem begrepssider, forside, overskrifter og engelske forklaringer finnes. Begrepene oppfyller ikke nøyaktig 3 beginner + 2 advanced (0/5). Fem eksterne kildelenker er ikke nettverkstestet (5 poeng uavklart). |
| Navigasjon | 18/18 statisk kontrollert | Fem forside-lenker, hjemlenker og Next/Previous-kjede peker til eksisterende sider i `html/`. Klikktest i Live Server gjenstår. |
| Plassering mot wireframe | Ikke vurdert /30 | Sonesystemet ble ikke oppgitt til elevene på forhånd; ikke trekk poeng for de nye numeriske grensene. |
| Mappestruktur og ZIP | 5/12 dokumentert; 2 ikke oppfylt; 5 uavklart | Øvrige HTML-sider, CSS, bilder og relative stier er på plass (5 poeng). `index.html` ligger i `html/`, ikke prosjektroten (0/2). Live Server-sideåpning (1), lokale ressurser (2), ZIP (1) og ekstern ekstralenke (1) er uavklart. |
| Kontrast | Ikke målt /10 | WAVE/kontrastforhold må kontrolleres. |

**Dokumentert delsum: 43 poeng.** Ikke oppfylt: 7 poeng. Uavklart: 50 poeng. Dette er ikke en karakter.

## Konkrete funn

- Begrepene er CSS, HTML, Algorithm, Storage og Hyperlink. Bare CSS og HTML står som beginner-begreper i oppgavelisten; valget oppfyller derfor ikke kravet om nøyaktig 3 + 2.
- De fem begrepene har hver sin side, er listet på forsiden og har overskrift, engelsk forklaring og en lenke til kilde.
- Prosjektets eneste forsidefil ligger i `html/index.html`. Prosjektroten `IT-PROJECT-ENLGISH/` har ikke `index.html`.
- Forsidens «Computer World»-lenke er en ekstern lenke og må testes.

## Må avklares

- Bekreft at oppgaven tilhører Hayat.
- Test sidene, lokale ressurser og eksterne lenker med Live Server.
- Kontroller kontrast med WAVE.
- ZIP-navn og ZIP-innhold kan ikke vurderes uten ZIP-filen.
- Samtalen om elevens forklaring av kode/AI er lærerens vurdering og inngår ikke i poengene her.

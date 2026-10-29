---
prosjekt: elever/ask
forslag:
  sider-finnes:
    poeng: 6
    grunn: >-
      index.html og fem begrepssider (File, Server, Browser, Hyperlink, Bug)
      finnes.
  wf-forside:
    poeng: 2
    grunn: >-
      Levert uten mappene virker ikke CSS-en, og forsiden er usminket tekst. Med
      mappene på plass ligger overskrift og liste i en smal boks midt på siden;
      det er ikke noe bilde, og listen ligger ikke til venstre for et bilde.
  wf-ordsider:
    poeng: 3
    grunn: >-
      Levert uten mappene er sidene usminket. Med CSS ligger Home til venstre,
      ordet og forklaringen i midten og Previous/Next i hver sin side, men midt
      på skjermen i stedet for i hjørnene.
  nav-lenker:
    poeng: 1
    grunn: >-
      Ingen interne lenker virker slik filene er levert: Alle peker til
      /html/... og /css/main.css, men filene ligger flatt uten mapper.
      Kildelenken på Server mangler et anførselstegn, og Hyperlink har en tom
      lenke (href="").
  nav-kjede:
    poeng: 5
    grunn: >-
      I koden følger Previous/Next forsidens rekkefølge File → Server → Browser
      → Hyperlink → Bug og går i ring. Kjeden virker ikke slik filene er levert.
  filer-index:
    poeng: 2
    grunn: >-
      index.html er levert, men det finnes ingen rotmappe; alle filene er lastet
      opp enkeltvis rett i oppgaven.
  filer-html:
    poeng: 0
    grunn: >-
      Det finnes ingen html-mappe; begrepssidene er levert løst. Stiene i koden
      (/html/...) viser at du hadde mappen, men den er ikke med.
  filer-css:
    poeng: 0
    grunn: >-
      Det finnes ingen css-mappe; main.css er levert løst ved siden av
      HTML-filene.
  filer-navn:
    poeng: 0
    grunn: >-
      Ingen rotmappe og ingen ZIP-fil, så det finnes ikke noe mappenavn å
      vurdere.
  kode-doctype:
    poeng: 4
    grunn: >-
      Alle sider har <!DOCTYPE html>, html, head og body, men ingen har <title>
      eller lang.
  kode-lukket:
    poeng: 1
    grunn: >-
      Flere feil: Anførselstegnet i charset="UTF-8 og name="viewport lukkes
      ikke, kildelenkene ligger som <a> inni en annen <a>, flere sider har en
      løs </li>, og section lukkes ikke på bug.html.
  kode-innrykk:
    poeng: 3
    grunn: >-
      Body er greit rykket inn, men head er ujevn, og to <p> står på samme
      linje.
  kode-struktur:
    poeng: 4
    grunn: 'Bruker nav, section og div på begrepssidene og section på forsiden.'
  kode-nosting:
    poeng: 2
    grunn: >-
      Home-lenken ligger i en <h1>, så hver side får to h1-er, og <a> inni <a>
      er ikke lov. Nav-ene rundt navigasjonen er riktig tenkt.
  kode-fonter:
    poeng: 0
    grunn: Ingen eksterne fonter.
  kode-css-kobling:
    poeng: 6
    grunn: >-
      Bruker tagger (body), klasser (.worddefinition) og id-er (#topnav,
      #bottomnav, #inholdsfortegnelse) riktig i CSS.
  design-kontrast:
    poeng: 4
    grunn: 'Svart tekst og blå lenker på lys cyan er lett å lese (8,6:1).'
  design-fonter:
    poeng: 0
    grunn: 'Ingen font-family er satt, så alt er nettleserens standardfont.'
forbedring: >-
  Det viktigste du kan jobbe med, er å levere prosjektet slik det ser ut på
  maskinen din: som én ZIP-fil med rotmappen, index.html i roten og mappene html
  og css. Du har lastet opp filene enkeltvis, uten mapper, og da virker verken
  CSS-en eller lenkene, fordi koden din peker til /css/main.css og /html/....
  Stiene viser at du hadde mappene, så du var nær ved å få det til. Bruk
  relative stier (css/main.css fra forsiden, ../css/main.css fra begrepssidene)
  og sjekk at siden virker når du åpner index.html fra ZIP-filen.


  Et lite tips i tillegg: Sjekk at alle anførselstegn lukkes (for eksempel
  charset="UTF-8"), og legg ikke en <a> inni en annen <a>.
forutsetninger: >-
  Levering: Ikke levert som ZIP. Filene ble lastet opp enkeltvis, rett i
  oppgaven, uten rotmappe og uten undermapper: index.html, fem begrepssider og
  main.css lå på samme nivå.

  Navn: Fra innleveringen i oppgaven.

  Rettelser: For å kunne se nettsiden har Claude laget mappene css/ og html/ og
  flyttet main.css og de fem begrepssidene dit, slik stiene i koden
  (/css/main.css, /html/...) viser at de lå hos eleven. Koden er ikke endret.
  Poengene for filer og mappestruktur og for lenker er satt ut fra det som
  faktisk ble levert, ikke ut fra rettelsen.

  Merk: server.html lenker til /main.css i stedet for /css/main.css, så den
  siden får ikke CSS selv etter rettelsen.
---
# Ask – IT Dictionary


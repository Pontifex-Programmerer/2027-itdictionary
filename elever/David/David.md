---
prosjekt: elever/David/It-Dictionary-David 2/It-Dictionary-David
forslag:
  sider-finnes:
    poeng: 6
    grunn: >-
      index.html og fem begrepssider (browser, encryption, firewall, html,
      password) finnes.
  wf-forside:
    poeng: 4
    grunn: >-
      Overskrift og bilde er sentrert, men begrepene ligger som en vannrett meny
      øverst, ikke som en liste til venstre med bildet til høyre. En løs «>»
      vises øverst til venstre (fra <main>>).
  wf-ordsider:
    poeng: 5
    grunn: >-
      Overskrift og forklaring er sentrert. Home ligger nede i midten, ikke
      øverst til venstre. Previous/Next ligger under boksen til venstre/høyre,
      ikke i hjørnene nederst på siden.
  nav-lenker:
    poeng: 8
    grunn: >-
      Alle interne lenker og kildelenker fungerer når Live Server startes fra
      prosjektmappen. Alle stier starter med / (rot-relative), så lenker, CSS og
      bilder brytes hvis siden åpnes direkte eller fra en overmappe.
  nav-kjede:
    poeng: 5
    grunn: >-
      Next/Previous følger forsidens rekkefølge Browser → Encryption → Firewall
      → HTML → Password, og går i ring fra Password tilbake til Browser.
  filer-index:
    poeng: 5
    grunn: index.html ligger i rotmappen It-Dictionary-David/.
  filer-html:
    poeng: 5
    grunn: Alle fem begrepssidene ligger i html/.
  filer-css:
    poeng: 2
    grunn: style.css ligger i css/.
  filer-navn:
    poeng: 5
    grunn: >-
      Rotmappen heter It-Dictionary-David: inneholder både navn og
      IT-Dictionary, men ikke i formatet david_it_dictionary.
  kode-doctype:
    poeng: 5
    grunn: 'Alle sider har <!DOCTYPE html>, html (med lang), head og body.'
  kode-lukket:
    poeng: 4
    grunn: >-
      Taggene er riktig åpnet og lukket, men index.html har en skrivefeil:
      <main>> gir et ekstra tegn på siden.
  kode-innrykk:
    poeng: 4
    grunn: >-
      Stort sett jevnt innrykk. Noen avvik: <ul> og første <li> på samme linje
      (encryption.html), </ul> på slutten av en <li>-linje og </main> feil
      innrykket (password.html).
  kode-struktur:
    poeng: 4
    grunn: >-
      Bruker nav, main, footer og div. Ingen section eller span, men strukturen
      er tydelig.
  kode-nosting:
    poeng: 4
    grunn: >-
      Fornuftig og semantisk: nav > a, main > h1/p/ul/a, footer > a.
      div.main-container rundt bildet har ingen CSS-regel og gjør ingenting.
  kode-fonter:
    poeng: 1
    grunn: >-
      Orbitron og Roboto er lenket riktig fra Google Fonts, men brukes aldri i
      CSS-en; all tekst er Arial.
  kode-css-kobling:
    poeng: 4
    grunn: >-
      Tagger (body, h1, img) og klasser (.quick-menu, .info, .side) brukes i
      CSS. Ingen id-er. Klassene active, home-link, resource-info og
      main-container har ingen regler.
  design-kontrast:
    poeng: 4
    grunn: >-
      Hvit tekst på #222 og lyseblå hover gir god kontrast. Kildelenken har
      standard mørkeblå farge på #222 og er vanskelig å lese.
  design-fonter:
    poeng: 0
    grunn: >-
      Én font (Arial) for alt innhold; overskrift og brødtekst skilles bare med
      størrelse.
forbedring: >-
  Det viktigste du kan jobbe med, er å bruke CSS til å plassere elementene der
  wireframen viser dem. Koden din er ryddig og godt strukturert, men oppsettet
  følger ikke skissen: På forsiden ligger begrepene i en meny øverst i stedet
  for i en liste til venstre med bildet til høyre, og på begrepssidene ligger
  Home nede i midten i stedet for øverst til venstre. Øv på flexbox, for
  eksempel en container med display: flex rundt listen og bildet, og på å
  plassere navigasjonen i hjørnene av siden.


  Et lite tips i tillegg: Du lenker inn Google-fontene Orbitron og Roboto, men
  bruker dem aldri. Legg dem inn med font-family, for eksempel Orbitron på h1 og
  Roboto på p, så får du også skilt overskrifter fra brødtekst.
forutsetninger: >-
  Levering: Utpakket mappe «It-Dictionary-David 2/It-Dictionary-David». Ytre
  mappe med « 2» tyder på at den er pakket ut fra en ZIP; ZIP-fila finnes ikke i
  arbeidsmappen.

  Navn: Fra mappenavnet.

  Rettelser: Ingen filer er endret. Nettsiden åpnes med prosjektmappen som rot,
  fordi alle stier er rot-relative (/css/...).
---
# David – IT Dictionary

**Status:** Foreløpig filvurdering, ikke endelig karakter. ZIP-ene finnes ikke i arbeidsmappen. AI-/kodeforståelse avklares i samtalen.

Prosjekt: [elever/David/It-Dictionary-David 2/It-Dictionary-David/index.html](elever/David/It-Dictionary-David%202/It-Dictionary-David/index.html)

## Poeng

| Område | Dokumentert poeng | Merknad |
| --- | ---: | --- |
| Sider og innhold | 25/30 dokumentert | Browser, Encryption, Firewall, HTML og Password gir nøyaktig 3 beginner + 2 advanced. Fem egne sider, liste, overskrifter og engelske forklaringer finnes. De fem eksterne kildelenkene er ikke nettverkstestet (5 poeng uavklart). |
| Navigasjon | 18/18 statisk kontrollert | Fem forside-lenker, hjemlenker og Next/Previous-kjede peker til eksisterende prosjektfiler. Klikktest i Live Server gjenstår. |
| Plassering mot wireframe | Ikke vurdert /30 | Sonesystemet ble ikke oppgitt til elevene på forhånd; ikke trekk poeng for de nye numeriske grensene. |
| Mappestruktur og ZIP | 7/12 dokumentert; 1 ikke oppfylt; 4 uavklart | `index.html`, HTML-, CSS- og bildemapper er på plass (6 poeng). Ingen lenker utenfor de allerede vurderte navigasjons- og kildehenvisningene er funnet (1 poeng). Lokale stier begynner med `/` og er ikke relative (0/1). Live Server-sideåpning (1), lokale ressurser (2) og ZIP (1) er uavklart. |
| Kontrast | Ikke målt /10 | WAVE/kontrastforhold må kontrolleres. |

**Dokumentert delsum: 50 poeng.** Ikke oppfylt: 1 poeng. Uavklart: 49 poeng. Dette er ikke en karakter.

## Konkrete funn

- Begrepsvalget samsvarer med oppgavens ordlister: Browser, HTML og Password er beginner; Encryption og Firewall er advanced.
- Alle fem oppgitte begrepssider har engelsk forklaring og en kildelenke i HTML. Eksterne lenker er ikke åpnet.
- Interne lenker bruker rot-relative stier som `/html/browser.html` og `/index.html`. De kan fungere når prosjektmappen er serverrot, men oppfyller ikke rubrikkens krav om relative filstier.

## Må avklares

- Test alle sider, lokale ressurser og eksterne kildelenker gjennom Live Server.
- Kontroller kontrast med WAVE.
- ZIP-navn og ZIP-innhold kan ikke vurderes uten ZIP-filen.
- Samtalen om elevens forklaring av kode/AI er lærerens vurdering og inngår ikke i poengene her.

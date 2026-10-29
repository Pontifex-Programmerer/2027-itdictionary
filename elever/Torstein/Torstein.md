---
prosjekt: elever/Torstein/Torstein-engprog-prøve/engprog-prøve
forslag:
  sider-finnes:
    poeng: 6
    grunn: >-
      index.html og fem begrepssider (Bug, LAN, OS, Software, Hardware) finnes,
      pluss en kildeside og en spøkeside.
  wf-forside:
    poeng: 9
    grunn: >-
      Overskriften er sentrert over listen til venstre og bildet til høyre, som
      i wireframen.
  wf-ordsider:
    poeng: 4
    grunn: >-
      Ordet og forklaringen er sentrert, men Home ligger nederst i midten i
      stedet for øverst til venstre, og bildet står til venstre i boksen.
      Previous/Next ligger under bildet, ikke i hjørnene på siden.
  nav-lenker:
    poeng: 6
    grunn: >-
      Relative stier, og alle lenker virker. Home på begrepssidene går til en
      spøkeside («Du trode det ville funke») i stedet for forsiden, så brukeren
      må klikke en gang til.
  nav-kjede:
    poeng: 5
    grunn: >-
      Previous/Next følger forsidens rekkefølge Bug → LAN → OS → Software →
      Hardware og går i ring.
  filer-index:
    poeng: 5
    grunn: index.html ligger i rotmappen.
  filer-html:
    poeng: 5
    grunn: Alle begrepssidene ligger i html/.
  filer-css:
    poeng: 2
    grunn: main.css ligger i css/.
  filer-navn:
    poeng: 2
    grunn: >-
      Mappen heter engprog-prøve (zip: Torstein-engprog-prøve) og har navnet
      ditt, men ikke it_dictionary.
  kode-doctype:
    poeng: 4
    grunn: >-
      Sidene har <!DOCTYPE html>, html, head og body, men sourses.html mangler
      </head> og <body>. Bare index.html har lang.
  kode-lukket:
    poeng: 3
    grunn: >-
      sourses.html har ikke lukket head og ingen body. Forsiden har class="2";
      klassenavn kan ikke starte med et tall i CSS.
  kode-innrykk:
    poeng: 2
    grunn: >-
      Nesten ingen innrykk inne i body; section, h1, div og lenker står på samme
      nivå.
  kode-struktur:
    poeng: 3
    grunn: >-
      Bruker section og div, men samme oppsett er gjentatt i mange klasser
      (.hei, .Bug, .ul, .Linker).
  kode-nosting:
    poeng: 3
    grunn: >-
      Begrepssidene har p og img rett i section og navigasjonen i en div.
      Fungerer, men uten tydelig struktur.
  kode-fonter:
    poeng: 0
    grunn: Ingen eksterne fonter. Comic Sans MS er en systemfont.
  kode-css-kobling:
    poeng: 4
    grunn: >-
      Tagger (html, div, h1, p) og klasser brukes i CSS, men mange regler er
      kopiert (.ul står to ganger) og noen klasser brukes ikke. Ingen id-er.
  design-kontrast:
    poeng: 2
    grunn: >-
      Antikkhvit tekst på grått har bare 3,4:1, og blå lenker på grått bare
      2,4:1. Begge er vanskelige å lese.
  design-fonter:
    poeng: 0
    grunn: >-
      Comic Sans brukes på all tekst, så overskrift og brødtekst skilles bare
      med størrelse.
forbedring: >-
  Det viktigste du kan jobbe med, er kontrast. Den lyse teksten og de blå
  lenkene på grå bakgrunn er vanskelige å lese (2,4:1 for lenkene, kravet er
  4,5:1). Gi lenkene en egen farge i CSS, for eksempel a { color: white; },
  eller gjør bakgrunnen mørkere. Sjekk fargene i en kontrastsjekker før du
  velger dem.


  Et lite tips i tillegg: Samle reglene som er like i én klasse i stedet for å
  kopiere dem til .hei, .Bug, .ul og .Linker, og rykk inn koden etter nøstingen.
  Spøken er morsom, men Home bør gå rett til forsiden.
forutsetninger: >-
  Levering: Utpakket mappe «Torstein-engprog-prøve/engprog-prøve». Ytre mappe
  har samme navn som en ZIP ville fått; ZIP-fila finnes ikke i arbeidsmappen.

  Navn: Fra den ytre mappen; selve prosjektmappen heter «engprog-prøve».

  Rettelser: Ingen filer er endret.
---
# Torstein – IT Dictionary

**Status:** Foreløpig filvurdering, ikke endelig karakter. ZIP-ene finnes ikke i arbeidsmappen. AI-/kodeforståelse avklares i samtalen.

Prosjekt: [elever/Torstein/Torstein-engprog-prøve/engprog-prøve/index.html](elever/Torstein/Torstein-engprog-pr%C3%B8ve/engprog-pr%C3%B8ve/index.html)

## Poeng

| Område | Dokumentert poeng | Merknad |
| --- | ---: | --- |
| Sider og innhold | 25/30 | Bug, LAN, OS, Software og Hardware har hver sin side, listes på forsiden og har overskrift/forklaring. OS regnes som forkortelse for «Operating System»; valget oppfyller 3 beginner + 2 advanced (5/5). Kildene står på en separat side uten lenke fra begrepssidene (0/5 kildepoeng). |
| Navigasjon | 13/18 statisk kontrollert | Fem forside-lenker (5/5) og Next/Previous-kjede (8/8) peker til eksisterende sider. «Home» på begrepssidene peker til `Spøk.html`, ikke til forsiden (0/5). Klikktest i Live Server gjenstår. |
| Plassering mot wireframe | Ikke vurdert /30 | Sonesystemet ble ikke oppgitt til elevene på forhånd; ikke trekk poeng for de nye numeriske grensene. |
| Mappestruktur og ZIP | 7/12 dokumentert; 0 ikke oppfylt; 5 uavklart | `index.html`, øvrige HTML-sider, CSS, bilder og relative lokale stier er på plass (7 poeng). Live Server-sideåpning (1), lokale ressurser (2), ZIP (1) og ekstra lenker på kildesiden (1) er uavklart. |
| Kontrast | Ikke målt /10 | WAVE/kontrastforhold må kontrolleres. |

**Dokumentert delsum: 45 poeng.** Ikke oppfylt: 10 poeng. Uavklart: 45 poeng. Dette er ikke en karakter.

## Konkrete funn

- Begrepsvalget er tre beginner (Operating System/OS, Software, Hardware) og to advanced (LAN, Bug).
- `Spøk.html` er en egen «Prøv igjen»-side med humoristisk innhold, ikke en forside. Hjemlenkene fra alle fem begrepssidene fører dit.
- Kildene er samlet i `html/sourses.html`; de fem begrepssidene har ikke egne lenker til denne siden eller kildene.
- Forsidens lenke til `sourses.html` peker til en fil som finnes.

## Må avklares

- Test alle sider, bilder, stilark og eksterne kildelenker gjennom Live Server.
- Kontroller kontrast med WAVE.
- ZIP-navn og ZIP-innhold kan ikke vurderes uten ZIP-filen.
- Samtalen om elevens forklaring av kode/AI er lærerens vurdering og inngår ikke i poengene her.

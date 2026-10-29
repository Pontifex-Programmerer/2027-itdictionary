---
prosjekt: elever/Fabian/fabian/Dictionary
forside: Index/index.html
forslag:
  sider-finnes:
    poeng: 6
    grunn: >-
      index.html og fem begrepssider (AI, Computer, Data, Firewall, Malware)
      finnes.
  wf-forside:
    poeng: 6
    grunn: >-
      Listen ligger til venstre og bildet til høyre, men overskriften står inne
      i bildeboksen i stedet for sentrert over begge. body har overflow: hidden,
      så det femte ordet (Malware) havner under kanten på en vanlig laptopskjerm
      og kan ikke scrolles fram.
  wf-ordsider:
    poeng: 5
    grunn: >-
      Home ligger øverst til venstre i navbaren, og ordet er sentrert. Bildet er
      plassert med position: fixed og dekker deler av forklaringsteksten. Next
      står til venstre og Back til høyre, motsatt av wireframen, og
      Source-knappen overlapper Back.
  nav-lenker:
    poeng: 7
    grunn: >-
      Relative stier, og forsideknappene virker via JavaScript. Hub-lenken peker
      til ../../../Main/Main.html, som ikke finnes, og kildelenken på Data har
      skrivefeil (hhttps://). Lenken til gjeldende side i navbaren er href="#".
  nav-kjede:
    poeng: 5
    grunn: >-
      Next/Back følger forsidens rekkefølge AI → Computer → Data → Firewall →
      Malware og går i ring.
  filer-index:
    poeng: 0
    grunn: 'index.html ligger i undermappen Index/, ikke i rotmappen.'
  filer-html:
    poeng: 3
    grunn: 'Begrepssidene ligger samlet i Pages/, ikke i en mappe som heter html.'
  filer-css:
    poeng: 1
    grunn: >-
      CSS ligger i to ulike css-mapper (Index/css og Pages/css), ikke i én
      css-mappe i roten.
  filer-navn:
    poeng: 0
    grunn: Rotmappen heter Dictionary og har verken navnet ditt eller it_dictionary.
  kode-doctype:
    poeng: 5
    grunn: >-
      Alle sider har <!DOCTYPE html>, html, head og body. Begrepssidene mangler
      <title>.
  kode-lukket:
    poeng: 5
    grunn: >-
      Taggene er riktig åpnet og lukket. button har et alt-attributt, som ikke
      finnes for knapper.
  kode-innrykk:
    poeng: 4
    grunn: >-
      Jevnt innrykk, men svært mange tomme linjer, og kilde-URL-en på AI er delt
      over flere linjer.
  kode-struktur:
    poeng: 4
    grunn: >-
      Bruker section og div til å dele opp siden, men hver knapp på forsiden
      ligger i sin egen div uten noen funksjon.
  kode-nosting:
    poeng: 3
    grunn: >-
      Mye av oppsettet er gjort med position: fixed i stedet for å la elementene
      ligge i flyten. Derfor overlapper bildet teksten. Div-ene rundt knappene
      har klasser som ikke brukes i CSS.
  kode-fonter:
    poeng: 0
    grunn: >-
      CSS-en ber om Inter og Poppins, men fontene er ikke lenket inn fra Google
      Fonts, så nettleseren bruker sans-serif.
  kode-css-kobling:
    poeng: 5
    grunn: >-
      Bruker tagger, klasser og id-er. Id-en page-group er brukt på fem lenker
      på samme side; en id skal være unik, så dette burde vært en klasse.
      index.css starter med en løs * som gjør første regel til «* button».
  design-kontrast:
    poeng: 4
    grunn: >-
      Svart tekst på #6F8FAF (6,2:1) og mørk tekst på samme farge (5,2:1) er
      lesbart. Teksten som skjules bak bildet, gjør innholdet vanskeligere å
      lese.
  design-fonter:
    poeng: 1
    grunn: >-
      Planen om Poppins på h1 og Inter på p er riktig, men siden fontene ikke
      lastes, blir begge sans-serif.
  filer-js:
    poeng: 2
    grunn: index.js ligger i Index/js/ og brukes til knappene på forsiden.
forbedring: >-
  Det viktigste du kan jobbe med, er å plassere elementer uten position: fixed.
  Når nesten alt er fixed, tar ikke elementene hensyn til hverandre: Bildet
  legger seg over forklaringsteksten, og Source-knappen dekker Back. La
  elementene ligge i den vanlige flyten og bruk en flex-container, for eksempel
  display: flex rundt teksten og bildet, så får de plass ved siden av hverandre.


  Et lite tips i tillegg: Lenk inn Poppins og Inter fra Google Fonts med en
  <link> i head, så får du fontene du har valgt i CSS-en. Bruk også vanlige
  <a>-lenker på forsiden i stedet for knapper med JavaScript, og legg index.html
  i rotmappen.
forutsetninger: >-
  Levering: Levert som ZIP. Den utpakkede mappen inneholder __MACOSX, som bare
  oppstår når en ZIP lages på Mac.

  Navn: Ytre mappe heter «fabian»; selve prosjektmappen heter «Dictionary» og
  har ikke navnet hans.

  Rettelser: Ingen filer er endret. __MACOSX er ignorert i vurderingen.
---
# Fabian – IT Dictionary

**Status:** Foreløpig filvurdering, ikke endelig karakter. ZIP-ene finnes ikke i arbeidsmappen. AI-/kodeforståelse avklares i samtalen.

Prosjekt: [elever/Fabian/fabian/Dictionary/Index/index.html](elever/Fabian/fabian/Dictionary/Index/index.html)

## Poeng

| Område | Dokumentert poeng | Merknad |
| --- | ---: | --- |
| Sider og innhold | 20/30 dokumentert | 5 begrepssider, liste, overskrifter og engelske forklaringer er på plass. Begrepsvalget oppfyller ikke 3 beginner + 2 advanced (0/5). Fire eksterne kildelenker er ikke nettverkstestet (4 poeng uavklart); Data-lenken er ugyldig (1/5 kildepoeng ikke oppfylt). |
| Navigasjon | 18/18 statisk kontrollert | Knapper, hjem, Next og Back peker til eksisterende sider/stier i prosjektet. Klikktest i Live Server gjenstår. |
| Plassering mot wireframe | Ikke vurdert /30 | Sonesystemet ble ikke oppgitt til elevene på forhånd; ikke trekk poeng for de nye numeriske grensene. |
| Mappestruktur og ZIP | 5/12 dokumentert; 3 ikke oppfylt; 4 uavklart | HTML-sidene, CSS og bilder er sortert i mapper (4 poeng); stiene er relative (1 poeng). `index.html` ligger i `Index/`, ikke prosjektroten (0/2). «Hub»-lenken peker til manglende `Main/Main.html` (0/1). Live Server-sideåpning (1), lokale ressurser (2) og ZIP (1) er uavklart. |
| Kontrast | Ikke målt /10 | WAVE/kontrastforhold må kontrolleres. |

**Dokumentert delsum: 43 poeng.** Ikke oppfylt: 9 poeng. Uavklart: 48 poeng. Dette er ikke en karakter.

## Konkrete funn

- De fem begrepene er AI, Computer, Data, Firewall og Malware. Bare Computer og Data er beginner-begreper fra oppgavelisten, og Firewall er advanced; fordelingen kvalifiserer derfor ikke til 3 + 2.
- Alle fem begrepssidene har overskrift, engelsk forklaring og en kildelenke. Fire eksterne lenker må åpnes for å bekrefte at de virker. Data-sidens kildelenke er feilskrevet som `hhttps://www.ibm.com/think/topics/data`.
- På hver begrepsside finnes en «Hub»-lenke til `../../../Main/Main.html`, som ikke finnes i prosjektet.
- `index.html` ligger i `Dictionary/Index/`, ikke i `Dictionary/`-roten.

## Må avklares

- Kjør alle sider og lokale ressurser med Live Server; statiske stier er gjennomgått, men servertesten er ikke kjørt.
- Kontroller kontrast med WAVE.
- ZIP-navn og ZIP-innhold kan ikke vurderes uten ZIP-filen.
- Samtalen om elevens forklaring av kode/AI er lærerens vurdering og inngår ikke i poengene her.

---
prosjekt: elever/Leander/itDictionary_Leander (3)/itDictionary_Leander
forslag:
  sider-finnes:
    poeng: 6
    grunn: >-
      index.html og fem begrepssider (Navigation, Generative AI, Software,
      Layout, Stylesheet) finnes.
  wf-forside:
    poeng: 10
    grunn: >-
      Overskriften er sentrert over en boks med listen til venstre og bildet til
      høyre, som i wireframen.
  wf-ordsider:
    poeng: 9
    grunn: >-
      Home ligger øverst til venstre, ordet og forklaringen er sentrert i en
      boks med kilden nederst til høyre, og Previous/Next ligger i hvert sitt
      hjørne. Knappene står et stykke opp fra bunnen.
  nav-lenker:
    poeng: 8
    grunn: >-
      Alle lenker virker i Live Server fra prosjektmappen. Stiene er
      rot-relative, og flere bruker /css og /html med små bokstaver mens mappene
      heter CSS og Html. Det virker på Windows, men ikke på en server som
      skiller store og små bokstaver. Home-knappen på forsiden har href="".
  nav-kjede:
    poeng: 5
    grunn: >-
      Previous/Next følger forsidens rekkefølge Navigation → Generative AI →
      Software → Layout → Stylesheet og går i ring.
  filer-index:
    poeng: 5
    grunn: index.html ligger i rotmappen.
  filer-html:
    poeng: 5
    grunn: Alle fem begrepssidene ligger i Html/.
  filer-css:
    poeng: 2
    grunn: CSS-filene ligger i CSS/. wordbonus.css brukes ikke av noen side.
  filer-navn:
    poeng: 5
    grunn: 'Rotmappen heter itDictionary_Leander, som oppgaven ber om.'
  kode-doctype:
    poeng: 5
    grunn: 'Alle sider har <!DOCTYPE html>, html med lang, head og body.'
  kode-lukket:
    poeng: 5
    grunn: Taggene er riktig åpnet og lukket.
  kode-innrykk:
    poeng: 5
    grunn: Ryddig og jevnt innrykk på alle sider.
  kode-struktur:
    poeng: 5
    grunn: >-
      Bruker header, section, div og footer, med kommentarer som forklarer hva
      de er til.
  kode-nosting:
    poeng: 5
    grunn: >-
      God struktur: header med Home, section > div.information med h1, p og
      kilde, footer > div.hyper_link med navigasjonen.
  kode-fonter:
    poeng: 0
    grunn: >-
      Ingen eksterne fonter. Georgia, Arial og Franklin Gothic er fonter som
      allerede ligger på maskinen.
  kode-css-kobling:
    poeng: 4
    grunn: >-
      Tagger (body, header, section, h1, p, a, img) og klasser (.hjem-knapp,
      .knapp, .source, .word_definition) brukes i CSS. Id-ene top-nav, index,
      previ og nexti brukes ikke i CSS.
  design-kontrast:
    poeng: 4
    grunn: >-
      Svart tekst på #79b4b7 er godt lesbar (9:1), men svart tekst på de mørke
      knappene (#366A70) har bare 3,5:1.
  design-fonter:
    poeng: 2
    grunn: >-
      Georgia på h1 og Arial på p gir tydelig skille mellom overskrift og
      brødtekst.
forbedring: >-
  Det viktigste du kan jobbe med, er filstiene. Alle stiene dine starter med /,
  og flere bruker små bokstaver (/css, /html) mens mappene heter CSS og Html.
  Det virker i Live Server på Windows, men brytes når siden åpnes direkte eller
  legges på en webserver. Bruk relative stier (CSS/main.css fra forsiden,
  ../CSS/word.css og ../index.html fra begrepssidene), og skriv mappenavnene
  nøyaktig likt hver gang.


  Et lite tips i tillegg: Koden din er ryddig og godt kommentert. Prøv å hente
  fontene fra Google Fonts i stedet for systemfonter, og gi knappene lys tekst,
  så blir kontrasten bedre.
forutsetninger: >-
  Levering: Utpakket mappe «itDictionary_Leander (3)/itDictionary_Leander». Ytre
  mappe med « (3)» tyder på at den er pakket ut fra en ZIP; ZIP-fila finnes ikke
  i arbeidsmappen.

  Navn: Fra mappenavnet.

  Rettelser: Ingen filer er endret. Nettsiden åpnes med prosjektmappen som rot,
  fordi alle stier er rot-relative (/css/...).
---
# Leander – IT Dictionary

**Status:** Foreløpig filvurdering, ikke endelig karakter. ZIP-ene finnes ikke i arbeidsmappen. AI-/kodeforståelse avklares i samtalen.

Prosjekt: [elever/Leander/itDictionary_Leander (3)/itDictionary_Leander/index.html](elever/Leander/itDictionary_Leander%20(3)/itDictionary_Leander/index.html)

## Poeng

| Område | Dokumentert poeng | Merknad |
| --- | ---: | --- |
| Sider og innhold | 20/30 dokumentert | Fem begrepssider, liste, overskrifter og engelske forklaringer finnes. Valget Navigation, Generative AI, Software, Layout og Stylesheet oppfyller ikke 3 + 2 fra oppgavelistene (0/5). Fem eksterne kildelenker er ikke nettverkstestet (5 poeng uavklart). |
| Navigasjon | 18/18 statisk kontrollert | Forside-lenker, hjemlenker og Next/Previous-kjede peker til eksisterende sider. Klikktest i Live Server gjenstår. |
| Plassering mot wireframe | Ikke vurdert /30 | Sonesystemet ble ikke oppgitt til elevene på forhånd; ikke trekk poeng for de nye numeriske grensene. |
| Mappestruktur og ZIP | 7/12 dokumentert; 1 ikke oppfylt; 4 uavklart | `index.html`, øvrige HTML-sider, CSS- og bildemapper er på plass (6 poeng). Ekstra hjemlenke på forsiden peker til gjeldende side (1 poeng). Lokale stier begynner med `/` og er ikke relative (0/1). Live Server-sideåpning (1), lokale ressurser (2) og ZIP (1) er uavklart. |
| Kontrast | Ikke målt /10 | WAVE/kontrastforhold må kontrolleres. |

**Dokumentert delsum: 45 poeng.** Ikke oppfylt: 6 poeng. Uavklart: 49 poeng. Dette er ikke en karakter.

## Konkrete funn

- Hvert av de fem valgte begrepene har en egen HTML-side, engelsk forklaring og kildelenke i HTML. Eksterne kildelenker er ikke testet.
- Forside- og sidelenker bruker rot-relative stier som `/html/...`, `/Html/...`, `/CSS/...` og `/index.html`. De er ikke relative stier etter rubrikken.
- Flere filer har mellomrom eller ulik bruk av store og små bokstaver i filnavn/stier. Windows håndterer normalt store/små bokstaver likt, men lenkene bør likevel testes gjennom Live Server.

## Må avklares

- Test alle sider, CSS, bilder og eksterne kildelenker gjennom Live Server.
- Kontroller kontrast med WAVE.
- ZIP-navn og ZIP-innhold kan ikke vurderes uten ZIP-filen.
- Samtalen om elevens forklaring av kode/AI er lærerens vurdering og inngår ikke i poengene her.

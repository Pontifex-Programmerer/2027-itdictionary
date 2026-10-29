---
prosjekt: elever/Nikolaj/nikolaj-levert-uten-navn
forslag:
  sider-finnes:
    poeng: 6
    grunn: >-
      index.html og fem begrepssider (Algorithm, Ip address, Bug, File,
      Software) finnes.
  wf-forside:
    poeng: 10
    grunn: >-
      Overskriften er sentrert over en boks med listen til venstre og bildet til
      høyre, som i wireframen.
  wf-ordsider:
    poeng: 9
    grunn: >-
      Home ligger øverst til venstre, ordet og definisjonen er sentrert, kilden
      til høyre, og Previous/Next i hvert sitt hjørne. Knappene ligger nederst i
      boksen, ikke nederst på siden.
  nav-lenker:
    poeng: 10
    grunn: 'Alle lenker er relative og virker, også når index.html åpnes direkte.'
  nav-kjede:
    poeng: 5
    grunn: >-
      Previous/Next følger forsidens rekkefølge Algorithm → Ip address → Bug →
      File → Software og går i ring.
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
    poeng: 0
    grunn: >-
      Mappen har verken navnet ditt eller it_dictionary (oppgaven ber om
      itDictionary_Dittnavn).
  kode-doctype:
    poeng: 5
    grunn: 'Alle sider har <!DOCTYPE html>, html med lang, head med charset og body.'
  kode-lukket:
    poeng: 5
    grunn: Taggene er riktig åpnet og lukket.
  kode-innrykk:
    poeng: 4
    grunn: >-
      Ryddig innrykk, men to <p> står på samme linje, og lenken i
      wikipedia-container er ikke rykket inn.
  kode-struktur:
    poeng: 5
    grunn: 'Bruker section, div og nav på en gjennomtenkt måte.'
  kode-nosting:
    poeng: 5
    grunn: >-
      God og semantisk: section som kort, div.content-wrapper med flex rundt
      listen og bildet, nav > ul > li > a for Previous/Next.
  kode-fonter:
    poeng: 0
    grunn: >-
      Ingen eksterne fonter. system-ui og Times New Roman er fonter som allerede
      ligger på maskinen.
  kode-css-kobling:
    poeng: 4
    grunn: >-
      Tagger (body, section, h1, p, ol, li) og klasser (.content-wrapper,
      .home-link, .word-nav, .bilde-koding) brukes, også sammensatte selektorer
      som .word-nav a. Ingen id-er.
  design-kontrast:
    poeng: 5
    grunn: >-
      Mørk tekst på #67a39b (6,6:1), hvit tekst på svarte knapper og Home på
      mørk bakgrunn gir god kontrast.
  design-fonter:
    poeng: 2
    grunn: >-
      Sans-serif på h1 og Times New Roman på p gir tydelig skille mellom
      overskrift og forklaring.
forbedring: >-
  Det viktigste du kan jobbe med, er eksterne fonter. Koden og oppsettet ditt er
  ryddig og følger wireframen godt, men du bruker bare fonter som allerede
  ligger på maskinen. Velg to fonter på Google Fonts (for eksempel via
  fontjoy.com), lim inn <link>-taggen i head på alle sidene, og bruk dem med
  font-family på h1 og p.


  Et lite tips i tillegg: Prøv å bruke en id der noe bare finnes én gang på
  siden, for eksempel Home-lenken, så har du brukt alle tre typene selektorer.
  Husk også å gi prosjektmappen navnet itDictionary_Nikolaj.
forutsetninger: >-
  Levering: Mappen inneholder .DS_Store (laget på Mac). Ukjent om den ble levert
  som ZIP; ZIP-fila finnes ikke i arbeidsmappen.

  Navn: Innleveringen har ikke elevnavn. Mappen er gitt navnet
  «nikolaj-levert-uten-navn» i etterkant for å holde styr på hvem den tilhører.

  Rettelser: Ingen filer er endret.
---
# Nikolaj – IT Dictionary

**Navn:** Mappen heter `nikolaj-levert-uten-navn`; innleveringen har ikke elevnavn i mappenavnet (oppgaven ber om `itDictionary_Dittnavn`).

**Status:** Foreløpig filvurdering, ikke endelig karakter. ZIP-ene finnes ikke i arbeidsmappen. AI-/kodeforståelse avklares i samtalen.

Prosjekt: [elever/Nikolaj/nikolaj-levert-uten-navn/index.html](elever/Nikolaj/nikolaj-levert-uten-navn/index.html)

## Poeng

| Område | Dokumentert poeng | Merknad |
| --- | ---: | --- |
| Sider og innhold | 20/30 dokumentert | Fem begrepssider, liste på forsiden, overskrifter og engelske forklaringer (med «Definition» og «Real life») finnes. Begrepene oppfyller ikke nøyaktig 3 beginner + 2 advanced (0/5). Fem eksterne kildelenker (Wikipedia) er ikke nettverkstestet (5 poeng uavklart). |
| Navigasjon | 18/18 statisk kontrollert | Fem forside-lenker, fem hjemlenker og Next/Previous mellom de fire naboparene peker til eksisterende sider med relative stier. Klikktest i Live Server gjenstår. |
| Plassering mot wireframe | Ikke vurdert /30 | Sonesystemet ble ikke oppgitt til elevene på forhånd; ikke trekk poeng for de nye numeriske grensene. |
| Mappestruktur og ZIP | 8/12 dokumentert; 4 uavklart | `index.html` i roten (2), HTML-sider i `html/` (2), CSS i `css/` (1), bilde i `media/` (1), alle lokale stier er relative (1), og det finnes ingen ekstra lenker utover navigasjon og kilder (1). Live Server-sideåpning (1), lokale ressurser (2) og ZIP (1) er uavklart. |
| Kontrast | Ikke målt /10 | Foreløpig beregnet fra CSS: 5 av 6 kombinasjoner består; hover-fargen på Wikipedia-lenken er under kravet (se under). Bekreftes med WAVE. |

**Dokumentert delsum: 46 poeng.** Ikke oppfylt: 5 poeng. Uavklart: 49 poeng. Dette er ikke en karakter.

## Konkrete funn

- Begrepene er Algorithm, Ip address, Bug, File og Software. Ip address, File og Software er beginner, og Bug er advanced. Algorithm står ikke på oppgavelisten. Fordelingen er derfor 3 beginner + 1 advanced + 1 begrep utenfor listen.
- Rekkefølgen er Algorithm → Ip address → Bug → File → Software. Next/Previous går i en sløyfe (Software → Algorithm og omvendt); lenkene før første og etter siste begrep poengsettes ikke.
- Kilden på File-siden er `https://en.wikipedia.org/wiki/File-system_permissions ` (med mellomrom på slutten). Nettleseren fjerner mellomrommet, men artikkelen handler om filrettigheter og ikke om begrepet «file» generelt. Kildepoenget krever bare en fungerende lenke, så dette er en faglig merknad for samtalen.
- Overskriftene står med små bokstaver i HTML-en («algorithm», «ip address») og har ingen `text-transform` i CSS-en, så de vises også med små bokstaver.
- Hjem-lenken har `position: fixed` øverst til venstre i vinduet, utenfor den sentrerte boksen.
- `h1` og `p` har ulike fonter (system-ui og Times New Roman). Fontene er ikke hentet fra Google Fonts, men rubrikken poengsetter ikke fontvalg.
- CSS-filen har kommentarer.
- Mappen inneholder en `.DS_Store`-fil fra macOS. Den påvirker ikke vurderingen.

## Kontrast (foreløpig, beregnet fra CSS)

| Tekst | Bakgrunn | Forhold | Krav | Resultat |
| --- | --- | ---: | ---: | --- |
| `#111111` (h1, p, liste-tall) | `#67a39b` | 6,55:1 | 4,5:1 | Består |
| `#ffffff` (liste- og nav-knapper) | `#111111` | 18,88:1 | 4,5:1 | Består |
| `#ffffff` (knapper, hover) | `#333333` | 12,63:1 | 4,5:1 | Består |
| `#ffffff` (hjem-lenke) | `#031E2B` | 17,15:1 | 4,5:1 | Består |
| `#042A3D` (Wikipedia-lenke) | `#67a39b` | 5,19:1 | 4,5:1 | Består |
| `#333333` (Wikipedia-lenke, hover) | `#67a39b` | 4,39:1 | 4,5:1 | Består ikke |

Hjem-lenken antas å ligge på sidebakgrunnen `#031E2B` i 1280-px-vinduet; kontroller dette. Wikipedia-lenken er 16 px fet tekst og regnes som vanlig tekst (krav 4,5:1). Teller hover-tilstanden med: 10 × 5/6 = 8,3, avrundet til 8,5/10. Teller den ikke med (WAVE måler ikke hover): 10/10. Bestem hvordan hover-farger skal behandles, og bruk det samme for alle elever.

## Må avklares

- Bekreft at oppgaven tilhører Nikolaj.
- Test sidene, lokale ressurser og eksterne lenker med Live Server.
- Kontroller kontrast med WAVE, og bestem om hover-farger skal telles med.
- ZIP-navn og ZIP-innhold kan ikke vurderes uten ZIP-filen. Mappenavnet tyder på at navnekravet `[elevnavn]_ITDictionary.zip` ikke er oppfylt.
- Samtalen om elevens forklaring av kode/AI er lærerens vurdering og inngår ikke i poengene her.

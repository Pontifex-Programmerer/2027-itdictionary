# Leander – IT Dictionary

**Status:** Foreløpig filvurdering, ikke endelig karakter. ZIP-ene finnes ikke i arbeidsmappen. AI-/kodeforståelse avklares i samtalen.

Prosjekt: [itDictionary_Leander (3)/itDictionary_Leander/index.html](itDictionary_Leander%20(3)/itDictionary_Leander/index.html)

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

# Lucas – IT Dictionary

**Status:** Foreløpig filvurdering, ikke endelig karakter. ZIP-ene finnes ikke i arbeidsmappen. AI-/kodeforståelse avklares i samtalen.

Prosjekt: [lucas/It Dictionary/index.html](lucas/It%20Dictionary/index.html)

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

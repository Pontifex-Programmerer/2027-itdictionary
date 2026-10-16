# Nathan – IT Dictionary

**Status:** Foreløpig filvurdering, ikke endelig karakter. ZIP-ene finnes ikke i arbeidsmappen. AI-/kodeforståelse avklares i samtalen.

Prosjekt: [itDictionary_Nathan 4/itDictionary_Nathan/index.html](itDictionary_Nathan%204/itDictionary_Nathan/index.html)

## Poeng

| Område | Dokumentert poeng | Merknad |
| --- | ---: | --- |
| Sider og innhold | 20/30 dokumentert | Fem begrepssider, liste, overskrifter og engelske forklaringer finnes. HTML og CSS er beginner; Database, Cybersecurity og LAN er tre advanced. Valget er 2 + 3, ikke 3 + 2 (0/5). Fem eksterne kildelenker er ikke nettverkstestet (5 poeng uavklart). |
| Navigasjon | 17/18 statisk kontrollert | Fire av fem forside-lenker peker til eksisterende sider (4/5); Database-lenken peker til `dictionarydatabase.html`, som mangler. Hjemlenker (5/5) og Next/Previous mellom de fire naboparene (8/8) har mål i prosjektet. Klikktest i Live Server gjenstår. |
| Plassering mot wireframe | Ikke vurdert /30 | Sonesystemet ble ikke oppgitt til elevene på forhånd; ikke trekk poeng for de nye numeriske grensene. |
| Mappestruktur og ZIP | 5/12 dokumentert; 2 ikke oppfylt; 5 uavklart | `index.html`, HTML-sider og CSS-mappe er på plass (5 poeng). Bildet `css/OIP.webp` ligger i CSS-mappen, ikke bildemappen (0/1). Flere stier begynner med `/` eller `\` og er ikke relative (0/1). Live Server-sideåpning (1), lokale ressurser (2), ZIP (1) og ekstra lenker (1) er uavklart. |
| Kontrast | Ikke målt /10 | CSS inneholder blant annet sterke farger, men ingen WAVE-/kontrastmåling er utført; ikke trekk eller gi poeng uten måling. |

**Dokumentert delsum: 42 poeng.** Ikke oppfylt: 8 poeng. Uavklart: 50 poeng. Dette er ikke en karakter.

## Konkrete funn

- `dictionarydatabase.html` i forsidelenken finnes ikke; riktig fil ligger i `dictionary/database.html`.
- LAN-siden har «Previous», men ingen «Next». Dette påvirker ikke de fire naboparene, som er poengsatt i rubrikken.
- Kildelenkene er i HTML, men de eksterne sidene er ikke åpnet.
- Bildet `OIP.webp` ligger i `css/`; de øvrige brukte bildene ligger i `img/`.
- Flere detaljsider bruker rot-relative stier som `/css/main.css`, `/img/...` og `/dictionary/...`.

## Må avklares

- Test alle sider og lokale ressurser gjennom Live Server; særlig rot-relative stier og stier med omvendt skråstrek.
- Kjør WAVE og mål kontrastkombinasjonene.
- ZIP-navn og ZIP-innhold kan ikke vurderes uten ZIP-filen.
- Samtalen om elevens forklaring av kode/AI er lærerens vurdering og inngår ikke i poengene her.

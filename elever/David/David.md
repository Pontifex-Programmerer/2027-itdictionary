# David – IT Dictionary

**Status:** Foreløpig filvurdering, ikke endelig karakter. ZIP-ene finnes ikke i arbeidsmappen. AI-/kodeforståelse avklares i samtalen.

Prosjekt: [It-Dictionary-David 2/It-Dictionary-David/index.html](It-Dictionary-David%202/It-Dictionary-David/index.html)

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

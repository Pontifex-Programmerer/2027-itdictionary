# Eirik – IT Dictionary

**Status:** Foreløpig filvurdering, ikke endelig karakter. ZIP-ene finnes ikke i arbeidsmappen. AI-/kodeforståelse avklares i samtalen.

Prosjekt: [IT-dictionary Eirik/Index.html](IT-dictionary%20Eirik/Index.html)

## Poeng

| Område | Dokumentert poeng | Merknad |
| --- | ---: | --- |
| Sider og innhold | 20/30 dokumentert | Fem begrepssider, liste på forsiden, overskrifter og engelske forklaringer finnes. Begrepene oppfyller ikke nøyaktig 3 beginner + 2 advanced (0/5). Fem eksterne kildelenker (Cambridge Dictionary) er ikke nettverkstestet (5 poeng uavklart). |
| Navigasjon | 18/18 statisk kontrollert | Fem forside-lenker, fem hjemlenker og Next/Previous mellom de fire naboparene peker til eksisterende sider. Alle lenkene er rot-relative (`/Html/...`, `/Index.html`) og fungerer bare når Live Server startes fra prosjektmappen. Klikktest i Live Server gjenstår. |
| Plassering mot wireframe | Ikke vurdert /30 | Sonesystemet ble ikke oppgitt til elevene på forhånd; ikke trekk poeng for de nye numeriske grensene. |
| Mappestruktur og ZIP | 7/12 dokumentert; 1 ikke oppfylt; 4 uavklart | `Index.html` i roten (2), HTML-sider i `Html/` (2), CSS i `CSS/` (1) og bilde i `img/` (1). Ingen ekstra lenker utover navigasjon og kilder (1). Alle lokale stier begynner med `/` og er ikke relative (0/1). Live Server-sideåpning (1), lokale ressurser (2) og ZIP (1) er uavklart. |
| Kontrast | Ikke målt /10 | Foreløpig beregnet fra CSS: alle fire kombinasjoner består (se under). Bekreftes med WAVE. |

**Dokumentert delsum: 45 poeng.** Ikke oppfylt: 6 poeng. Uavklart: 49 poeng. Dette er ikke en karakter.

## Konkrete funn

- Begrepene er Hyperlink, Program, Hardware, Source code og Password. Bare Hardware og Password står i oppgavelisten (beginner). «Hyperlink» og «Program» står ikke på listen (listen har «Link» og «Programming»), «Source code» finnes ikke, og ingen advanced-begreper er valgt.
- Alle lokale stier er rot-relative: `/CSS/Main.CSS`, `/CSS/Words.CSS`, `/img/Programering.jpg`, `/Html/...` og `/Index.html`. Åpnes `Index.html` direkte i nettleseren (uten Live Server), eller startes Live Server fra en overmappe, brytes stilark, bilde og alle lenker.
- Forsidelenken til Hyperlink bruker `/html/Hyperlink_word.html` (liten `h`), mens mappen heter `Html/`. Det fungerer på Windows, men ikke på en server som skiller mellom store og små bokstaver.
- Forsiden heter `Index.html` med stor `I`, og hjemlenkene peker til `/Index.html`. Det fungerer på Windows; oppgaven ber om `index.html`.
- Overskriftene er «IT-dictonary: Hardware» osv. Begrepet står i `<h1>`, så overskriftspoenget gis. «dictonary» er feilstavet på alle sider.
- Forklaringene har manuelle `<br>`-linjeskift og noen skrivefeil («would'nt», «alows», «diffrent», «whitout»). Det påvirker ikke poengene i rubrikken.
- `width: 35sch;` i `Main.CSS` er en ugyldig enhet og ignoreres av nettleseren.
- Begge stilark bruker `font-family: sans-serif` for `h1`, og `p` har ingen egen font. Oppgaven ber om ulik font på `h1` og `p`, men rubrikken poengsetter ikke fontvalg.

## Kontrast (foreløpig, beregnet fra CSS)

| Tekst | Bakgrunn | Forhold | Krav | Resultat |
| --- | --- | ---: | ---: | --- |
| `#000000` (h1, p) | `#F5D189` | 14,36:1 | 4,5:1 | Består |
| `#ffffff` (knapper) | `#7d7237` | 4,85:1 | 4,5:1 | Består |
| `#ffffff` (knapper, hover) | `#615723` | 7,25:1 | 4,5:1 | Består |
| `#61572f` (kildelenke) | `#F5D189` | 4,93:1 | 4,5:1 | Består |

Hvis WAVE bekrefter dette: 10/10.

## Må avklares

- Test alle sider, stilark og bilde gjennom Live Server startet fra prosjektmappen `IT-dictionary Eirik/`.
- Kontroller kontrast med WAVE.
- ZIP-navn og ZIP-innhold kan ikke vurderes uten ZIP-filen.
- Samtalen om elevens forklaring av kode/AI er lærerens vurdering og inngår ikke i poengene her.

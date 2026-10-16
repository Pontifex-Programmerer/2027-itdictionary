# Torstein – IT Dictionary

**Status:** Foreløpig filvurdering, ikke endelig karakter. ZIP-ene finnes ikke i arbeidsmappen. AI-/kodeforståelse avklares i samtalen.

Prosjekt: [Torstein-engprog-prøve/engprog-prøve/index.html](Torstein-engprog-pr%C3%B8ve/engprog-pr%C3%B8ve/index.html)

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

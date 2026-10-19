# Fabian – IT Dictionary

**Status:** Foreløpig filvurdering, ikke endelig karakter. ZIP-ene finnes ikke i arbeidsmappen. AI-/kodeforståelse avklares i samtalen.

Prosjekt: [fabian/Dictionary/Index/index.html](fabian/Dictionary/Index/index.html)

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

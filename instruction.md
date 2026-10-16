# IT Dictionary: vurderingsrubrikk

Rubrikken bygger på oppgaven i `ITdictionary.pdf`. Den vurderer innleveringen med sjekkpunkter som kan krysses av og dokumenteres. Ikke gi eller trekk poeng for generelle inntrykk som «pent», «godt gjennomført», «svært god forståelse» eller «kreativt».

## Testoppsett

Bruk samme testoppsett for alle:

1. Pakk ut ZIP-filen.
2. Åpne prosjektmappen i VS Code og start `index.html` med Live Server.
3. Sett nettleservinduets innholdsområde til 1280 x 720 CSS-piksler og zoom til 100 %.
4. Vurder wireframe-plassering med siden øverst, uten å rulle. Test lenker og lokale ressurser ved å klikke eller laste sidene gjennom Live Server.
5. Bruk WAVE og kontroller tekst/bakgrunn-kontrastforholdene som beskrevet under.

Før poengsummen føres, skal hvert punkt ha et kontrollresultat: oppfylt eller ikke oppfylt. Delpoeng gis bare der rubrikken uttrykkelig sier at antall kan telles eller beregnes.

## Poengrubrikk: 100 poeng

### 1. Sider og innhold: 30 poeng

- **Valg av begreper: 5 poeng.** Hvis eleven har valgt nøyaktig tre «beginner friendly» og to «advanced» begreper fra oppgavens lister, gis ett poeng for hvert av de fem begrepene. Hvis fordelingen ikke er nøyaktig 3 + 2, gis 0 poeng for dette punktet.
- **Egen side per begrep: 5 poeng.** Ett poeng for hvert av de fem begrepene som har sin egen HTML-side.
- **Begrepsliste på forsiden: 5 poeng.** Ett poeng for hvert valgt begrep som står i listen på forsiden.
- **Overskrift på begrepssidene: 5 poeng.** Ett poeng per side hvis sidens begrep står som overskrift.
- **Forklaring og kilde: 10 poeng.** For hver begrepsside gis ett poeng hvis siden har en forklaring på engelsk, og ett poeng hvis siden oppgir en kilde til forklaringen med en fungerende lenke. Maksimalt to poeng per side. En tom eller ugyldig kildelenke gir ikke kildepoeng.

### 2. Navigasjon: 18 poeng

- **Forside til begrepsside: 5 poeng.** Ett poeng for hver lenke på forsiden som åpner riktig begrepsside.
- **Begrepsside til forside: 5 poeng.** Ett poeng for hver fungerende «link to home»/hjem-lenke på begrepssidene.
- **Forrige/neste mellom begreper: 8 poeng.** Begrepene settes i den rekkefølgen eleven har valgt. For hvert av de fire naboparene gis ett poeng for fungerende «Next» fra det første begrepet til det neste, og ett poeng for fungerende «Previous» tilbake. Lenker før første og etter siste begrep poengsettes ikke, siden oppgaven ikke angir hvor disse skal føre.

Andre lenker enn navigasjons- og kildelenkene over vurderes under mappestruktur og ZIP. Hver lenke skal testes gjennom Live Server.

### 3. Plassering i wireframe: 30 poeng

Oppgaven viser wireframes, men angir ikke numeriske soner. Sonene nedenfor er en konkretisering for denne rubrikken, ikke et tallfestet krav i originaloppgaven. Avtal dem før vurdering; ikke bruk grensene til å trekke poeng retroaktivt hvis de ikke var kjent for elevene.

Vurder plassering i testoppsettet over. Bruk nettleserens innholdsområde som koordinatsystem: venstre halvdel er x = 0–639, høyre halvdel x = 640–1279. Øvre område er y = 0–143, nedre område y = 576–719. Midtkolonnen er x = 320–959. Bruk midtpunktet av det synlige innholdet (ikke hele HTML-containeren) for å avgjøre hvilken sone et element ligger i. For forklaringen brukes midtpunktet av første tekstlinje. Første tekstlinje må starte nedenfor overskriftens nederste kant. Størrelse, farge, fontfamilie og dekorative detaljer poengsettes ikke her.

**Forside: 5 poeng**

- Sidetittelen ligger i øvre område: 1 poeng.
- Begrepslisten ligger i venstre halvdel: 2 poeng.
- Det teknologirelaterte bildet ligger i høyre halvdel: 2 poeng.

**Begrepssider: 25 poeng**

Gi ett poeng per punkt på hver av de fem sidene:

- Hjem-lenken ligger i øvre venstre sone (x = 0–319, y = 0–143).
- Begrepets overskrift ligger i midtkolonnen og over sidens midtlinje (x = 320–959, y = 144–359).
- Forklaringens første tekstlinjes midtpunkt ligger i midtkolonnen (x = 320–959, y = 144–575), og første linje starter nedenfor overskriftens nederste kant.
- «Previous»-lenken ligger i nedre venstre sone (x = 0–319, y = 576–719).
- «Next»-lenken ligger i nedre høyre sone (x = 960–1279, y = 576–719).

Hvis et element ikke vises i testoppsettet, ikke gi poeng for plasseringen. At en side må rulles for å nå et element, endrer ikke testoppsettet; vurder elementets plassering når det vises i nettleserens innholdsområde.

### 4. Mappestruktur og ZIP: 12 poeng

- `index.html` ligger i prosjektmappens rot: 2 poeng.
- De øvrige HTML-sidene ligger i en egen mappe: 2 poeng.
- CSS-filer ligger i en egen mappe: 1 poeng.
- Bildefiler ligger i en egen mappe: 1 poeng.
- Alle fem HTML-sidene åpner gjennom Live Server: 1 poeng hvis alle åpner, ellers 0.
- Alle lokale ressurser åpner uten feil gjennom Live Server: 2 poeng hvis alle åpner, ellers 0.
- Alle lokale filreferanser bruker relative stier: 1 poeng hvis alle gjør det, ellers 0.
- ZIP-filen heter `[elevnavn]_ITDictionary.zip` og inneholder hele prosjektmappen: 1 poeng hvis begge kravene er oppfylt, ellers 0. Registrer separat om feilen gjelder navn, innhold eller begge deler.
- Alle lenker som ikke allerede er poengsatt under navigasjon eller kildehenvisning, fører til siden eller ressursen de viser til: 1 poeng hvis alle fungerer, ellers 0. Dette inkluderer ekstra navigasjonslenker.

### 5. Kontrast: 10 poeng

- **Kontrast: 10 poeng.** Finn alle ulike kombinasjoner av tekstfarge og bakgrunnsfarge som brukes. For vanlig tekst må kontrastforholdet være minst 4,5:1. For stor tekst er minimum 3:1; stor tekst betyr minst 24 CSS-piksler, eller minst 18,66 CSS-piksler i fet skrift. Beregn poeng slik: `10 × antall kombinasjoner som består / totalt antall kombinasjoner`. Rund til nærmeste halve poeng. WAVE kan brukes til å finne kombinasjonene og kontrollere resultatet.

Fontfamilie og skriftstørrelse gir ikke egne poeng. Oppgaven sier at skriften skal være lett å lese, men angir ingen fontfamilier eller minimumsstørrelse som gjør dette vurderbart uten å innføre nye krav. WAVE måler kontrast, ikke hvor lett en font er å lese. Dersom fontvalg skal påvirke karakteren i senere oppgaver, må et konkret kriterium fastsettes før elevene starter.

## Kode og AI

AI-assistanse i VS Code er ikke tillatt. Elevene kan bruke AI utenfor VS Code til å spørre om problemløsing eller hvordan HTML og CSS fungerer.

Samtalen med eleven er ikke et eget poengområde. Den brukes bare til å avgjøre om koden som brukes som vurderingsbevis, kan knyttes til elevens kompetanse. Be eleven finne og forklare den aktuelle HTML-en eller CSS-regelen og vise hvilken synlig del av siden den påvirker. Hvis eleven ikke kan forklare kode som et vurderingspunkt bygger på, skal det punktet ikke få poeng. Ikke trekk andre poeng på grunnlag av samtalen.

## Foreslåtte karaktergrenser

Disse grensene er et konkret forslag og må vedtas før vurderingen begynner. Bruk samme grenser for alle:

| Karakter | Poeng |
| --- | ---: |
| 6 | 100 |
| 5 | 85–99 |
| 4 | 70–84 |
| 3 | 50–69 |
| 2 | 25–49 |
| 1 | 0–24 |

Med dette forslaget er skillet mellom 3 og 4 70 poeng. Poengene vektes etter kravene i tabellen; de ulike sjekkpunktene teller derfor ikke automatisk likt.

Responsivt design og gjenbruk av kode er ikke krav og gir eller trekker ikke poeng.
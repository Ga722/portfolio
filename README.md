# Portfolio — Gazmend Aliaj

Statische website. Geen build-stap, geen dependencies: gewoon HTML, CSS en JavaScript.
Je kunt de map rechtstreeks op GitHub Pages, Netlify, Vercel of je eigen hosting zetten.

## Structuur

```
index.html            One-pager: Home, Over mij, Portfolio, Contact
projecten.html        Alle projecten, filterbaar op discipline
project.html          Projectdetail (leest ?id= uit de URL)
css/style.css         Alle styling en tokens in één bestand
js/portfolio-data.js  ← HIER pas je je projecten aan
js/ui.js              Menu, actieve navigatie, projectindex
js/home.js            Uitgelicht-rij, index, contactformulier
js/projecten.js       Filterbalk
js/project.js         Vult de projectpagina
assets/               Logo, foto's en icoontjes
```

## Op GitHub Pages zetten

1. Maak een nieuwe repository aan, bijvoorbeeld `portfolio`.
2. Upload de inhoud van deze map naar de root van de repository (dus `index.html` bovenaan, niet in een submap).
3. Ga naar **Settings → Pages**.
4. Zet **Source** op `Deploy from a branch`, kies branch `main` en map `/ (root)`.
5. Na een minuut staat de site op `https://<jouwnaam>.github.io/portfolio/`.

Wil je je eigen domein: vul dat in onder **Settings → Pages → Custom domain**.

## Je projecten aanpassen

Alles staat in `js/portfolio-data.js`. Per project:

```js
{
  id: 'bric-app',                // komt in de URL: project.html?id=bric-app
  highlight: 1,                  // 1 t/m 5 = in de Uitgelicht-rij, in die volgorde. 0 = niet
  title: 'BRIC — interactieve quiz-app',
  blurb: 'Korte regel onder de titel.',
  description: 'Langere tekst op de projectpagina.',
  role: 'UX, UI, branding',
  client: 'Klantnaam',
  year: '2016',
  image: 'assets/werk/bric/bric-brand.png',   // hoofdbeeld, liggend; leeg = grijs vlak
  fit: 'contain',                             // beeld volledig tonen op wit, nooit snijden
  ratio: '1912 / 916',                        // breedte / hoogte van je bestand
  heroRatio: '1200 / 587',                    // aparte vorm voor het hoofdbeeld
  gallery: [                                  // string of { src, caption, ratio, tall }
    { src: 'assets/werk/bric/mobile-intro.png', caption: 'Intro' }
  ],
  process: [                                  // moodboards, styletiles, personas
    { title: 'Moodboards', blurb: '…', images: ['assets/werk/bric/moodboard-1.jpg'] }
  ],
  files: [{ label: 'A2-poster (PDF)', src: 'assets/werk/bric/BRIC-poster-a2.pdf' }],
  link: 'https://…',             // wordt een "Bekijk online" knop
  video: '',
  example: true                  // verzonnen voorbeeld, mag weg
}
```

**Lege velden worden weggelaten.** Staat `client` of `year` leeg, dan verschijnt die regel
niet op de projectpagina — je kunt dus een project toevoegen voordat je alles weet.

**Schermafbeeldingen van websites:** zet `fit: 'contain'` en geef bij `ratio` de echte
breedte / hoogte van je bestand mee (bv. `'1912 / 916'`). Zonder die twee wordt het beeld
gevuld en dus aan de zijkanten afgesneden — precies waar meestal je logo staat.

**Heeft je hoofdbeeld een andere vorm dan de galerij?** Gebruik `heroRatio` en `heroFit`.
Bij BRIC is de hero liggend terwijl de galerij telefoonschermen zijn.

**Beelden toevoegen:** zet ze in `assets/werk/<project>/` en verwijs ernaar met dat pad.
Laat je `image` leeg, dan valt de site terug op het grijze vlak.

**Categorieën** staan onderaan het bestand in `window.portfolioCategories`, in de volgorde
waarin ze in de filterbalk verschijnen. Een categorie zonder projecten wordt niet getoond.

**Een project op de homepage zetten:** geef het een `highlight`-nummer van 1 tot 5.

## Nog aan te vullen

Deze velden kon ik niet uit de aangeleverde bestanden halen en staan leeg in
`js/portfolio-data.js`:

| Project | Ontbreekt |
| --- | --- |
| FTRPRF beursmateriaal | `year`, en beeldmateriaal (nu alleen PDF's) |
| Drankenacademy | `year` |
| Lentetips | `year`, beeld |

De twaalf verzonnen voorbeelden staan onderaan het bestand, elk met `example: true`.
Verwijder dat blok zodra je eigen werk volledig is.

## Contactformulier

Het formulier valideert nu alleen in de browser en verstuurt niets. Om het echt te laten werken:

- **Formspree** — maak een form aan en zet op het `<form>` in `index.html`:
  `action="https://formspree.io/f/JOUWCODE" method="POST"`, en haal de `e.preventDefault()`-regel
  uit `js/home.js` weg.
- **Netlify Forms** — hosting op Netlify, en voeg `netlify` toe als attribuut op het `<form>`.

## Video's

Er zit nog geen videospeler in. De veiligste aanpak voor laadtijd: zet je video's op YouTube of Vimeo,
vul de `video`-link in bij het project, en embed die op de projectpagina. Zo laadt er niets zwaars mee
tot iemand op play klikt.

## Wat nog ontbreekt

- Beeldmateriaal voor de online magazines en het FTRPRF-beursmateriaal.
- De desktopschermen van BRIC en de A2-poster zijn PDF's; die staan nu als download op de
  projectpagina. PNG-exports zouden er als beeld in kunnen.
- Een werkend e-mailadres — nu staat er het voorbeeld `gazmend.aliaj@companyname.com` in
  `index.html`, `projecten.html` en `project.html`. Zoek en vervang dat in de drie bestanden.
- De links naar LinkedIn en Instagram in de footer staan op `#`.

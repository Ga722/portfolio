# Portfolio 

Statische site: HTML, CSS en JavaScript. Geen build-stap, geen dependencies.

```
index.html            One-pager: Home, Over mij, Portfolio, Contact
projecten.html        Alle projecten, filterbaar
project.html          Projectdetail (?id=…)
css/style.css         Alle styling
js/portfolio-data.js  ← hier pas je je projecten aan
js/ui.js              Menu, navigatie, projectlijst
js/home.js            Uitgelicht, lijst, contactformulier
js/projecten.js       Filterbalk
js/project.js         Projectpagina
assets/               Logo, foto's, iconen, projectbeelden
```


## Een project toevoegen

In `js/portfolio-data.js`:

```js
{
  id: 'bric-app',                // URL: project.html?id=bric-app
  highlight: 1,                  // een nummer = in de Uitgelicht-rij, op die plaats.
                                 // 0 = niet uitgelicht. Houd de nummers uniek.
  title: 'BRIC — interactieve quiz-app',
  blurb: 'Korte regel onder de titel.',
  description: 'Tekst bovenaan de projectpagina.',
  role: 'UX, UI, branding',
  client: 'Klantnaam',
  year: '2015',
  image: 'assets/werk/bric/bric-brand.png',   // liggend; leeg = grijs vlak
  fit: 'contain',                             // hele beeld tonen i.p.v. vullen
  gallery: [{ src: '…', caption: '…', ratio: '9 / 16', tall: true }],
  processTitle: 'De vier vakgebieden',        // kop boven de blokken
  process: [{ title: '…', blurb: '…', images: ['…'] }],
  files: [{ label: 'Poster (PDF)', src: '…' }],
  link: 'https://…',             // wordt "Bekijk online"
  embed: 'https://…',            // doorbladerbare publicatie in plaats van een hoofdbeeld
  example: true                  // verzonnen voorbeeld, mag weg
}
```
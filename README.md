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
  id: 'huisstijl-urbanroots',   // komt in de URL: project.html?id=huisstijl-urbanroots
  highlight: 1,                 // 1 t/m 5 = in de Uitgelicht-rij, in die volgorde. 0 = niet
  title: 'Huisstijl UrbanRoots',
  blurb: 'Volledige huisstijl voor een lokaal duurzaamheidsmerk.',
  description: 'Langere tekst op de projectpagina.',
  role: 'Grafisch ontwerp, branding',
  client: 'UrbanRoots',
  year: '2024',
  image: 'assets/werk/urbanroots.jpg',        // hoofdbeeld; leeg = grijs vlak
  gallery: ['assets/werk/urbanroots-2.jpg'],  // extra beelden onderaan
  video: ''                                   // optionele YouTube/Vimeo-link
}
```

**Beelden toevoegen:** zet ze in `assets/werk/` en verwijs ernaar met `assets/werk/bestandsnaam.jpg`.
Laat je `image` leeg, dan valt de site terug op het grijze vlak — dus je kunt projecten al toevoegen
voordat je de beelden klaar hebt.

**Nieuwe categorie:** voeg een blok toe aan `window.portfolioData`. De filterbalk op
`projecten.html` en de labels in de index volgen automatisch.

**Een project op de homepage zetten:** geef het een `highlight`-nummer van 1 tot 5. Meer dan vijf kan,
maar vijf past het best in de rij.

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

- Echte projectbeelden en video's (alle `image`-velden staan leeg).
- Een werkend e-mailadres — nu staat er het voorbeeld `gazmend.aliaj@companyname.com` in
  `index.html`, `projecten.html`, `project.html` en `js/portfolio-data.js` is daar niet bij betrokken.
  Zoek en vervang dat adres in de drie HTML-bestanden.
- De links naar LinkedIn en Instagram in de footer staan op `#`.

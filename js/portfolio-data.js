// ==========================================================================
// Shared portfolio content.
// Edit titles, blurbs and descriptions here — both index.html (the scrolling
// rows) and project.html (the case-study page) read from this same file.
// Replace `image` with a real path once you have project photography
// (e.g. "assets/projects/urbanroots-1.jpg"); leave null to keep the
// placeholder block.
// ==========================================================================
const portfolioData = [
  {
    category: 'Ontwerp',
    items: [
      {
        id: 'huisstijl-urbanroots',
        title: 'Huisstijl UrbanRoots',
        blurb: 'Volledige huisstijl voor een lokaal duurzaamheidsmerk.',
        description: 'UrbanRoots vroeg om een huisstijl die hun missie — duurzaam en lokaal ondernemen — visueel vertaalt. Ik ontwikkelde een logo, kleurenpalet en typografiesysteem dat consistent terugkomt op verpakking, website en drukwerk.',
        role: 'Grafisch ontwerp, branding',
        client: 'UrbanRoots',
        year: '2024',
        image: null,
      },
      {
        id: 'verpakking-aroma',
        title: 'Productverpakking Aroma',
        blurb: 'Verpakkingsontwerp voor een reeks artisanale koffiebonen.',
        description: 'Voor het koffiemerk Aroma ontwierp ik een verpakkingslijn die opvalt in het schap zonder de premium uitstraling van het product te verliezen. Elke smaak kreeg een eigen kleuraccent binnen dezelfde visuele taal.',
        role: 'Grafisch ontwerp, packaging',
        client: 'Aroma Coffee',
        year: '2023',
        image: null,
      },
      {
        id: 'logo-nordic-coffee',
        title: 'Logo Nordic Coffee',
        blurb: "Minimalistisch logo-ontwerp voor een Scandinavisch koffiemerk.",
        description: 'Nordic Coffee wilde een strak, tijdloos logo met een knipoog naar hun Scandinavische roots. Het resultaat is een merkteken dat even goed werkt op een koffiebeker als op gevelreclame.',
        role: 'Logo-ontwerp',
        client: 'Nordic Coffee',
        year: '2023',
        image: null,
      },
    ],
  },
  {
    category: 'Video',
    items: [
      {
        id: 'bedrijfsfilm-zenfit',
        title: 'Bedrijfsfilm ZenFit',
        blurb: 'Sfeervolle bedrijfsfilm voor een boetiek-fitnessstudio.',
        description: 'Ik filmde en monteerde een bedrijfsfilm die de sfeer van ZenFit vastlegt: van de eerste ochtendtraining tot de gemeenschap die de studio drijft. Gebruikt op de website en social media.',
        role: 'Video-editing, camerawerk',
        client: 'ZenFit',
        year: '2024',
        image: null,
      },
      {
        id: 'aftermovie-foodtruck',
        title: 'Aftermovie Foodtruck Festival',
        blurb: 'Dynamische aftermovie van een tweedaags streetfoodfestival.',
        description: 'Een strak gemonteerde aftermovie met interviews, sfeerbeelden en muziek op maat, geleverd binnen 48 uur na het festival zodat de organisatie meteen kon napromoten.',
        role: 'Camerawerk, montage',
        client: 'Streetfood Fest',
        year: '2023',
        image: null,
      },
      {
        id: 'teaser-soundwave',
        title: 'Product teaser SoundWave',
        blurb: 'Korte productteaser voor de lancering van een draadloze speaker.',
        description: 'Een compacte, ritmische teaser die de lancering van de SoundWave-speaker aankondigde op social media, met focus op vorm en geluidsbeleving.',
        role: 'Video-editing, motion',
        client: 'SoundWave Audio',
        year: '2022',
        image: null,
      },
    ],
  },
  {
    category: 'Animatie',
    items: [
      {
        id: 'explainer-fintrack',
        title: '2D-explainer FinTrack',
        blurb: 'Uitlegvideo die een budgetteringsapp in 60 seconden verduidelijkt.',
        description: 'FinTrack had een heldere, laagdrempelige manier nodig om hun app uit te leggen aan nieuwe gebruikers. Ik schreef het script mee en animeerde de volledige 2D-explainer.',
        role: '2D-animatie, scripting',
        client: 'FinTrack',
        year: '2024',
        image: null,
      },
      {
        id: 'logo-animatie-lumen',
        title: '3D-logo-animatie Lumen',
        blurb: 'Korte 3D-intro-animatie van het Lumen-merkteken.',
        description: 'Een korte, herbruikbare 3D-animatie van het Lumen-logo voor gebruik als intro in video-content en op events.',
        role: '3D-animatie',
        client: 'Lumen',
        year: '2023',
        image: null,
      },
      {
        id: 'motion-social-kit',
        title: 'Motion graphics Social Kit',
        blurb: 'Set herbruikbare motion templates voor social media-content.',
        description: 'Een set modulaire motion-graphics templates waarmee het marketingteam zelf snel nieuwe social-content kan samenstellen, zonder telkens een animator nodig te hebben.',
        role: 'Motion design',
        client: 'Intern project',
        year: '2022',
        image: null,
      },
    ],
  },
  {
    category: 'Website',
    items: [
      {
        id: 'ecommerce-studio-noir',
        title: 'E-commerce Studio Noir',
        blurb: 'Webshop voor een minimalistisch interieurmerk.',
        description: 'Voor Studio Noir bouwde ik een webshop die de rustige, minimalistische productfotografie centraal zet, met een checkoutflow die zo min mogelijk drempels opwerpt.',
        role: 'Webdesign, ontwikkeling',
        client: 'Studio Noir',
        year: '2024',
        image: null,
      },
      {
        id: 'portfolio-fotograaf-elke',
        title: 'Portfolio-site Fotograaf Elke',
        blurb: 'Beeldgerichte portfoliosite voor een portretfotografe.',
        description: 'Een rustige, beeldgerichte site waarin de fotografie van Elke zelf de hoofdrol speelt — minimale UI, maximale aandacht voor het werk.',
        role: 'Webdesign, ontwikkeling',
        client: 'Elke Fotografie',
        year: '2023',
        image: null,
      },
      {
        id: 'landing-launchpad',
        title: 'Landingspagina LaunchPad',
        blurb: 'Conversiegerichte landingspagina voor een productlancering.',
        description: 'Een strakke, snelle landingspagina gebouwd rond één duidelijke actie: inschrijven voor de vroege toegang van LaunchPad.',
        role: 'Webdesign, copywriting',
        client: 'LaunchPad',
        year: '2022',
        image: null,
      },
    ],
  },
];

// ==========================================================================
// Alle portfolio-content staat hier. Pas titels, beschrijvingen, klant, rol,
// jaar en beelden hier aan — alle pagina's lezen uit dit bestand.
//
// Velden per project
//   id          komt in de URL: project.html?id=<id>
//   highlight   1..5 = in de "Uitgelicht" rij op de homepage, in die volgorde.
//               0 = niet uitgelicht.
//   image       hoofdbeeld, liggend. Leeg = grijs vlak.
//   fit         'contain' = beeld volledig tonen op wit, nooit snijden. Gebruik dit
//               voor schermafbeeldingen van websites. Weglaten = vullend (cover).
//   ratio       verhouding van het hoofdbeeld en de galerijbeelden, bv. '1912 / 916'
//               (breedte / hoogte van je bestand) of '9 / 16' voor telefoonschermen.
//               Een galerijbeeld mag zijn eigen ratio meegeven.
//   heroRatio   aparte verhouding voor het hoofdbeeld, als dat een andere vorm heeft dan
//               de galerij — bv. een liggende hero boven een reeks telefoonschermen
//   heroFit     aparte fit voor het hoofdbeeld
//   gallery     extra beelden onderaan: ['pad.jpg', ...] of
//               [{ src: 'pad.jpg', caption: 'Onderschrift', ratio: '1920 / 6079' }, ...]
//               Een beeld dat veel hoger is dan breed (een volledige-paginacapture)
//               krijgt automatisch een eigen schuifkader; forceer met tall: true.
//   process     blokken met een eigen kop en uitleg: [{ title, blurb, images: [...] }]
//   processTitle kop boven die blokken. Standaard 'Het proces'.
//   files       downloads: [{ label, src }]
//   link        live URL, wordt een "Bekijk online" knop
//   video       optionele YouTube/Vimeo-link
//   example     true = verzonnen voorbeeld, mag weg zodra je eigen werk erin staat
//
// TODO Gazmend: de velden met '' hieronder kon ik niet uit je bestanden halen.
//               Vul klant, rol en jaar aan waar ze leeg staan.
// ==========================================================================

window.portfolioData = [

  // ------------------------------------------------------------------------
  {
    category: 'App-ontwerp',
    items: [
      {
        id: 'bric-app',
        highlight: 1,
        title: 'BRIC — interactieve quiz-app',
        blurb: 'App over de groeiende economieën van Brazilië, Rusland, India en China.',
        description: 'Vier landen met de snelst groeiende economie ter wereld, en de vraag wat die groei kost aan mens, natuur en dier. Zo\'n onderwerp verdraagt geen zware, belerende vormgeving: ik koos voor een heldere quiz met veel wit, één krachtig kleurenpaar en cijfers die groot genoeg staan om te blijven hangen. Rood tegen groen doet het werk — je ziet aan de kleur of je juist zat voor je de tekst leest. Van het eerste moodboard tot het uitgewerkte scherm op desktop en mobiel heb ik het volledige traject vormgegeven.',
        role: 'UX, UI, branding',
        client: 'Schoolopdracht, Arteveldehogeschool',
        year: '2015',
        image: 'assets/werk/bric/bric-brand.png',
        heroRatio: '1200 / 587',
        ratio: '9 / 16',
        gallery: [
          { src: 'assets/werk/bric/mobile-intro.png', caption: 'Intro — kies tussen de video en de quiz' },
          { src: 'assets/werk/bric/mobile-quiz-question.png', caption: 'Quizvraag met de vier landen' },
          { src: 'assets/werk/bric/mobile-quiz-answer.png', caption: 'Antwoord — juist en fout in kleur' },
          { src: 'assets/werk/bric/mobile-quiz-stats.png', caption: 'Cijfers per land na het antwoord' },
          { src: 'assets/werk/bric/mobile-quiz-end.png', caption: 'Eindscore, met deelknoppen' }
        ],
        process: [
          {
            title: 'Moodboards',
            blurb: 'Twee sferen tegenover elkaar zetten om de toon te bepalen: vlakke illustratie in warme aardetinten tegen documentaire fotografie met hard contrast. De aardetinten wonnen — ze houden het onderwerp ernstig zonder het zwaar te maken.',
            images: ['assets/werk/bric/moodboard-1.jpg', 'assets/werk/bric/moodboard-2.jpg']
          },
          {
            title: 'Styletiles',
            blurb: 'Drie richtingen op één blad: kleur, typografie, knopvorm en beeldtoon naast elkaar, zodat de keuze in één oogopslag te maken valt. De rood-groene richting kreeg de voorkeur omdat goed en fout daarin vanzelf leesbaar zijn.',
            images: ['assets/werk/bric/styletile-1.png', 'assets/werk/bric/styletile-2.png', 'assets/werk/bric/styletile-3.png']
          },
          {
            title: 'Logo-onderzoek',
            blurb: 'Zoeken naar een merkteken dat vier landen samenvat zonder een vlag of wereldkaart te lenen. Van cirkelvorm en geluidsgolven naar overlappende bollen: vier vormen die elkaar raken zeggen precies wat BRIC is.',
            images: ['assets/werk/bric/logo-onderzoek.jpg']
          },
          {
            title: 'Personas',
            blurb: 'Drie lezers om de vormgeving aan te toetsen — een leerkracht, een student en een geïnteresseerde leek. Zij bepaalden hoeveel tekst een scherm mag dragen en hoe groot een cijfer moet staan om nog te overtuigen.',
            images: ['assets/werk/bric/persona-1.jpg', 'assets/werk/bric/persona-2.jpg', 'assets/werk/bric/persona-3.jpg']
          }
        ],
        link: '',
        video: ''
      }
    ]
  },

  // ------------------------------------------------------------------------
  {
    category: 'Online magazines',
    items: [
      {
        id: 'zefier-jaarverslag-2025',
        highlight: 2,
        title: 'Jaarverslag Zefier 2025',
        blurb: 'Online jaarverslag voor de Vlaamse coöperatie voor hernieuwbare energie.',
        description: 'Een jaarverslag over wind, zon en warmte mag daar ook naar aanvoelen. Ik gaf het verslag daarom landschap als hoofdrol: brede luchtfoto\'s van windparken, een teruggebracht palet van olijfgroen, goud en wit, en cijfers die in die ruimte mogen staan in plaats van in een tabel te verdwijnen. Vijf hoofdstukken, elk met een eigen fotoband als openingsbeeld, zodat de lezer aan het beeld al voelt waar hij is. Ik verzorgde ontwerp, opmaak, interactieve opbouw, animatie en beeldbewerking.',
        role: 'Ontwerp, opmaak, interactieve opbouw, animatie, beeldbewerking, ontwikkeling',
        client: 'Zefier',
        year: '2025',
        image: 'assets/werk/zefier/cover.png',
        fit: 'contain',
        ratio: '1911 / 913',
        gallery: [],
        processTitle: 'Door het verslag',
        process: [
          {
            title: 'Cover en navigatie',
            blurb: 'Eén beeld dat de hele coöperatie samenvat: een windpark van bovenaf, met de titel in wit over de horizon. De hoofdstuktitels liggen als een rustige band boven het beeld — aanwezig genoeg om te oriënteren, licht genoeg om de foto niet te breken.',
            images: [{ src: 'assets/werk/zefier/cover.png', ratio: '1911 / 913', fit: 'contain' }]
          },
          {
            title: 'Algemene informatie',
            blurb: 'Statuten en rekeningsectoren zijn de droogste stof van het verslag. Ik geef ze lucht door schermvullende fotobanden als rustpunten tussen de tekst te leggen, de kolommen kort te houden en de Z uit het logo als groot watermerk onder de tekst te schuiven. De raad van bestuur staat op een olijfgroen vlak: portretten in cirkels, zodat het hoofdstuk eindigt met gezichten in plaats van artikelnummers.',
            images: [{ src: 'assets/werk/zefier/algemene-informatie.png', tall: true }]
          },
          {
            title: 'Financieel verslag',
            blurb: 'De deelnemingen liggen in een cirkel over een groengetinte luchtfoto, met het totaal in het hart. De vorm zegt wat de tekst uitlegt: allemaal even ver van het midden, samen één geheel. De stippellijn en de gouden schijven houden het diagram licht genoeg om het landschap eronder te laten meespelen.',
            images: [{ src: 'assets/werk/zefier/financieel-verslag.png', ratio: '1911 / 913', fit: 'contain' }]
          }
        ],
        link: 'https://jaarverslag.zefier.be/2025',
        video: ''
      },
      {
        id: 'agion-jaarverslag-2020',
        highlight: 3,
        title: 'Jaarverslag Agion 2020',
        blurb: 'Online jaarverslag voor het Agentschap voor Infrastructuur in het Onderwijs.',
        description: 'Agion subsidieert schoolgebouwen, dus zet ik de gebouwen zelf vooraan: elk hoofdstuk opent met architectuurfotografie van een gerealiseerde school, schermvullend en op ware grootte. Die beelden dragen de publicatie — de onderwerpen liggen als genummerde markers op de architectuur, zodat de lezer bij elk thema ook ziet waar het over gaat. Ik verzorgde ontwerp, opmaak, interactieve opbouw, animatie en beeldbewerking.',
        role: 'Ontwerp, opmaak, interactieve opbouw, animatie, beeldbewerking, ontwikkeling',
        client: 'Agion',
        year: '2020',
        image: 'assets/werk/agion/cover.png',
        fit: 'contain',
        ratio: '1912 / 916',
        gallery: [],
        processTitle: 'Door het verslag',
        process: [
          {
            title: 'Intro',
            blurb: 'Een agentschap dat schoolgebouwen subsidieert, opent met een schoolgebouw — niet met een grafiek. Basisschool De Brug in Bocholt vult het scherm, en de naam AGION staat groot in wit tegen de open lucht linksboven: het enige stukje beeld waar zware typografie niets wegneemt van de architectuur. Het legt de toon vast voor de rest — eerst zien wat er gebouwd is, dan lezen wat het kostte.',
            images: [{ src: 'assets/werk/agion/cover.png', ratio: '1912 / 916', fit: 'contain' }]
          },
          {
            title: 'Cijfers 2020',
            blurb: 'Het moeilijkste hoofdstuk om luchtig te houden. De gebouwfoto blijft staan en de cijfers komen er in vlakken bovenop, in plaats van een tabel op wit. Zo blijft de aanleiding — die school — in beeld terwijl je de bedragen leest, en verdwijnt het subsidiebedrag niet in een kolom.',
            images: [{ src: 'assets/werk/agion/cijfers.png', ratio: '1914 / 920', fit: 'contain' }]
          },
          {
            title: 'Communicatie en adviesverlening',
            blurb: 'Dezelfde aanpak als bij de cijfers, nu binnen in de school: de vier thema’s liggen als genummerde markers op de architectuur zelf. Waar Agion over ventilatie of aangepaste formulieren spreekt, sta je in een klaslokaal — het onderwerp en de plek waar het over gaat vallen samen. Door hoofdstuk na hoofdstuk hetzelfde procedé aan te houden leest de publicatie als één reeks in plaats van losse pagina’s.',
            images: [{ src: 'assets/werk/agion/communicatie.png', ratio: '1910 / 919', fit: 'contain' }]
          }
        ],
        link: 'https://jaarverslag.agion.be/2020/intro/',
        video: ''
      },
      {
        id: 'car-en-bus-magazine',
        highlight: 4,
        title: 'Car & Bus e-zine',
        blurb: 'Online vakblad voor de Belgische autocar- en autobussector.',
        description: 'Een vakblad voor de autocarsector mag eruitzien als een blad, ook op een scherm. Ik hield daarom de bladspiegel aan: een cover met één reportagefoto over de volle breedte, vier hoofdartikels in vier kleuren erop, reportages met een schermvullend openingsbeeld en daarna tekst in één kolom, en advertenties die hun eigen pagina krijgen zoals in print. De kleur van een artikel op de cover komt terug in de titelblok en tussenkoppen van dat artikel, zodat het blad zich vanzelf laat lezen. De fotografie blijft documentair — bussen, werkplaatsen, de mensen erachter — want daar komt deze lezer voor. Ik verzorgde ontwerp, opmaak, interactieve opbouw, animatie en beeldbewerking.',
        role: 'Ontwerp, opmaak, interactieve opbouw, animatie, beeldbewerking, ontwikkeling',
        client: 'FBAA',
        year: '2017',
        image: 'assets/werk/carbus/cover.png',
        fit: 'contain',
        ratio: '1917 / 916',
        gallery: [],
        processTitle: 'Door het blad',
        process: [
          {
            title: 'Cover',
            blurb: 'Een vakblad voor de autocarsector hoort te openen met een bus en de mensen die ermee rijden — geen studiobeeld. De reportagefoto vult het scherm; het logo in een wit kader en de maand eronder pakken de linkerbovenhoek. De vier hoofdartikels liggen als gekleurde balken over de voorkant van de minibus links in beeld: elke titel krijgt een eigen kleur, wat de cover meteen leesbaar maakt bij het doorbladeren en wat de kleurcodering van het blad aankondigt — het groen van de Bourdon-titel komt terug in de titelblok en de tussenkoppen van dat artikel.',
            images: [{ src: 'assets/werk/carbus/cover.png', ratio: '1917 / 916', fit: 'contain' }]
          },
          {
            title: 'Advertenties',
            blurb: 'Adverteerders in een vakblad kopen een pagina, niet een banner. Ik geef ze daarom hun eigen scherm, met het beeld over de volle breedte — net als in de gedrukte editie. De scheiding met de redactie maakt één witte strip bovenaan, met “Contenu publicitaire” erin: eerlijk en direct, zonder de advertentie visueel weg te drukken. Dat geeft het blad tegelijk ritme: na een reportage even iets anders.',
            images: [{ src: 'assets/werk/carbus/advertentie-iveco.png', ratio: '1915 / 913', fit: 'contain' }]
          },
          {
            title: 'Reportage',
            blurb: 'De reportages zijn het hart van het blad. Het openingsbeeld gaat over de volle breedte, met de titel en een uitgelicht citaat in gekleurde blokken eroverheen; daarna loopt de tekst in één smalle kolom door. Een lang interview breek ik met groene tussenkoppen en met een rij ronde portretjes van de drie generaties Bourdon — zo krijgt het verhaal gezichten en leest het als een reeks in plaats van een muur tekst. De bedrijfsfoto’s houd ik documentair — werkplaats, chauffeur, materieel — want dat is wat deze lezers erin zoeken.',
            images: [{ src: 'assets/werk/carbus/artikel-bourdon.png', tall: true }]
          }
        ],
        link: 'https://magazines.fbaa.be/carandbus-novembre-2021/couverture/',
        video: ''
      },
      {
        id: 'drankenacademy',
        highlight: 5,
        title: 'Drankenacademy',
        blurb: 'E-learnings en cursusboeken voor de wijn- en drankensector.',
        description: 'Vier vakgebieden onder één naam, die elk hun eigen publiek en eigen sfeer hebben. In plaats van één huisstijl over alles te leggen gaf ik elk vakgebied een eigen wereld — eigen kleur, eigen merkteken, eigen illustratiestijl — en hield ik de opbouw identiek. Zo blijft het één familie: je ziet meteen dat wijn en bier bij elkaar horen, en even snel dat je in een ander vak zit. Elke wereld loopt door van het cursusboek naar de e-learning en het examenformulier. Ik verzorgde ontwerp, opmaak, interactieve opbouw, animatie en beeldbewerking.',
        role: 'Ontwerp, opmaak, interactieve opbouw, animatie, beeldbewerking, ontwikkeling',
        client: 'Drankenacademy',
        year: '',
        image: 'assets/werk/drankenacademy/home.png',
        heroFit: 'contain',
        heroRatio: '1915 / 914',
        gallery: [],
        fit: 'contain',
        processTitle: 'De vier vakgebieden',
        process: [
          {
            title: 'Wijn',
            blurb: 'Het uitgebreidste vak, en het vertrekpunt voor de andere drie. De vijf lessen zijn flesvormen in vijf kleuren: de vorm van het onderwerp als navigatie, zodat je aan de silhouet al ziet waar je bent. Bordeaux en zandtinten houden het geheel bij de wijn zelf.',
            images: ['assets/werk/drankenacademy/wijn-mockup.png', 'assets/werk/drankenacademy/elearning-wijn.png']
          },
          {
            title: 'Bier',
            blurb: 'Warm en aards: een kroonkurk met hopbel als merkteken, een graanveld als achtergrond, de lessen als kaarten die eroverheen liggen. Voor de inhoud tekende ik een eigen pictogramreeks — graansoorten, water, de vier proefpijlers — zodat de stof visueel blijft in plaats van een opsomming te worden.',
            images: [
              'assets/werk/drankenacademy/bier.png',
              'assets/werk/drankenacademy/bier-lessen.png',
              'assets/werk/drankenacademy/bier-ingredienten.png',
              'assets/werk/drankenacademy/bier-proeven.png'
            ]
          },
          {
            title: 'Sterke drank',
            blurb: 'Het donkerste van de vier, en dat mag: goud op zwart, een zigzagpatroon als textuur en een embleem in de stijl van een oud distilleerderslabel. Dat register past bij het product en zet dit vak duidelijk apart van wijn en bier zonder de familie te verlaten.',
            images: [
              'assets/werk/drankenacademy/sterke-drank.png',
              'assets/werk/drankenacademy/sterke-drank-intro.png',
              'assets/werk/drankenacademy/sterke-drank-les.png'
            ]
          },
          {
            title: 'Sociale hygiëne',
            blurb: 'Het overkoepelende vak, en het enige dat ook op telefoon werd uitgewerkt. Voor het merkteken bracht ik fles, glas en gesprek samen in één vorm — het vak dat over de omgang met drank gaat, niet over de drank zelf.',
            images: ['assets/werk/drankenacademy/sociale-hygiene.png']
          }
        ],
        files: [
          { label: 'E-learning wijn niveau 1', src: 'https://elearning.drankenacademy.com/ikweetwatvanwijn/' }
        ],
        link: 'https://www.drankenacademy.com/',
        video: ''
      },
      {
        id: 'lentetips',
        highlight: 0,
        title: 'Lentetips',
        blurb: 'Online publicatie met whitepaper voor Vandenbroele.',
        description: 'Een online publicatie rond Lentetips, met een whitepaper achter een aanmeldscherm. Ik verzorgde het ontwerp, de opmaak, de interactieve opbouw, de animaties en de beeldbewerking.',
        role: 'Ontwerp, opmaak, interactieve opbouw, animatie, beeldbewerking, ontwikkeling',
        client: 'Vandenbroele',
        year: '',
        image: '',
        gallery: [],
        link: 'https://solutions.vandenbroele.be/lentetips/lentetips/overlay/im-whitepaper-reserved/',
        video: ''
      }
    ]
  },

  // ------------------------------------------------------------------------
  {
    category: 'Print',
    items: [
      {
        id: 'ftrprf-beursmateriaal',
        highlight: 0,
        title: 'FTRPRF beursmateriaal',
        blurb: 'Roll-up banner en stickers voor de beursstand.',
        description: 'Op een beursvloer heb je twee meter hoogte en twee seconden aandacht. De roll-up is daarom opgebouwd rond één boodschap op ooghoogte, met de merknaam groot genoeg om over de gangpaden te lezen. De stickers doen het omgekeerde: klein, tastbaar, iets dat iemand meeneemt en op zijn laptop plakt. Beide binnen de bestaande huisstijl, zodat de stand als één geheel leest.',
        role: 'Grafisch ontwerp',
        client: 'FTRPRF',
        year: '',
        image: '',
        gallery: [],
        files: [
          { label: 'Roll-up banner (PDF)', src: 'assets/werk/ftrprf/FTRPRF-rollup.pdf' },
          { label: 'Beursstickers (PDF)', src: 'assets/werk/ftrprf/FTRPRF-stickers-beurs.pdf' }
        ],
        link: '',
        video: ''
      }
    ]
  },

  // ========================================================================
  // Hieronder: verzonnen voorbeelden. Verwijder dit hele stuk zodra deel 2
  // en 3 van je realisaties erin staan.
  // ========================================================================
  {
    category: 'Ontwerp',
    items: [
      {
        id: 'huisstijl-urbanroots',
        example: true,
        highlight: 0,
        title: 'Huisstijl UrbanRoots',
        blurb: 'Volledige huisstijl voor een lokaal duurzaamheidsmerk.',
        description: 'UrbanRoots vroeg om een huisstijl die hun missie — duurzaam en lokaal ondernemen — visueel vertaalt. Ik ontwikkelde een logo, kleurenpalet en typografiesysteem dat consistent terugkomt op verpakking, website en drukwerk.',
        role: 'Grafisch ontwerp, branding',
        client: 'UrbanRoots',
        year: '2024',
        image: '',
        gallery: [],
        video: ''
      },
      {
        id: 'verpakking-aroma',
        example: true,
        highlight: 0,
        title: 'Productverpakking Aroma',
        blurb: 'Verpakkingsontwerp voor een reeks artisanale koffiebonen.',
        description: 'Voor het koffiemerk Aroma ontwierp ik een verpakkingslijn die opvalt in het schap zonder de premium uitstraling van het product te verliezen. Elke smaak kreeg een eigen kleuraccent binnen dezelfde visuele taal.',
        role: 'Grafisch ontwerp, packaging',
        client: 'Aroma Coffee',
        year: '2023',
        image: '',
        gallery: [],
        video: ''
      },
      {
        id: 'logo-nordic-coffee',
        example: true,
        highlight: 0,
        title: 'Logo Nordic Coffee',
        blurb: 'Minimalistisch logo-ontwerp voor een Scandinavisch koffiemerk.',
        description: 'Nordic Coffee wilde een strak, tijdloos logo met een knipoog naar hun Scandinavische roots. Het resultaat is een merkteken dat even goed werkt op een koffiebeker als op gevelreclame.',
        role: 'Logo-ontwerp',
        client: 'Nordic Coffee',
        year: '2023',
        image: '',
        gallery: [],
        video: ''
      }
    ]
  },
  {
    category: 'Video',
    items: [
      {
        id: 'bedrijfsfilm-zenfit',
        example: true,
        highlight: 0,
        title: 'Bedrijfsfilm ZenFit',
        blurb: 'Sfeervolle bedrijfsfilm voor een boetiek-fitnessstudio.',
        description: 'Ik filmde en monteerde een bedrijfsfilm die de sfeer van ZenFit vastlegt: van de eerste ochtendtraining tot de gemeenschap die de studio drijft. Gebruikt op de website en social media.',
        role: 'Video-editing, camerawerk',
        client: 'ZenFit',
        year: '2024',
        image: '',
        gallery: [],
        video: ''
      },
      {
        id: 'aftermovie-foodtruck',
        example: true,
        highlight: 0,
        title: 'Aftermovie Foodtruck Festival',
        blurb: 'Dynamische aftermovie van een tweedaags streetfoodfestival.',
        description: 'Een strak gemonteerde aftermovie met interviews, sfeerbeelden en muziek op maat, geleverd binnen 48 uur na het festival zodat de organisatie meteen kon napromoten.',
        role: 'Camerawerk, montage',
        client: 'Streetfood Fest',
        year: '2023',
        image: '',
        gallery: [],
        video: ''
      },
      {
        id: 'teaser-soundwave',
        example: true,
        highlight: 0,
        title: 'Product teaser SoundWave',
        blurb: 'Korte productteaser voor de lancering van een draadloze speaker.',
        description: 'Een compacte, ritmische teaser die de lancering van de SoundWave-speaker aankondigde op social media, met focus op vorm en geluidsbeleving.',
        role: 'Video-editing, motion',
        client: 'SoundWave Audio',
        year: '2022',
        image: '',
        gallery: [],
        video: ''
      }
    ]
  },
  {
    category: 'Animatie',
    items: [
      {
        id: 'explainer-fintrack',
        example: true,
        highlight: 0,
        title: '2D-explainer FinTrack',
        blurb: 'Uitlegvideo die een budgetteringsapp in 60 seconden verduidelijkt.',
        description: 'FinTrack had een heldere, laagdrempelige manier nodig om hun app uit te leggen aan nieuwe gebruikers. Ik schreef het script mee en animeerde de volledige 2D-explainer.',
        role: '2D-animatie, scripting',
        client: 'FinTrack',
        year: '2024',
        image: '',
        gallery: [],
        video: ''
      },
      {
        id: 'logo-animatie-lumen',
        example: true,
        highlight: 0,
        title: '3D-logo-animatie Lumen',
        blurb: 'Korte 3D-intro-animatie van het Lumen-merkteken.',
        description: 'Een korte, herbruikbare 3D-animatie van het Lumen-logo voor gebruik als intro in video-content en op events.',
        role: '3D-animatie',
        client: 'Lumen',
        year: '2023',
        image: '',
        gallery: [],
        video: ''
      },
      {
        id: 'motion-social-kit',
        example: true,
        highlight: 0,
        title: 'Motion graphics Social Kit',
        blurb: 'Set herbruikbare motion templates voor social media-content.',
        description: 'Een set modulaire motion-graphics templates waarmee het marketingteam zelf snel nieuwe social-content kan samenstellen, zonder telkens een animator nodig te hebben.',
        role: 'Motion design',
        client: 'Intern project',
        year: '2022',
        image: '',
        gallery: [],
        video: ''
      }
    ]
  },
  {
    category: 'Website',
    items: [
      {
        id: 'ecommerce-studio-noir',
        example: true,
        highlight: 0,
        title: 'E-commerce Studio Noir',
        blurb: 'Webshop voor een minimalistisch interieurmerk.',
        description: 'Voor Studio Noir bouwde ik een webshop die de rustige, minimalistische productfotografie centraal zet, met een checkoutflow die zo min mogelijk drempels opwerpt.',
        role: 'Webdesign, ontwikkeling',
        client: 'Studio Noir',
        year: '2024',
        image: '',
        gallery: [],
        video: ''
      },
      {
        id: 'portfolio-fotograaf-elke',
        example: true,
        highlight: 0,
        title: 'Portfolio-site Fotograaf Elke',
        blurb: 'Beeldgerichte portfoliosite voor een portretfotografe.',
        description: 'Een rustige, beeldgerichte site waarin de fotografie van Elke zelf de hoofdrol speelt — minimale UI, maximale aandacht voor het werk.',
        role: 'Webdesign, ontwikkeling',
        client: 'Elke Fotografie',
        year: '2023',
        image: '',
        gallery: [],
        video: ''
      },
      {
        id: 'landing-launchpad',
        example: true,
        highlight: 0,
        title: 'Landingspagina LaunchPad',
        blurb: 'Conversiegerichte landingspagina voor een productlancering.',
        description: 'Een strakke, snelle landingspagina gebouwd rond één duidelijke actie: inschrijven voor de vroege toegang van LaunchPad.',
        role: 'Webdesign, copywriting',
        client: 'LaunchPad',
        year: '2022',
        image: '',
        gallery: [],
        video: ''
      }
    ]
  }
];

// Categorieën die je op de site wil, in deze volgorde. Een categorie zonder
// projecten verschijnt niet in de filterbalk.
window.portfolioCategories = [
  'App-ontwerp', 'Online magazines', 'Print', 'Website',
  'Ontwerp', 'Branding', 'UX/UI', 'Video', 'Animatie'
];

// Eén platte lijst, gesorteerd op de volgorde van portfolioCategories.
window.allProjects = window.portfolioCategories
  .map(function (cat) {
    var group = window.portfolioData.filter(function (c) { return c.category === cat; })[0];
    return group ? group.items.map(function (it) {
      return Object.assign({}, it, { category: cat });
    }) : [];
  })
  .reduce(function (a, b) { return a.concat(b); }, []);

// De uitgelichte projecten, gesorteerd op hun highlight-nummer.
window.highlightProjects = window.allProjects
  .filter(function (p) { return p.highlight; })
  .sort(function (a, b) { return a.highlight - b.highlight; });

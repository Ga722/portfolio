/* Projectpagina: leest ?id= uit de URL en vult de inhoud uit portfolio-data.js. */
(function () {
  'use strict';

  var all = window.allProjects;
  var id = new URLSearchParams(window.location.search).get('id');
  var i = all.findIndex(function (p) { return p.id === id; });
  if (i < 0) i = 0;
  var p = all[i];
  var esc = window.gaUI.esc;

  var ARROW = '<svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true"><path d="M1 7h18M13 1l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  document.title = p.title + ' — Gazmend Aliaj';
  document.getElementById('pEyebrow').textContent = [p.category, p.year].filter(Boolean).join(' · ');
  document.getElementById('pTitle').textContent = p.title;
  document.getElementById('pDescription').textContent = p.description;

  var hero = document.getElementById('pHero');
  if (p.image) hero.style.backgroundImage = 'url(' + p.image + ')';
  hero.setAttribute('aria-label', p.title);
  /* Schermafbeeldingen van websites mogen niet gesneden worden: geef de hero de echte
     verhouding van het beeld mee, en toon hem volledig in plaats van vullend.
     heroRatio en heroFit gaan voor — nodig bij een liggende hero naast een portret-galerij. */
  var heroRatio = p.heroRatio || p.ratio;
  var heroFit = p.heroFit || p.fit;
  if (heroRatio) hero.style.aspectRatio = heroRatio;
  if (heroFit === 'contain') hero.classList.add('block--contain');

  /* Alleen de feiten die gevuld zijn — een leeg jaar of een leeg klantveld
     laten we weg in plaats van als lege regel te tonen. */
  document.getElementById('pFacts').innerHTML =
    [['Klant', p.client], ['Rol', p.role], ['Jaar', p.year]]
      .filter(function (f) { return f[1]; })
      .map(function (f) { return '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>'; })
      .join('');

  /* "Bekijk online" bij projecten met een live link. */
  var actions = document.getElementById('pActions');
  var buttons = [];
  if (p.link) {
    buttons.push('<a class="btn" href="' + esc(p.link) + '" target="_blank" rel="noopener">Bekijk online' + ARROW + '</a>');
  }
  (p.files || []).forEach(function (f) {
    buttons.push('<a class="arrow-link" href="' + esc(f.src) + '" target="_blank" rel="noopener">' + esc(f.label) + '</a>');
  });
  if (buttons.length) actions.innerHTML = buttons.join('');
  else actions.hidden = true;

  /* Galerij. Beelden mogen een string of { src, caption, ratio, fit, tall } zijn.
     ratio en fit vallen terug op de projectwaarden. */
  function figure(item, ratio, fit) {
    var src = typeof item === 'string' ? item : item.src;
    var caption = typeof item === 'string' ? '' : item.caption;
    var r = (typeof item === 'object' && item.ratio) || ratio;
    var f = (typeof item === 'object' && item.fit) || fit;
    /* Een volledige-paginacapture is veel hoger dan breed: die krijgt een eigen schuifkader.
       De drempel ligt boven een telefoonscherm (16/9 = 1.78) zodat gewone schermafbeeldingen
       hier niet in vallen; een paginacapture zit rond 2.6 tot 3.2. */
    var parts = r ? String(r).split('/') : null;
    var tall = (typeof item === 'object' && item.tall) ||
      (parts && parts.length === 2 && (parseFloat(parts[1]) / parseFloat(parts[0])) > 2.4);
    var style = 'background-image:url(' + esc(src) + ')' + (r ? ';aspect-ratio:' + r : '');
    /* Een volledige-paginacapture wordt een echte <img> in een schuifkader: geen
       verhoudingsrekenwerk nodig, en de bezoeker kan de pagina doorlopen. */
    if (tall) {
      return '<figure class="figure figure--tall">' +
        '<div class="scrollframe"><img src="' + esc(src) + '" alt="' + esc(caption || p.title) + '" loading="lazy"></div>' +
        (caption ? '<figcaption>' + esc(caption) + '</figcaption>' : '') + '</figure>';
    }
    return '<figure class="figure">' +
      '<div class="block' + (f === 'contain' ? ' block--contain' : '') + '" style="' + style + '" role="img" aria-label="' + esc(caption || p.title) + '"></div>' +
      (caption ? '<figcaption>' + esc(caption) + '</figcaption>' : '') + '</figure>';
  }

  var gallery = document.getElementById('pGallery');
  if (p.gallery && p.gallery.length) {
    gallery.innerHTML = p.gallery.map(function (it) { return figure(it, p.ratio, p.fit); }).join('');
    if (p.ratio === '9 / 16') gallery.classList.add('project__gallery--phones');
    if (p.gallery.length === 1) gallery.classList.add('project__gallery--single');
  } else {
    /* Geen galerij: de sectie verdwijnt, in plaats van twee lege grijze vlakken te tonen. */
    gallery.hidden = true;
  }

  /* Procesblokken: moodboards, styletiles, personas. */
  var process = document.getElementById('pProcess');
  if (p.process && p.process.length) {
    process.innerHTML = '<h2>' + esc(p.processTitle || 'Het proces') + '</h2>' + p.process.map(function (b) {
      return '<section class="process">' +
        '<h3>' + esc(b.title) + '</h3>' +
        (b.blurb ? '<p>' + esc(b.blurb) + '</p>' : '') +
        '<div class="process__grid">' + (b.images || []).map(function (src) { return figure(src, '', ''); }).join('') + '</div>' +
        '</section>';
    }).join('');
  } else {
    process.hidden = true;
  }

  var prev = all[(i - 1 + all.length) % all.length];
  var next = all[(i + 1) % all.length];
  document.getElementById('pPrev').href = 'project.html?id=' + encodeURIComponent(prev.id);
  document.getElementById('pNext').href = 'project.html?id=' + encodeURIComponent(next.id);
})();

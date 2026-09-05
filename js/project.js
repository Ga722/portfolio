/* Projectpagina: leest ?id= uit de URL en vult de inhoud uit portfolio-data.js. */
(function () {
  'use strict';

  var all = window.allProjects;
  var id = new URLSearchParams(window.location.search).get('id');
  var i = all.findIndex(function (p) { return p.id === id; });
  if (i < 0) i = 0;
  var p = all[i];
  var esc = window.gaUI.esc;

  document.title = p.title + ' — Gazmend Aliaj';
  document.getElementById('pEyebrow').textContent = p.category + ' · ' + p.year;
  document.getElementById('pTitle').textContent = p.title;
  document.getElementById('pDescription').textContent = p.description;

  var hero = document.getElementById('pHero');
  if (p.image) hero.style.backgroundImage = 'url(' + p.image + ')';
  hero.setAttribute('aria-label', p.title);

  document.getElementById('pFacts').innerHTML =
    [['Klant', p.client], ['Rol', p.role], ['Jaar', p.year]]
      .map(function (f) { return '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>'; })
      .join('');

  var gallery = document.getElementById('pGallery');
  if (p.gallery && p.gallery.length) {
    gallery.innerHTML = p.gallery.map(function (src) {
      return '<div class="block" style="background-image:url(' + esc(src) + ')"></div>';
    }).join('');
  }

  var prev = all[(i - 1 + all.length) % all.length];
  var next = all[(i + 1) % all.length];
  document.getElementById('pPrev').href = 'project.html?id=' + encodeURIComponent(prev.id);
  document.getElementById('pNext').href = 'project.html?id=' + encodeURIComponent(next.id);
})();

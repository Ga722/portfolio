/* Gedeelde UI: mobiel menu, actieve navigatie, projectindex met preview. */
(function () {
  'use strict';

  /* ---- Mobiel menu ---- */
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('menu');
  if (btn && menu) {
    var setOpen = function (open) {
      menu.setAttribute('data-open', open ? 'true' : 'false');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
      document.body.style.overflow = open ? 'hidden' : '';
    };
    btn.addEventListener('click', function () {
      setOpen(menu.getAttribute('data-open') !== 'true');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  /* ---- Actieve sectie in de navigatie (alleen op de one-pager) ---- */
  var sections = ['home', 'overmij', 'portfolio', 'contact']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  if (sections.length === 4) {
    var mark = function () {
      var y = window.scrollY + 120;
      var current = 'home';
      sections.forEach(function (s) { if (s.offsetTop <= y) current = s.id; });
      document.querySelectorAll('.nav__link, .menu__item').forEach(function (a) {
        var on = (a.getAttribute('href') || '').indexOf('#' + current) > -1;
        if (on) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    };
    window.addEventListener('scroll', mark, { passive: true });
    mark();
  }

  /* ---- Iconen ---- */
  var ARROW_R = '<svg width="18" height="13" viewBox="0 0 20 14" fill="none" aria-hidden="true"><path d="M1 7h18M13 1l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var ARROW_R20 = '<svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true"><path d="M1 7h18M13 1l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var bg = function (src) {
    return src ? ' style="background-image:url(' + esc(src) + ')"' : '';
  };
  var href = function (p) { return 'project.html?id=' + encodeURIComponent(p.id); };

  /* ---- Kaart voor de Uitgelicht-rij ---- */
  function cardHTML(p) {
    return '<a class="card" href="' + href(p) + '">' +
      '<span class="card__thumb"' + bg(p.image) + ' role="img" aria-label="' + esc(p.title) + '"></span>' +
      '<span class="card__eyebrow"><span class="dash"></span>' + esc(p.category) + ' · ' + esc(p.year) + '</span>' +
      '<span class="card__title">' + esc(p.title) + '</span>' +
      '<span class="card__blurb">' + esc(p.blurb) + '</span>' +
      '</a>';
  }

  /* ---- Rij in de index ---- */
  function rowHTML(p, n) {
    return '<a class="row" href="' + href(p) + '" data-i="' + n + '">' +
      '<span class="row__n">' + String(n + 1).padStart(2, '0') + '</span>' +
      '<span class="row__main"><span class="row__title">' + esc(p.title) + '</span>' +
      '<span class="row__meta">' + esc(p.category) + ' · ' + esc(p.year) + '</span></span>' +
      '<span class="row__cat">' + esc(p.category) + '</span>' +
      '<span class="row__year">' + esc(p.year) + '</span>' +
      '<span class="row__arrow">' + ARROW_R20 + '</span>' +
      '</a>';
  }

  /* ---- Preview naast de index ---- */
  function previewHTML(p) {
    return '<a href="' + href(p) + '">' +
      '<span class="preview__thumb"' + bg(p.image) + ' role="img" aria-label="' + esc(p.title) + '"></span>' +
      '<span class="preview__meta"><span class="dash"></span>' + esc(p.category) + ' · ' + esc(p.year) + '</span>' +
      '<h3>' + esc(p.title) + '</h3><p>' + esc(p.blurb) + '</p></a>' +
      '<a class="arrow-link" href="' + href(p) + '">Bekijk project' + ARROW_R + '</a>';
  }

  /**
   * Rendert een projectindex.
   * opts: { rows, preview, items, initial, step, loadMore, loadMoreCount, foot }
   */
  function renderIndex(opts) {
    var items = opts.items;
    var count = opts.initial > 0 ? Math.min(opts.initial, items.length) : items.length;

    function paintPreview(i) {
      if (opts.preview && items[i]) opts.preview.innerHTML = previewHTML(items[i]);
    }

    function paint() {
      opts.rows.innerHTML = items.slice(0, count).map(rowHTML).join('');
      var remaining = items.length - count;
      if (opts.loadMore) {
        opts.loadMore.hidden = remaining <= 0;
        if (opts.loadMoreCount) opts.loadMoreCount.textContent = '(' + remaining + ')';
      }
      if (opts.foot) opts.foot.hidden = remaining > 0;
      paintPreview(0);
    }

    opts.rows.addEventListener('mouseover', function (e) {
      var row = e.target.closest('.row');
      if (row) paintPreview(Number(row.getAttribute('data-i')));
    });
    opts.rows.addEventListener('focusin', function (e) {
      var row = e.target.closest('.row');
      if (row) paintPreview(Number(row.getAttribute('data-i')));
    });

    if (opts.loadMore) {
      opts.loadMore.addEventListener('click', function () {
        count = Math.min(count + (opts.step || 8), items.length);
        paint();
      });
    }

    paint();
    return { setItems: function (next) { items = next; count = opts.initial > 0 ? Math.min(opts.initial, next.length) : next.length; paint(); } };
  }

  window.gaUI = { cardHTML: cardHTML, renderIndex: renderIndex, esc: esc };
})();

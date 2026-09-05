/* Homepage: uitgelicht-rij, projectindex en het contactformulier. */
(function () {
  'use strict';

  var narrow = window.matchMedia('(max-width: 720px)');

  /* ---- Uitgelicht ---- */
  var track = document.getElementById('railTrack');
  if (track) {
    track.innerHTML = window.highlightProjects.map(window.gaUI.cardHTML).join('');
    var prev = document.getElementById('railPrev');
    var next = document.getElementById('railNext');
    var edges = function () {
      if (!prev || !next) return;
      prev.disabled = track.scrollLeft < 8;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
    };
    var scrollBy = function (dir) {
      track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: 'smooth' });
    };
    if (prev) prev.addEventListener('click', function () { scrollBy(-1); });
    if (next) next.addEventListener('click', function () { scrollBy(1); });
    track.addEventListener('scroll', edges, { passive: true });
    edges();
  }

  /* ---- Index ---- */
  var rows = document.getElementById('indexRows');
  if (rows) {
    var n = narrow.matches ? 6 : 8;
    window.gaUI.renderIndex({
      rows: rows,
      preview: document.getElementById('preview'),
      items: window.allProjects,
      initial: n,
      step: n,
      loadMore: document.getElementById('loadMore'),
      loadMoreCount: document.getElementById('loadMoreCount'),
      foot: document.getElementById('indexFoot')
    });
  }

  /* ---- Contactformulier ----
     Er zit geen verzendlogica achter: koppel dit aan je eigen mailservice
     (bv. Formspree of Netlify Forms) door de action/method op het <form> te zetten. */
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('formStatus');
      var vals = ['voornaam', 'familienaam', 'bericht'].map(function (id) {
        return document.getElementById(id).value.trim();
      });
      if (vals.some(function (v) { return !v; })) {
        status.textContent = 'Vul alle velden in.';
        return;
      }
      status.textContent = 'Bedankt, je bericht is verzonden.';
      form.reset();
    });
  }
})();

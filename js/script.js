// ==========================================================================
// Mobile nav toggle
// ==========================================================================
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ==========================================================================
// Scroll-spy: highlight the active nav link based on visible section
// (only relevant on index.html, where nav links carry data-section)
// ==========================================================================
const sections = document.querySelectorAll('.section[id]');
const navLinks = document.querySelectorAll('.nav-link[data-section]');

if (sections.length && navLinks.length) {
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

  sections.forEach(section => spyObserver.observe(section));
}

// ==========================================================================
// Portfolio rendering — data lives in js/portfolio-data.js
// (only relevant on index.html)
// ==========================================================================
const portfolioContainer = document.getElementById('portfolioCategories');

if (portfolioContainer) {
  portfolioData.forEach(group => {
  const section = document.createElement('div');
  section.className = 'portfolio-category';

  const head = document.createElement('div');
  head.className = 'portfolio-category-head';

  const heading = document.createElement('h3');
  heading.textContent = group.category;
  head.appendChild(heading);

  const btns = document.createElement('div');
  btns.className = 'portfolio-scroll-btns';
  const prevBtn = document.createElement('button');
  prevBtn.className = 'scroll-btn';
  prevBtn.setAttribute('aria-label', `${group.category} — vorige`);
  prevBtn.innerHTML = '<svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M15 6H1M1 6l5-5M1 6l5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const nextBtn = document.createElement('button');
  nextBtn.className = 'scroll-btn';
  nextBtn.setAttribute('aria-label', `${group.category} — volgende`);
  nextBtn.innerHTML = '<svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M1 6h14M11 1l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  btns.appendChild(prevBtn);
  btns.appendChild(nextBtn);
  head.appendChild(btns);

  section.appendChild(head);

  const grid = document.createElement('div');
  grid.className = 'portfolio-grid';

  group.items.forEach(project => {
    const item = document.createElement('a');
    item.className = 'portfolio-item';
    item.href = `project.html?id=${encodeURIComponent(project.id)}`;

    const thumb = document.createElement('div');
    thumb.className = 'portfolio-thumb';
    thumb.setAttribute('role', 'img');
    thumb.setAttribute('aria-label', `${group.category} project — ${project.title}`);

    const title = document.createElement('span');
    title.className = 'portfolio-item-title';
    title.textContent = project.title;

    const blurb = document.createElement('span');
    blurb.className = 'portfolio-item-blurb';
    blurb.textContent = project.blurb;

    item.appendChild(thumb);
    item.appendChild(title);
    item.appendChild(blurb);
    grid.appendChild(item);
  });

  section.appendChild(grid);

  const scrollByAmount = () => grid.clientWidth * 0.9;
  prevBtn.addEventListener('click', () => grid.scrollBy({ left: -scrollByAmount(), behavior: 'smooth' }));
  nextBtn.addEventListener('click', () => grid.scrollBy({ left: scrollByAmount(), behavior: 'smooth' }));

  portfolioContainer.appendChild(section);
  });
}

// ==========================================================================
// Contact form — opens the visitor's mail client with a prefilled message
// addressed to Gazmend. No server or third-party service needed, but it
// does depend on the visitor having a mail client configured.
// (only relevant on index.html)
// ==========================================================================
const CONTACT_EMAIL = 'gazmend.aliaj@companyname.com'; // TODO: replace with your real email address

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      formStatus.textContent = 'Vul alle verplichte velden in.';
      return;
    }

    const voornaam = contactForm.voornaam.value.trim();
    const familienaam = contactForm.familienaam.value.trim();
    const bericht = contactForm.bericht.value.trim();

    const subject = encodeURIComponent(`Contactaanvraag van ${voornaam} ${familienaam}`);
    const body = encodeURIComponent(`${bericht}\n\n— ${voornaam} ${familienaam}`);

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    formStatus.textContent = 'Je mailclient wordt geopend om het bericht te versturen.';
  });
}

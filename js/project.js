// ==========================================================================
// Project detail page — reads ?id=... from the URL and fills in content
// from js/portfolio-data.js. Also wires up prev/next navigation across
// the full flattened project list.
// ==========================================================================

// Flatten portfolioData into a single ordered list, keeping category info
const flatProjects = portfolioData.flatMap(group =>
  group.items.map(item => ({ ...item, category: group.category }))
);

const params = new URLSearchParams(window.location.search);
const requestedId = params.get('id');

const currentIndex = flatProjects.findIndex(p => p.id === requestedId);
const project = currentIndex !== -1 ? flatProjects[currentIndex] : flatProjects[0];
const safeIndex = currentIndex !== -1 ? currentIndex : 0;

if (!requestedId || currentIndex === -1) {
  // Unknown or missing id — fall back to the first project rather than
  // showing a broken page.
  console.warn('Onbekend project-id, val terug op eerste project.');
}

document.title = `${project.title} — Gazmend Aliaj`;

document.getElementById('projectCategory').textContent = project.category;
document.getElementById('projectTitle').textContent = project.title;
document.getElementById('projectDescription').textContent = project.description || project.blurb;
document.getElementById('factClient').textContent = project.client || '—';
document.getElementById('factRole').textContent = project.role || '—';
document.getElementById('factYear').textContent = project.year || '—';

const mainImage = document.getElementById('projectImageMain');
mainImage.setAttribute('aria-label', `Hoofdbeeld — ${project.title}`);
if (project.image) {
  mainImage.style.backgroundImage = `url(${project.image})`;
}

// Prev / next across the full flattened list, wrapping around at the ends
const prevProject = flatProjects[(safeIndex - 1 + flatProjects.length) % flatProjects.length];
const nextProject = flatProjects[(safeIndex + 1) % flatProjects.length];

const prevLink = document.getElementById('prevProject');
const nextLink = document.getElementById('nextProject');

prevLink.href = `project.html?id=${encodeURIComponent(prevProject.id)}`;
prevLink.querySelector('span').textContent = prevProject.title;

nextLink.href = `project.html?id=${encodeURIComponent(nextProject.id)}`;
nextLink.querySelector('span').textContent = nextProject.title;

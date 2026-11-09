// ---- Header scroll state ----
const header = document.getElementById('header');
const onScroll = () => {
  if (window.scrollY > 20) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---- Mobile menu ----
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
});
nav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    nav.classList.remove('open');
  });
});

// ---- Active nav link on scroll ----
const sections = document.querySelectorAll('section[id]');
const navLinks = nav.querySelectorAll('a[href^="#"]');
const setActive = () => {
  let current = 'top';
  const y = window.scrollY + 120;
  sections.forEach(s => {
    if (s.offsetTop <= y) current = s.id;
  });
  // top hero has id top on section? ensure
  if (window.scrollY < 200) current = 'top';
  navLinks.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
};
window.addEventListener('scroll', setActive, { passive: true });
setActive();

// ---- Reveal on scroll ----
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ---- Countdown ----
// Target: next match, computed as 14 days from today at 14:00 (placeholder – replace with real fixture date).
const target = new Date();
target.setDate(target.getDate() + 14);
target.setHours(14, 0, 0, 0);

// Format the displayed match date in Swedish.
const svDays = ['söndag','måndag','tisdag','onsdag','torsdag','fredag','lördag'];
const svMonths = ['januari','februari','mars','april','maj','juni','juli','augusti','september','oktober','november','december'];
const matchDateEl = document.getElementById('match-date');
if (matchDateEl) {
  matchDateEl.textContent = svDays[target.getDay()] + ' ' + target.getDate() + ' ' + svMonths[target.getMonth()] + ' ' + target.getFullYear();
}

function tick() {
  const now = new Date();
  let diff = target - now;
  if (diff < 0) diff = 0;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('cd-d').textContent = String(d).padStart(2,'0');
  document.getElementById('cd-h').textContent = String(h).padStart(2,'0');
  document.getElementById('cd-m').textContent = String(m).padStart(2,'0');
  document.getElementById('cd-s').textContent = String(s).padStart(2,'0');
}
tick();
setInterval(tick, 1000);

// ---- Back to top ----
const btt = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  btt.classList.toggle('visible', window.scrollY > 600);
}, { passive: true });
btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ---- Smooth anchor scroll offset for sticky header ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id === '#' || id === '#top') {
      if (id === '#top') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
      return;
    }
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});

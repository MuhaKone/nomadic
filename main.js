// ===== DATA =====
const experiences = [
  {
    id: 1,
    tag: 'desert',
    tagLabel: 'Désert',
    title: 'Nomade du Désert',
    desc: 'Voyagez avec des familles Touareg à travers les dunes du Sahel. Apprenez à lire les étoiles, dresser les tentes, et boire le thé rituellement.',
    longDesc: 'Une immersion de 7 jours avec une famille nomade dans les zones arides du nord. Vous participerez aux migrations saisonnières, apprendrez les secrets des plantes médicinales du désert, et assisterez aux cérémonies de musique gnaoua sous un ciel étoilé incomparable.',
    img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=700&auto=format&fit=crop',
    price: '380 000 GNF',
    duration: '7 jours / 6 nuits',
    groupSize: 'Max 6 pers.',
    difficulty: 'Modéré',
    season: 'Nov – Mar'
  },
  {
    id: 2,
    tag: 'foret',
    tagLabel: 'Forêt',
    title: 'Forêt Sacrée',
    desc: 'Plongez dans les traditions des gardiens de la forêt guinéenne — rituels d\'initiation, médecine traditionnelle, et chants polyphoniques.',
    longDesc: 'Cinq jours au cœur de la forêt primaire avec les sages d\'un village Kissi. Vous participerez aux cérémonies d\'offrandes, apprendrez à identifier les plantes médicinales, et écouterez les récits de la création transmis oralement depuis des siècles.',
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&auto=format&fit=crop',
    price: '290 000 GNF',
    duration: '5 jours / 4 nuits',
    groupSize: 'Max 8 pers.',
    difficulty: 'Accessible',
    season: 'Toute l\'année'
  },
  {
    id: 3,
    tag: 'riviere',
    tagLabel: 'Rivière',
    title: 'Pêcheurs du Delta',
    desc: 'Embarquez sur les pirogues du Niger avec les pêcheurs Bozo. Nuits sur l\'eau, marchés flottants, et cuisine lacustre authentique.',
    longDesc: 'Huit jours à bord des pirogues traditionnelles avec une famille de pêcheurs Bozo. Vous apprendrez les techniques de pêche ancestrales, visitez les marchés flottants de l\'aube, et cuisinerez ensemble sur les berges au coucher du soleil.',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop',
    price: '420 000 GNF',
    duration: '8 jours / 7 nuits',
    groupSize: 'Max 4 pers.',
    difficulty: 'Accessible',
    season: 'Déc – Avr'
  },
  {
    id: 4,
    tag: 'montagne',
    tagLabel: 'Montagne',
    title: 'Bergers du Fouta',
    desc: 'Suivez les transhumances des éleveurs Peul dans les hauteurs du Fouta Djalon. Fromage artisanal, tressage traditionnel, danses Doundoumba.',
    longDesc: 'Six jours avec une famille de bergers Peul dans les hauts plateaux du Fouta Djalon. Aidez aux soins du bétail, apprenez à fabriquer le fromage local, participez aux danses rituelles Doundoumba le soir au village.',
    img: 'https://www.vudaf.com/wp-content/uploads/2019/10/peul-berger.jpg',
    price: '310 000 GNF',
    duration: '6 jours / 5 nuits',
    groupSize: 'Max 6 pers.',
    difficulty: 'Modéré',
    season: 'Oct – Fév'
  },
  {
    id: 5,
    tag: 'foret',
    tagLabel: 'Artisanat',
    title: 'Artisans de Kankan',
    desc: 'Apprenez le tissage Kente, la poterie et la forge avec les maîtres artisans de Kankan, capitale de la Haute-Guinée.',
    longDesc: 'Quatre jours d\'apprentissage intensif avec les maîtres artisans de Kankan. Tissage du Kente, modelage de la poterie en terre cuite, et initiation à la forge traditionnelle. Repartez avec vos créations et un certificat d\'apprentissage.',
    img: 'https://silabosoona.fr/uploads/img_69f917f6a25a0_article_1777932234385_og.jpg',
    price: '195 000 GNF',
    duration: '4 jours / 3 nuits',
    groupSize: 'Max 8 pers.',
    difficulty: 'Accessible',
    season: 'Toute l\'année'
  },
  {
    id: 6,
    tag: 'desert',
    tagLabel: 'Désert',
    title: 'Astronomie nomade',
    desc: 'Une nuit exceptionnelle dans le désert avec un astronome traditionnel. Cartographie des étoiles à l\'œil nu, navigation nomade, légendes célestes.',
    longDesc: 'Une expérience de trois jours centrée sur l\'astronomie traditionnelle des peuples nomades du Sahara. Guidé par un maître orienteur qui n\'utilise que les étoiles et les vents, vous apprendrez à vous diriger dans les ténèbres du désert comme le faisaient vos ancêtres.',
    img: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=700&auto=format&fit=crop',
    price: '225 000 GNF',
    duration: '3 jours / 2 nuits',
    groupSize: 'Max 6 pers.',
    difficulty: 'Modéré',
    season: 'Nov – Fév'
  }
];

const villages = [
  { name: 'Dinguiraye', region: 'Haute-Guinée', tag: 'Désert', pop: '12 000 hab.' },
  { name: 'Fouta Djalon', region: 'Moyenne-Guinée', tag: 'Montagne', pop: '45 000 hab.' },
  { name: 'Kissidougou', region: 'Guinée Forestière', tag: 'Forêt', pop: '28 000 hab.' },
  { name: 'Labé', region: 'Moyenne-Guinée', tag: 'Plateau', pop: '65 000 hab.' },
  { name: 'Faranah', region: 'Haute-Guinée', tag: 'Rivière', pop: '30 000 hab.' },
  { name: 'Kankan', region: 'Haute-Guinée', tag: 'Artisanat', pop: '120 000 hab.' }
];

// ===== RENDER EXPERIENCES =====
function renderExperiences(filter = 'all') {
  const grid = document.getElementById('exp-grid');
  const filtered = filter === 'all' ? experiences : experiences.filter(e => e.tag === filter);
  grid.innerHTML = '';
  filtered.forEach((exp, i) => {
    const card = document.createElement('article');
    card.className = 'exp-card reveal';
    card.style.transitionDelay = (i * 0.08) + 's';
    // Use textContent for user-facing text to prevent XSS
    const imgWrap = document.createElement('div');
    imgWrap.className = 'exp-card-img-wrap';
    const img = document.createElement('img');
    img.className = 'exp-card-img';
    img.src = exp.img;
    img.alt = exp.title;
    img.loading = 'lazy';
    const tag = document.createElement('span');
    tag.className = 'exp-tag';
    tag.textContent = exp.tagLabel;
    imgWrap.append(img, tag);

    const body = document.createElement('div');
    body.className = 'exp-card-body';
    const title = document.createElement('h3');
    title.className = 'exp-card-title';
    title.textContent = exp.title;
    const desc = document.createElement('p');
    desc.className = 'exp-card-desc';
    desc.textContent = exp.desc;
    const meta = document.createElement('div');
    meta.className = 'exp-meta';
    const price = document.createElement('span');
    price.className = 'exp-price';
    price.textContent = exp.price;
    const duration = document.createElement('span');
    duration.className = 'exp-duration';
    duration.textContent = exp.duration;
    meta.append(price, duration);
    body.append(title, desc, meta);
    card.append(imgWrap, body);

    card.addEventListener('click', () => openModal(exp));
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Voir détails : ${exp.title}`);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(exp); } });
    grid.appendChild(card);
  });
  observeReveal();

  // Announce count to screen readers
  const count = filtered.length;
  const announce = document.getElementById('filter-announce') || (() => {
    const el = document.createElement('div');
    el.id = 'filter-announce';
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-atomic', 'true');
    el.className = 'sr-only';
    document.body.appendChild(el);
    return el;
  })();
  announce.textContent = `${count} expérience${count > 1 ? 's' : ''} affichée${count > 1 ? 's' : ''}`;
}

// ===== RENDER VILLAGES =====
function renderVillages() {
  const grid = document.getElementById('villages-grid');
  villages.forEach(v => {
    const el = document.createElement('div');
    el.className = 'village-pin';
    const name = document.createElement('div');
    name.className = 'village-name';
    name.textContent = '📍 ' + v.name;
    const region = document.createElement('div');
    region.className = 'village-region';
    region.textContent = `${v.region} · ${v.pop}`;
    const tagEl = document.createElement('span');
    tagEl.className = 'village-tag';
    tagEl.textContent = v.tag;
    el.append(name, region, tagEl);
    grid.appendChild(el);
  });
}

// ===== MODAL — with focus management =====
let _previousFocus = null;

function openModal(exp) {
  _previousFocus = document.activeElement;

  document.getElementById('modal-img').src = exp.img;
  document.getElementById('modal-img').alt = exp.title;
  document.getElementById('modal-tag').textContent = exp.tagLabel;
  document.getElementById('modal-title').textContent = exp.title;
  document.getElementById('modal-desc').textContent = exp.longDesc;

  const priceEl = document.getElementById('modal-price');
  priceEl.textContent = '';
  priceEl.appendChild(document.createTextNode(exp.price + ' '));
  const small = document.createElement('small');
  small.textContent = '/ personne';
  priceEl.appendChild(small);

  const details = document.getElementById('modal-details');
  details.innerHTML = '';
  [
    { label: 'Durée', val: exp.duration },
    { label: 'Groupe', val: exp.groupSize },
    { label: 'Difficulté', val: exp.difficulty },
    { label: 'Saison', val: exp.season }
  ].forEach(({ label, val }) => {
    const item = document.createElement('div');
    item.className = 'modal-detail-item';
    const lbl = document.createElement('div');
    lbl.className = 'modal-detail-label';
    lbl.textContent = label;
    const v = document.createElement('div');
    v.className = 'modal-detail-val';
    v.textContent = val;
    item.append(lbl, v);
    details.appendChild(item);
  });

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';

  // Move focus to close button
  requestAnimationFrame(() => {
    document.getElementById('modal-close').focus();
  });
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  // Return focus to triggering element
  if (_previousFocus) {
    _previousFocus.focus();
    _previousFocus = null;
  }
}

// Trap focus inside modal
document.getElementById('modal').addEventListener('keydown', e => {
  if (e.key !== 'Tab') return;
  const focusable = Array.from(
    document.getElementById('modal').querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
  );
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey) {
    if (document.activeElement === first) { e.preventDefault(); last.focus(); }
  } else {
    if (document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('modal-overlay').classList.contains('open')) {
    closeModal();
  }
});

// ===== FILTER =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active');
      b.removeAttribute('aria-pressed');
    });
    this.classList.add('active');
    this.setAttribute('aria-pressed', 'true');
    renderExperiences(this.dataset.filter);
  });
});

// ===== TESTIMONIALS SLIDER =====
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');

function goToSlide(n) {
  currentSlide = (n + slides.length) % slides.length;
  document.getElementById('test-track').style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((d, i) => {
    d.classList.toggle('active', i === currentSlide);
    // Update aria-current
    if (i === currentSlide) {
      d.setAttribute('aria-current', 'true');
    } else {
      d.removeAttribute('aria-current');
    }
  });
}

document.getElementById('next-btn').addEventListener('click', () => goToSlide(currentSlide + 1));
document.getElementById('prev-btn').addEventListener('click', () => goToSlide(currentSlide - 1));
dots.forEach(d => d.addEventListener('click', () => goToSlide(+d.dataset.idx)));

// Auto-advance — stored so it can be cleared
let sliderInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);

// Pause on hover / focus (better UX)
const sliderEl = document.querySelector('.testimonial-slider');
sliderEl.addEventListener('mouseenter', () => clearInterval(sliderInterval));
sliderEl.addEventListener('focusin', () => clearInterval(sliderInterval));
sliderEl.addEventListener('mouseleave', () => {
  sliderInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
});
sliderEl.addEventListener('focusout', e => {
  if (!sliderEl.contains(e.relatedTarget)) {
    sliderInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
  }
});

// ===== SCROLL HEADER =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.mobile-link').forEach(l => {
  l.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ===== ACTIVE NAV =====
const sections = document.querySelectorAll('section[id], section.stats-bar');
const navLinks = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));

// ===== SCROLL REVEAL =====
function observeReveal() {
  const reveals = document.querySelectorAll('.reveal:not(.visible)');
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => ro.observe(el));
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = +el.dataset.target;
    // Determine suffix from the label text
    const label = el.nextElementSibling?.textContent || '';
    const suffix = label.includes('%') ? '%' : (target >= 100 ? '+' : '');
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.round(current).toLocaleString('fr-FR') + (current >= target ? suffix : '');
    }, 22);
  });
}
const statsBar = document.querySelector('.stats-bar');
const statsObs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) { animateCounters(); statsObs.disconnect(); }
}, { threshold: 0.5 });
statsObs.observe(statsBar);

// ===== FORM VALIDATION =====
document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;
  const fields = [
    { id: 'prenom', group: 'fg-prenom', check: v => v.trim().length > 0 },
    { id: 'nom', group: 'fg-nom', check: v => v.trim().length > 0 },
    { id: 'email', group: 'fg-email', check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
    { id: 'experience', group: 'fg-experience', check: v => v !== '' },
    { id: 'date', group: 'fg-date', check: v => v !== '' }
  ];
  let firstError = null;
  fields.forEach(f => {
    const input = document.getElementById(f.id);
    const group = document.getElementById(f.group);
    const ok = f.check(input.value);
    group.classList.toggle('has-error', !ok);
    if (!ok) {
      valid = false;
      if (!firstError) firstError = input;
    }
  });
  if (!valid) {
    // Move focus to first error field
    firstError?.focus();
    return;
  }
  document.getElementById('booking-form').style.display = 'none';
  document.getElementById('success-msg').style.display = 'block';
  document.getElementById('success-msg').focus();
});

// Clear error on input
document.querySelectorAll('.form-group input, .form-group select').forEach(el => {
  el.addEventListener('input', () => el.closest('.form-group').classList.remove('has-error'));
});

// ===== INIT =====
renderExperiences();
renderVillages();
observeReveal();

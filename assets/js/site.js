/* ==========================================================================
   HCCW: shared site behaviour (header, footer, animations, modals)
   ========================================================================== */
(function () {
  const H = window.HCCW;

  /* ---------- Icons (stroke icons, 24x24) ---------- */
  const P = {
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    x: '<path d="M4 4l16 16M20 4 4 20"/>',
    xlogo: '<path d="M4 4h4.5L20 20h-4.5z"/><path d="M20 4l-6.6 7.5M4 20l6.6-7.5"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowUp: '<path d="M12 19V5M6 11l6-6 6 6"/>',
    arrowUpRight: '<path d="M7 17 17 7M8 7h9v9"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    chevronRight: '<path d="m9 6 6 6-6 6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/><path d="M3.2 12H8l1.5-3 3 6 1.5-3h6.8"/>',
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.6a1 1 0 0 0-.2-.6l-3.5-4.4A1 1 0 0 0 17.5 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    landmark: '<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2l8 5H4z"/>',
    scale: '<path d="m16 16 3-8 3 8c-.9.7-1.9 1-3 1s-2.1-.3-3-1zM2 16l3-8 3 8c-.9.7-1.9 1-3 1s-2.1-.3-3-1z"/><path d="M7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1"/>',
    book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
    gavel: '<path d="m14 13-8.5 8.5a2.1 2.1 0 0 1-3-3L11 10"/><path d="m16 16 6-6M8 8l6-6M9 7l8 8M21 11l-8-8"/>',
    mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8"/>',
    cap: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    fax: '<path d="M6 9V2h12v7"/><rect x="2" y="9" width="20" height="9" rx="2"/><path d="M6 14h12v8H6z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
    compass: '<circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3z"/>',
    nav: '<path d="m3 11 19-9-9 19-2-8z"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2.5"/><path d="M14 10h4M14 14h4"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    external: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
    filter: '<path d="M22 3H2l8 9.5V19l4 2v-8.5z"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.9-3.9a3 3 0 0 0-4.2 0l-.9.9a1 1 0 1 1-3-3l2.8-2.8a5.8 5.8 0 0 1 7.1-.9l.5.3a2 2 0 0 0 1.4.3L21 3"/><path d="m21 3 1 11h-2M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"/>'
  };
  const icon = (name, cls = '') => `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ''}</svg>`;
  H.icon = icon;

  /* ---------- Helpers ---------- */
  H.qs = (s, el = document) => el.querySelector(s);
  H.qsa = (s, el = document) => [...el.querySelectorAll(s)];
  H.param = (k) => new URLSearchParams(location.search).get(k);
  H.esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  H.atty = (slug) => H.attorneys.find((a) => a.slug === slug);
  H.area = (slug) => H.areas.find((a) => a.slug === slug);
  H.cat = (id) => H.categories.find((c) => c.id === id);
  H.photo = (slug) => `assets/img/attorneys/${slug}.jpg`;
  H.hasProfile = (slug) => !!H.profiles[slug];
  H.attyHref = (slug) => `attorney.html?a=${slug}`;

  const page = document.body.dataset.page || '';
  const transparent = document.body.dataset.header === 'transparent';
  const F = H.firm;

  /* ---------- Header ---------- */
  const navItems = [
    { id: 'firm', label: 'Our Firm', href: 'firm.html' },
    { id: 'practice', label: 'Practice Areas', href: 'practice-areas.html', mega: true },
    { id: 'attorneys', label: 'Attorneys', href: 'attorneys.html' },
    { id: 'locations', label: 'Locations', href: 'locations.html' },
    { id: 'news', label: 'Firm News', href: 'news.html' },
    { id: 'careers', label: 'Careers', href: 'careers.html' }
  ];

  const mega = `
    <div class="mega">
      <div class="mega-inner">
        <div class="mega-groups" role="tablist" aria-label="Practice groups">
          ${H.categories.map((c, i) => `
            <a class="mg-link ${i ? '' : 'active'}" href="practice-areas.html#${c.id}" data-cat="${c.id}" role="tab">
              <span>${c.name}</span><small>${c.areas.length}</small>
            </a>`).join('')}
          <a class="mg-all" href="practice-areas.html">View all 21 practice areas ${icon('arrow')}</a>
        </div>
        <div class="mega-areas">
          ${H.categories.map((c, i) => `
            <div class="mg-panel ${i ? '' : 'active'}" data-cat="${c.id}" role="tabpanel">
              <span class="mg-head">${c.name}</span>
              <p>${c.blurb}</p>
              <ul>${c.areas.map((s) => `<li><a href="practice-area.html?area=${s}">${H.area(s).title}${icon('arrow')}</a></li>`).join('')}</ul>
            </div>`).join('')}
        </div>
        <div class="mega-side">
          <span class="eyebrow light">21 Practice Areas</span>
          <h4>Not sure where your matter fits?</h4>
          <p>Tell us what happened. We’ll connect you with the right attorney.</p>
          <a class="btn btn-gold btn-sm" href="contact.html">Talk to our team ${icon('arrow', 'icon-arrow')}</a>
        </div>
      </div>
    </div>`;

  const header = `
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="progress-bar" aria-hidden="true"></div>
    <div class="utility">
      <div class="container">
        <div class="u-left">
          <a href="${F.phoneHref}">${icon('phone')} ${F.phone}</a>
          <span class="sep hide-sm"></span>
          <a class="hide-sm" href="${F.tollFreeHref}">Toll Free ${F.tollFree}</a>
        </div>
        <div class="u-right">
          <span>Richmond · Roanoke · DC Metro</span>
          <span class="sep"></span>
          <a href="${F.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon('linkedin')} LinkedIn</a>
        </div>
      </div>
    </div>
    <header class="site-header ${transparent ? 'transparent' : ''}">
      <div class="container nav-wrap">
        <a class="brand" href="index.html" aria-label="Harman Claytor Corrigan & Wellman home">
          <img src="assets/img/hccw-logo.svg" alt="HCCW Logo" width="230" height="50">
        </a>
        <nav class="main-nav" aria-label="Main">
          ${navItems.map((n) => `
            <div class="nav-item ${n.mega ? 'has-mega' : ''}">
              <a class="nav-link ${page === n.id ? 'active' : ''}" href="${n.href}" ${n.mega ? 'aria-haspopup="true" aria-expanded="false"' : ''}>${n.label}${n.mega ? icon('chevron') : ''}</a>
              ${n.mega ? mega : ''}
            </div>`).join('')}
          <a class="btn btn-gold btn-sm nav-cta" href="contact.html">Contact Us</a>
        </nav>
        <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">${icon('menu')}</button>
      </div>
    </header>
    <div class="mobile-nav" aria-hidden="true">
      <div class="mn-top">
        <img src="assets/img/hccw-logo.svg" alt="HCCW Logo">
        <button class="menu-toggle mn-close" style="display:grid" aria-label="Close menu">${icon('x')}</button>
      </div>
      <nav aria-label="Mobile">
        <a href="index.html">Home ${icon('arrow')}</a>
        ${navItems.map((n) => `<a href="${n.href}">${n.label} ${icon('arrow')}</a>`).join('')}
        <a href="contact.html">Contact Us ${icon('arrow')}</a>
      </nav>
      <div class="mn-contact">
        <a href="${F.phoneHref}">${icon('phone')} ${F.phone}</a>
        <a href="${F.tollFreeHref}">${icon('phone')} Toll Free ${F.tollFree}</a>
        <a href="${F.linkedin}" target="_blank" rel="noopener">${icon('linkedin')} LinkedIn</a>
      </div>
    </div>`;

  /* ---------- Footer ---------- */
  const footer = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="assets/img/hccw-logo.svg" alt="HCCW Logo">
            <p>A civil litigation law firm. It’s all we do. Serving clients in state and federal courts throughout Virginia, Washington, D.C. and the Mid-Atlantic since 1991.</p>
            <div class="socials">
              <a href="${F.linkedin}" target="_blank" rel="noopener" aria-label="HCCW on LinkedIn">${icon('linkedin')}</a>
              <a href="mailto:${F.careersEmail}" aria-label="Email careers">${icon('mail')}</a>
            </div>
          </div>
          <div>
            <h5>Explore</h5>
            <ul class="footer-links">
              <li><a href="firm.html">Our Firm</a></li>
              <li><a href="practice-areas.html">Practice Areas</a></li>
              <li><a href="attorneys.html">Attorneys</a></li>
              <li><a href="news.html">Firm News</a></li>
              <li><a href="locations.html">Locations</a></li>
              <li><a href="careers.html">Careers</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h5>Featured Practices</h5>
            <ul class="footer-links">
              ${['medical-malpractice-litigation', 'transportation-and-trucking-litigation', 'products-liability', 'insurance-coverage', 'appellate-practice', 'employment-law'].map((s) => `<li><a href="practice-area.html?area=${s}">${H.area(s).title}</a></li>`).join('')}
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <div class="footer-contact">
              <a href="${F.phoneHref}">${icon('phone')} <span>Phone: ${F.phone}</span></a>
              <a href="${F.tollFreeHref}">${icon('phone')} <span>Toll Free: ${F.tollFree}</span></a>
              <div>${icon('fax')} <span>Fax: ${F.fax}</span></div>
              <div>${icon('mail')} <span>${F.legal}<br>${F.mailing.join('<br>')}</span></div>
            </div>
          </div>
        </div>
        <div class="footer-offices">
          ${H.offices.map((o) => `<a href="locations.html#${o.id}"><b>${o.label}</b>${o.street}<br>${o.cityLine}</a>`).join('')}
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© ${new Date().getFullYear()} ${F.legal} All rights reserved.</span>
        <div class="fb-right">
          <a class="harmonie" href="${F.harmonie}" target="_blank" rel="noopener" aria-label="Harmonie Group"><span>Member of</span><img src="assets/img/harmonie-group.png" alt="Harmonie Group logo"></a>
        </div>
      </div>
    </footer>
    <button class="to-top" aria-label="Back to top">${icon('arrowUp')}</button>
    <div class="toast-wrap" aria-live="polite"></div>
    <div class="modal" id="modal" aria-hidden="true">
      <div class="modal-backdrop" data-close></div>
      <div class="modal-dialog" role="dialog" aria-modal="true">
        <button class="modal-close" data-close aria-label="Close">${icon('x')}</button>
        <div class="modal-content"></div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer);

  /* Hydrate inline icons: <i data-icon="name"></i> */
  H.hydrateIcons = (root = document) => H.qsa('[data-icon]', root).forEach((el) => { el.outerHTML = icon(el.dataset.icon, el.className || ''); });
  H.hydrateIcons();

  /* ---------- Header behaviour ---------- */
  const hdr = H.qs('.site-header');
  const bar = H.qs('.progress-bar');
  const toTop = H.qs('.to-top');
  const onScroll = () => {
    const y = window.scrollY;
    hdr.classList.toggle('scrolled', y > 40);
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    toTop.classList.toggle('show', y > 700);
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  // Mega menu: hover with intent delay + keyboard
  H.qsa('.nav-item.has-mega').forEach((item) => {
    let t;
    const link = H.qs('.nav-link', item);
    const open = () => { clearTimeout(t); item.classList.add('open'); link.setAttribute('aria-expanded', 'true'); };
    const close = () => { t = setTimeout(() => { item.classList.remove('open'); link.setAttribute('aria-expanded', 'false'); }, 260); };
    item.addEventListener('mouseenter', () => { clearTimeout(t); t = setTimeout(open, 80); });
    // Switch group on hover/focus in the left column
    const activate = (id) => {
      H.qsa('.mg-link', item).forEach((l) => l.classList.toggle('active', l.dataset.cat === id));
      H.qsa('.mg-panel', item).forEach((p) => p.classList.toggle('active', p.dataset.cat === id));
    };
    H.qsa('.mg-link', item).forEach((l) => {
      l.addEventListener('mouseenter', () => activate(l.dataset.cat));
      l.addEventListener('focus', () => activate(l.dataset.cat));
    });
    item.addEventListener('mouseleave', () => { clearTimeout(t); close(); });
    item.addEventListener('focusin', open);
    item.addEventListener('focusout', (e) => { if (!item.contains(e.relatedTarget)) close(); });
    item.addEventListener('keydown', (e) => { if (e.key === 'Escape') { item.classList.remove('open'); link.focus(); } });
  });

  // Mobile nav
  const mnav = H.qs('.mobile-nav');
  const setMobile = (on) => { mnav.classList.toggle('open', on); mnav.setAttribute('aria-hidden', !on); document.body.style.overflow = on ? 'hidden' : ''; };
  H.qs('.site-header .menu-toggle').addEventListener('click', () => setMobile(true));
  H.qs('.mn-close').addEventListener('click', () => setMobile(false));

  /* ---------- Reveal on scroll ---------- */
  H.observeReveals = (root = document) => {
    const els = H.qsa('.reveal:not(.in), .img-reveal:not(.in)', root);
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((e) => io.observe(e));
  };
  // Stagger children: [data-stagger] > .reveal
  H.qsa('[data-stagger]').forEach((wrap) => {
    const step = parseFloat(wrap.dataset.stagger) || 0.08;
    H.qsa(':scope > .reveal', wrap).forEach((el, i) => el.style.setProperty('--d', (i * step).toFixed(2) + 's'));
  });
  H.observeReveals();

  /* ---------- Count-up numbers ---------- */
  const counters = H.qsa('[data-count]');
  if (counters.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target; io.unobserve(el);
        const end = parseFloat(el.dataset.count); const dur = 1800; const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min((now - t0) / dur, 1); const e = 1 - Math.pow(1 - p, 4);
          const from = parseFloat(el.dataset.from || 0);
          const v = Math.round(from + (end - from) * e);
          el.textContent = 'plain' in el.dataset ? v : v.toLocaleString();
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    counters.forEach((c) => io.observe(c));
  }

  /* ---------- Toasts ---------- */
  H.toast = (msg, ic = 'info') => {
    const wrap = H.qs('.toast-wrap');
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = `${icon(ic)}<div>${msg}</div>`;
    wrap.appendChild(el);
    setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 400); }, 4200);
  };

  /* ---------- Modal ---------- */
  const modal = H.qs('#modal');
  const mContent = H.qs('.modal-content', modal);
  const mDialog = H.qs('.modal-dialog', modal);
  let lastFocus = null;
  H.openModal = (html, opts = {}) => {
    lastFocus = document.activeElement;
    mContent.innerHTML = html;
    mDialog.style.width = opts.width ? `min(${opts.width}, 100%)` : '';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    mDialog.scrollTop = 0;
    setTimeout(() => H.qs('.modal-close', modal).focus(), 50);
  };
  H.closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  };
  modal.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) H.closeModal(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) H.closeModal(); });

  /* ---------- Attorney click handler (demo) ---------- */
  H.featured = Object.keys(H.profiles);
  H.attorneyDemo = (slug) => {
    const a = H.atty(slug);
    if (!a) return;
    if (H.hasProfile(slug)) { location.href = H.attyHref(slug); return; }
    const picks = H.featured.map((s) => H.atty(s)).map((f) => `
      <a href="${H.attyHref(f.slug)}"><img src="${H.photo(f.slug)}" alt=""><span><b>${f.name}</b><span>${f.title} · ${f.loc}</span></span></a>`).join('');
    H.openModal(`
      <div class="demo-modal">
        <div class="dm-photo"><img src="${H.photo(a.slug)}" alt="${H.esc(a.name)}"></div>
        <div class="dm-body">
          <span class="eyebrow">${H.esc(a.title)}${a.loc ? ' · ' + a.loc : ''}</span>
          <h3>${H.esc(a.name)}</h3>
          ${a.areas.length ? `<div class="tag-list" style="margin-top:12px">${a.areas.slice(0, 4).map((s) => `<span class="tag">${H.area(s)?.title || s}</span>`).join('')}</div>` : ''}
          <div class="demo-note">${icon('info')}<div><b>This is a demo.</b> Full biographies are included for the first three attorneys only. Have a look at one of these:</div></div>
          <div class="demo-picks">${picks}</div>
        </div>
      </div>`, { width: '780px' });
  };
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-atty]');
    if (!t) return;
    e.preventDefault();
    H.attorneyDemo(t.dataset.atty);
  });

  /* ---------- Page transitions ---------- */
  const fade = document.createElement('div');
  fade.className = 'page-fade';
  document.body.appendChild(fade);
  setTimeout(() => fade.classList.add('gone'), 30);
  addEventListener('pageshow', (e) => { if (e.persisted) fade.classList.remove('leaving'); fade.classList.add('gone'); });
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || /^https?:/.test(href)) return;
    const url = new URL(href, location.href);
    if (url.pathname === location.pathname && url.hash) return;
    e.preventDefault();
    fade.classList.remove('gone'); fade.classList.add('leaving');
    setTimeout(() => { location.href = href; }, 300);
  });

  /* Demo-only links */
  document.addEventListener('click', (e) => {
    const d = e.target.closest('[data-demo]');
    if (!d) return;
    e.preventDefault();
    H.toast(d.dataset.demo || 'This is a demo. That feature is not wired up yet.');
  });

  /* ---------- Custom dropdowns (replace native <select> visuals) ---------- */
  const valueDesc = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value');
  let openDD = null;
  const closeDD = (dd) => {
    if (!dd) return;
    dd.classList.remove('open');
    H.qs('.dd-trigger', dd).setAttribute('aria-expanded', 'false');
    if (openDD === dd) openDD = null;
  };
  H.enhanceSelects = (root = document) => {
    H.qsa('.select select, .field select', root).forEach((sel) => {
      if (sel.dataset.dd) return;
      sel.dataset.dd = '1';
      let wrap = sel.parentElement;
      // A <label> wrapper would forward clicks to the hidden select; swap it for a div
      if (wrap.tagName === 'LABEL' && wrap.classList.contains('select')) {
        const div = document.createElement('div');
        div.className = wrap.className; if (wrap.id) div.id = wrap.id;
        while (wrap.firstChild) div.appendChild(wrap.firstChild);
        wrap.replaceWith(div); wrap = div;
      }
      H.qsa(':scope > svg.icon', wrap).forEach((s) => s.remove());
      const variant = wrap.classList.contains('field') ? 'dd-field' : 'dd-pill';
      const opts = [...sel.options];
      const parse = (t) => { const m = t.match(/^(.*?)\s*\((\d+)\)$/); return m ? { label: m[1], count: m[2] } : { label: t, count: '' }; };
      const lid = 'dd-' + Math.random().toString(36).slice(2, 8);
      const dd = document.createElement('div');
      dd.className = 'dd ' + variant;
      dd.innerHTML = `
        <button type="button" class="dd-trigger" aria-haspopup="listbox" aria-expanded="false" aria-controls="${lid}">
          <span class="dd-label"></span>${icon('chevron', 'dd-chev')}
        </button>
        <div class="dd-panel">
          ${opts.length > 10 ? `<div class="dd-search">${icon('search')}<input type="text" placeholder="Type to filter" aria-label="Filter options"></div>` : ''}
          <ul class="dd-list" role="listbox" id="${lid}">
            ${opts.map((o, i) => { const p = parse(o.text); return `<li role="option" class="dd-opt" data-i="${i}" tabindex="-1"><span>${H.esc(p.label)}</span>${p.count ? `<span class="dd-count">${p.count}</span>` : ''}${icon('check', 'dd-tick')}</li>`; }).join('')}
          </ul>
        </div>`;
      sel.after(dd);
      sel.classList.add('dd-native');
      sel.setAttribute('tabindex', '-1');
      sel.setAttribute('aria-hidden', 'true');
      const trigger = H.qs('.dd-trigger', dd);
      const label = H.qs('.dd-label', dd);
      const items = H.qsa('.dd-opt', dd);
      const search = H.qs('.dd-search input', dd);
      const aria = sel.closest('.select, .field')?.querySelector('.sr-only, label')?.textContent;
      if (aria) trigger.setAttribute('aria-label', aria.trim());

      const sync = () => {
        const idx = sel.selectedIndex < 0 ? 0 : sel.selectedIndex;
        label.textContent = parse(opts[idx].text).label;
        items.forEach((li, i) => { li.classList.toggle('selected', i === idx); li.setAttribute('aria-selected', i === idx); });
        dd.classList.toggle('has-value', !!sel.value && idx !== 0);
      };
      Object.defineProperty(sel, 'value', {
        configurable: true,
        get() { return valueDesc.get.call(this); },
        set(v) { valueDesc.set.call(this, v); sync(); }
      });
      sel.addEventListener('change', sync);
      sync();

      const visible = () => items.filter((li) => !li.hidden);
      const focusItem = (li) => { if (li) { li.focus(); li.scrollIntoView({ block: 'nearest' }); } };
      const open = () => {
        if (openDD && openDD !== dd) closeDD(openDD);
        dd.classList.add('open'); openDD = dd;
        trigger.setAttribute('aria-expanded', 'true');
        // Flip upward if there is not enough room below
        const r = trigger.getBoundingClientRect();
        dd.classList.toggle('up', innerHeight - r.bottom < 300 && r.top > 340);
        if (search) {
          search.value = ''; items.forEach((li) => { li.hidden = false; });
          const tryFocus = (n) => { search.focus(); if (document.activeElement !== search && n) setTimeout(() => tryFocus(n - 1), 40); };
          tryFocus(5);
        }
        else focusItem(H.qs('.dd-opt.selected', dd) || items[0]);
      };
      const choose = (li) => {
        sel.selectedIndex = +li.dataset.i; sync();
        sel.dispatchEvent(new Event('change', { bubbles: true }));
        closeDD(dd); trigger.focus();
      };
      trigger.addEventListener('click', () => (dd.classList.contains('open') ? closeDD(dd) : open()));
      trigger.addEventListener('keydown', (e) => { if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); open(); } });
      items.forEach((li) => li.addEventListener('click', () => choose(li)));
      dd.addEventListener('keydown', (e) => {
        const list = visible(); const cur = list.indexOf(document.activeElement);
        if (e.key === 'Escape') { closeDD(dd); trigger.focus(); }
        else if (e.key === 'ArrowDown') { e.preventDefault(); focusItem(list[Math.min(cur + 1, list.length - 1)] || list[0]); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); if (cur <= 0 && search) search.focus(); else focusItem(list[Math.max(cur - 1, 0)]); }
        else if ((e.key === 'Enter' || e.key === ' ') && document.activeElement.classList.contains('dd-opt')) { e.preventDefault(); choose(document.activeElement); }
        else if (e.key === 'Enter' && document.activeElement === search) {
          e.preventDefault();
          const best = search.value.trim() ? list.find((li) => li.dataset.i !== '0') : list[0];
          if (best) choose(best);
        }
        else if (e.key === 'Tab') closeDD(dd);
      });
      if (search) search.addEventListener('input', () => {
        const q = search.value.trim().toLowerCase();
        items.forEach((li, i) => { li.hidden = i !== 0 && !!q && !li.textContent.toLowerCase().includes(q); });
      });
    });
  };
  document.addEventListener('click', (e) => { if (openDD && !openDD.contains(e.target)) closeDD(openDD); });
  H.enhanceSelects();
})();

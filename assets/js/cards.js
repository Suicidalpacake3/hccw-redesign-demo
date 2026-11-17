/* Shared card templates (attorneys, news) */
(function () {
  const H = window.HCCW;

  H.attyCard = (a, extraClass = '') => {
    const full = !!H.profiles[a.slug];
    const roleCls = a.title === 'Partner' ? 'partner' : '';
    return `
      <a class="atty-card reveal ${extraClass}" href="attorney.html?a=${a.slug}" data-atty="${a.slug}" data-slug="${a.slug}" aria-label="${a.name}, ${a.title}">
        <div class="ap-photo">
          <span class="role-badge ${roleCls}">${a.title}</span>
          ${full ? '<span class="full-badge">Full bio</span>' : ''}
          <img src="assets/img/attorneys/${a.slug}.jpg" alt="${a.name}" loading="lazy">
          <span class="ap-hover">${full ? 'View full profile' : 'Quick view'} <i data-icon="arrow"></i></span>
        </div>
        <div class="ap-body">
          <h3>${a.name}</h3>
          <div class="ap-meta">${a.loc ? `<i data-icon="pin"></i><span>${a.loc}</span>` : '<span>Retired</span>'}${a.areas.length ? `<span class="dot"></span><span>${a.areas.length} practice ${a.areas.length === 1 ? 'area' : 'areas'}</span>` : ''}</div>
        </div>
      </a>`;
  };

  H.newsCard = (n) => {
    const p = n.person ? H.attorneys.find((a) => a.slug === n.person) : null;
    const media = p
      ? `<div class="nc-img portrait"><img src="assets/img/attorneys/${p.slug}.jpg" alt="${p.name}" loading="lazy"><div class="nc-welcome"><small>${n.cat === 'Spotlight' ? 'Congratulations' : 'Welcome'}</small><b>${p.name}</b></div></div>`
      : `<div class="nc-img"><img src="${n.img}" alt="" loading="lazy"></div>`;
    return `<a class="news-card reveal" href="news.html?open=${n.id}" data-news="${n.id}">${media}
      <div class="nc-body"><div class="news-meta"><span class="cat">${n.cat}</span><span>${n.date}</span></div>
      <h3>${n.title}</h3><p>${n.excerpt}</p><span class="link-arrow">Read more <i data-icon="arrow"></i></span></div></a>`;
  };
})();

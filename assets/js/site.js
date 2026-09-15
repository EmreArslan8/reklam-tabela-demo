/* AKS Reklam & Mimari — site etkileşimleri
   Sade ve bağımlılıksız: mobil menü, scroll reveal, proje filtresi, form geri bildirimi. */
(function () {
  'use strict';

  /* --- Mobil menü --- */
  var toggle = document.getElementById('navToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('#nav a').forEach(function (a) {
      a.addEventListener('click', function () { document.body.classList.remove('nav-open'); });
    });
  }

  /* --- Scroll ile beliren bloklar --- */
  var items = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && items.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var i = Number(en.target.dataset.reveal) || 0;
        en.target.style.transitionDelay = (i * 80) + 'ms';
        en.target.classList.add('is-in');
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* --- Proje filtresi --- */
  var filters = document.querySelectorAll('.filters button');
  var cards = document.querySelectorAll('[data-cat]');
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cat = btn.dataset.filter;
      filters.forEach(function (b) { b.classList.toggle('is-active', b === btn); });
      cards.forEach(function (c) {
        var show = cat === 'all' || c.dataset.cat === cat;
        c.style.display = show ? '' : 'none';
      });
    });
  });

  /* --- İletişim formu (demo: sunucuya gitmez) --- */
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var ok = document.getElementById('formOk');
      ok.classList.add('is-visible');
      ok.textContent = 'Teşekkürler, talebiniz alındı. (Demo — PHP sürümünde mesaj panele düşecek.)';
      form.reset();
      ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* --- Yıl bilgisi --- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();

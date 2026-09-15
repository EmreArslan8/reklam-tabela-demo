/* AKS Yönetim Paneli — arayüz etkileşimleri (demo)
   Veri kaydetmez; iş alındığında bu ekranların arkasına PHP + veritabanı bağlanacak. */
(function () {
  'use strict';

  /* --- Mobil menü --- */
  var toggle = document.getElementById('sideToggle');
  var scrim = document.getElementById('sideScrim');
  function closeSide() { document.body.classList.remove('side-open'); }
  if (toggle) toggle.addEventListener('click', function () { document.body.classList.toggle('side-open'); });
  if (scrim) scrim.addEventListener('click', closeSide);

  /* --- Sekmeler --- */
  document.querySelectorAll('.tabs').forEach(function (tabs) {
    tabs.addEventListener('click', function (ev) {
      var btn = ev.target.closest('button');
      if (!btn) return;
      tabs.querySelectorAll('button').forEach(function (b) { b.classList.toggle('is-active', b === btn); });
      var panelName = btn.dataset.tab;
      if (!panelName) return;
      document.querySelectorAll('[data-panel]').forEach(function (p) {
        p.hidden = p.dataset.panel !== panelName;
      });
    });
  });

  /* --- Tablo içi arama --- */
  document.querySelectorAll('[data-table-search]').forEach(function (input) {
    input.addEventListener('input', function () {
      var q = input.value.toLocaleLowerCase('tr');
      var rows = document.querySelectorAll(input.dataset.tableSearch + ' tbody tr');
      rows.forEach(function (tr) {
        tr.style.display = tr.textContent.toLocaleLowerCase('tr').indexOf(q) > -1 ? '' : 'none';
      });
    });
  });

  /* --- Tümünü seç --- */
  document.querySelectorAll('[data-check-all]').forEach(function (master) {
    master.addEventListener('change', function () {
      document.querySelectorAll(master.dataset.checkAll + ' tbody input[type=checkbox]')
        .forEach(function (cb) { cb.checked = master.checked; });
    });
  });

  /* --- Demo kaydet geri bildirimi --- */
  document.querySelectorAll('form[data-demo-form]').forEach(function (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      flash('Değişiklikler kaydedildi. (Demo — veri tabanına yazılmaz.)');
    });
  });

  document.querySelectorAll('[data-demo-action]').forEach(function (el) {
    el.addEventListener('click', function (ev) {
      ev.preventDefault();
      flash(el.dataset.demoAction + ' — demo sürümde işlem yapılmaz.');
    });
  });

  function flash(text) {
    var box = document.getElementById('flash');
    if (!box) {
      box = document.createElement('div');
      box.id = 'flash';
      box.style.cssText = 'position:fixed;left:50%;bottom:28px;transform:translateX(-50%);z-index:60;' +
        'background:#14161B;color:#fff;padding:13px 22px;border-radius:4px;font-size:14px;' +
        'box-shadow:0 12px 40px rgba(0,0,0,.35);max-width:90vw;text-align:center';
      document.body.appendChild(box);
    }
    box.textContent = text;
    box.style.opacity = '1';
    clearTimeout(box._t);
    box._t = setTimeout(function () { box.style.opacity = '0'; box.style.transition = 'opacity .4s'; }, 2600);
  }

  /* --- Giriş ekranı --- */
  var login = document.getElementById('loginForm');
  if (login) {
    login.addEventListener('submit', function (ev) {
      ev.preventDefault();
      window.location.href = 'dashboard.html';
    });
  }

  /* --- SEO karakter sayacı --- */
  document.querySelectorAll('[data-counter]').forEach(function (input) {
    var out = document.querySelector(input.dataset.counter);
    var max = Number(input.dataset.max) || 160;
    function upd() {
      if (!out) return;
      out.textContent = input.value.length + ' / ' + max + ' karakter';
      out.style.color = input.value.length > max ? '#C0341B' : '';
    }
    input.addEventListener('input', upd);
    upd();
  });
})();

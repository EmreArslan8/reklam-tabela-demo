import { PROJECTS, CATEGORIES, img, e } from '../data.js';

export default {
  file: 'projeler.html',
  title: 'Projeler',
  desc: 'Tamamladığımız tabela, mağaza, mimari proje, araç giydirme ve fuar standı işlerinden seçmeler.',
  body: `
  <section class="page-head">
    <div class="wrap">
      <p class="crumb"><a href="index.html">Ana Sayfa</a> / Projeler</p>
      <h1>Projeler</h1>
      <p class="lead" style="margin-top:26px">640’tan fazla tamamlanmış işin içinden seçtiğimiz referanslar. Kategoriye göre filtreleyebilirsiniz.</p>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="filters" data-reveal="0">
        <button class="is-active" data-filter="all">Tümü</button>
        ${Object.entries(CATEGORIES).map(([k, v]) => `<button data-filter="${k}">${e(v)}</button>`).join('\n        ')}
      </div>

      <div class="proj-grid">
        ${PROJECTS.map((p, i) => `<a class="proj${i % 5 === 0 ? ' proj--wide' : ''}" href="proje-detay.html" data-cat="${p.cat}" data-reveal="${i % 3}">
          <div class="shot"><img src="${img(p.seed, 1200, 800)}" alt="${e(p.title)} — ${e(CATEGORIES[p.cat])} uygulaması" loading="lazy"></div>
          <div class="proj__meta">
            <h3>${e(p.title)}</h3>
            <span>${e(CATEGORIES[p.cat])} · ${p.year}</span>
          </div>
        </a>`).join('\n        ')}
      </div>
    </div>
  </section>`,
};

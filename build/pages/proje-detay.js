import { PROJECTS, CATEGORIES, img, e } from '../data.js';

const p = PROJECTS[0]; // Demo: Lumen AVM Totem. PHP sürümünde ?slug= ile dinamik gelecek.
const others = PROJECTS.slice(1, 4);

export default {
  file: 'proje-detay.html',
  title: p.title,
  desc: p.desc,
  body: `
  <section class="page-head">
    <div class="wrap">
      <p class="crumb"><a href="index.html">Ana Sayfa</a> / <a href="projeler.html">Projeler</a> / ${e(p.title)}</p>
      <h1>${e(p.title)}</h1>
      <p class="lead" style="margin-top:26px">${e(p.desc)}</p>
    </div>
  </section>

  <section style="padding-bottom:0">
    <div class="wrap">
      <div class="shot" style="aspect-ratio:16/9" data-reveal="0">
        <img src="${img(p.seed + '-main', 1800, 1010)}" alt="${e(p.title)} genel görünüm" loading="lazy">
      </div>
    </div>
  </section>

  <section>
    <div class="wrap side-layout">
      <div class="prose" data-reveal="0">
        <p class="eyebrow">Proje hikâyesi</p>
        <p>İşveren, otoyoldan gelen araç trafiğinin AVM girişini geç fark ettiğini belirtti. İhtiyaç, 250 metre mesafeden okunabilen ve gece de aynı netlikte görünen bir yönlendirme elemanıydı.</p>
        <p>Cephe ve zemin etüdü sonrası 12 metrelik çift yüzlü totem tasarlandı. Alüminyum karkas statik hesabı yapıldı, rüzgâr yüküne göre temel ölçüsü belirlendi. Gövde kompozit panelle kaplandı, logo bölümü ışıklı pleksi olarak üretildi.</p>
        <blockquote>“Montaj gece trafiğe kapanan iki saatlik pencerede tamamlandı; AVM tek gün bile kapanmadı.”</blockquote>
        <h2>Yapılan işler</h2>
        <ul>
          <li>Zemin etüdü ve statik hesap</li>
          <li>Alüminyum karkas üretimi ve galvaniz koruma</li>
          <li>Kompozit panel kaplama ve boya</li>
          <li>Işıklı pleksi logo ve LED modül montajı</li>
          <li>Elektrik altyapısı, pano ve zaman rölesi</li>
          <li>Vinçli gece montajı</li>
        </ul>
      </div>

      <aside data-reveal="1" class="side-card">
        <p class="eyebrow">Künye</p>
        <table class="spec-table">
          <tbody>
            <tr><th>İşveren</th><td>${e(p.client)}</td></tr>
            <tr><th>Kategori</th><td>${e(CATEGORIES[p.cat])}</td></tr>
            <tr><th>Konum</th><td>${e(p.loc)}</td></tr>
            <tr><th>Ölçek</th><td>${e(p.area)}</td></tr>
            <tr><th>Süre</th><td>${e(p.dur)}</td></tr>
            <tr><th>Yıl</th><td>${p.year}</td></tr>
          </tbody>
        </table>
        <a class="btn btn--signal" href="iletisim.html" style="width:100%;justify-content:center;margin-top:28px">Benzer Proje İçin Teklif</a>
      </aside>
    </div>
  </section>

  <section style="padding-top:0">
    <div class="wrap">
      <div class="sec-head" data-reveal="0"><div><p class="eyebrow">Galeri</p><h2>Uygulama kareleri</h2></div></div>
      <div class="gallery">
        ${[1, 2, 3, 4, 5, 6].map((n, i) => `<div class="shot" data-reveal="${i % 3}"><img src="${img(p.seed + '-g' + n, 900, 675)}" alt="${e(p.title)} uygulama fotoğrafı ${n}" loading="lazy"></div>`).join('\n        ')}
      </div>
    </div>
  </section>

  <section style="padding-top:0">
    <div class="wrap">
      <div class="sec-head" data-reveal="0">
        <div><p class="eyebrow">Devamı</p><h2>Diğer projeler</h2></div>
        <a class="btn" href="projeler.html">Tümü</a>
      </div>
      <div class="proj-grid">
        ${others.map((o, i) => `<a class="proj" href="proje-detay.html" data-reveal="${i}">
          <div class="shot"><img src="${img(o.seed, 1000, 750)}" alt="${e(o.title)}" loading="lazy"></div>
          <div class="proj__meta"><h3>${e(o.title)}</h3><span>${e(CATEGORIES[o.cat])} · ${o.year}</span></div>
        </a>`).join('\n        ')}
      </div>
    </div>
  </section>`,
};

import { SERVICES, PROJECTS, CATEGORIES, PROCESS, img, e, pad } from '../data.js';

const s = SERVICES[0]; // Demo: Tabela Üretimi. PHP sürümünde ?slug= ile dinamik gelecek.

export default {
  file: 'hizmet-detay.html',
  title: s.title,
  desc: s.short,
  body: `
  <section class="page-head">
    <div class="wrap">
      <p class="crumb"><a href="index.html">Ana Sayfa</a> / <a href="hizmetler.html">Hizmetler</a> / ${e(s.title)}</p>
      <h1>${e(s.title)}</h1>
      <p class="lead" style="margin-top:26px">${e(s.short)}</p>
    </div>
  </section>

  <section style="padding-bottom:0">
    <div class="wrap">
      <div class="shot" style="aspect-ratio:21/9" data-reveal="0">
        <img src="${img(s.seed + '-hero', 1800, 780)}" alt="${e(s.title)} uygulama örneği" loading="lazy">
      </div>
    </div>
  </section>

  <section>
    <div class="wrap side-layout">
      <div class="prose" data-reveal="0">
        <p class="eyebrow">Hizmet detayı</p>
        ${s.body.map((p) => `<p>${e(p)}</p>`).join('\n        ')}

        <h2>Kapsam</h2>
        <ul>${s.items.map((it) => `<li>${e(it)}</li>`).join('')}</ul>

        <h2>Kullandığımız malzemeler</h2>
        <p>Alüminyum kompozit, pleksiglas, paslanmaz çelik, galvaniz sac, polikarbon ve LED modüller. Malzeme seçimi; cephe tipi, bütçe ve beklenen ömre göre birlikte belirlenir.</p>

        <h2>Süreç</h2>
        <ul>${PROCESS.map(([t, d]) => `<li><strong style="color:var(--paper)">${e(t)}:</strong> ${e(d)}</li>`).join('')}</ul>

        <h2>Sık sorulanlar</h2>
        <h3>Teslim süresi ne kadar?</h3>
        <p>Standart bir cephe tabelası, onaydan sonra ortalama 7–10 iş günü içinde üretilip monte edilir. Totem ve cephe giydirme işlerinde süre proje ölçeğine göre değişir.</p>
        <h3>Belediye iznini siz mi alıyorsunuz?</h3>
        <p>Evet. Başvuru dosyasını hazırlar, ölçü ve görsellerle birlikte ilgili belediyeye sunarız.</p>
        <h3>Garanti kapsamı nedir?</h3>
        <p>Işıklı ürünlerde elektrik aksamı ve işçilik 2 yıl garantilidir; arıza bildirimine 48 saat içinde müdahale ederiz.</p>
      </div>

      <aside data-reveal="1" class="side-card">
        <p class="eyebrow">Hızlı teklif</p>
        <h3 style="margin-bottom:16px">Ölçü ve keşif ücretsiz</h3>
        <p style="color:var(--paper-dim);font-size:15px">Cephenizin fotoğrafını gönderin, aynı gün içinde ön fiyat verelim.</p>
        <a class="btn btn--signal" href="iletisim.html" style="width:100%;justify-content:center;margin-top:8px">Teklif Al</a>
        <h4 style="font-family:var(--font-mono);font-size:13px;letter-spacing:.22em;color:var(--signal);margin:32px 0 14px">DİĞER HİZMETLER</h4>
        <ul>
          ${SERVICES.slice(1).map((o) => `<li style="padding:10px 0;border-top:1px solid var(--line)"><a href="hizmet-detay.html" style="color:var(--paper-dim)">${e(o.title)}</a></li>`).join('\n          ')}
        </ul>
      </aside>
    </div>
  </section>

  <section style="padding-top:0">
    <div class="wrap">
      <div class="sec-head" data-reveal="0">
        <div><p class="eyebrow">Bu hizmetten</p><h2>Örnek projeler</h2></div>
        <a class="btn" href="projeler.html">Tüm Projeler</a>
      </div>
      <div class="proj-grid">
        ${PROJECTS.filter((p) => p.cat === 'tabela').map((p, i) => `<a class="proj" href="proje-detay.html" data-reveal="${i}">
          <div class="shot"><img src="${img(p.seed, 1000, 750)}" alt="${e(p.title)}" loading="lazy"></div>
          <div class="proj__meta"><h3>${e(p.title)}</h3><span>${e(CATEGORIES[p.cat])} · ${p.year}</span></div>
        </a>`).join('\n        ')}
      </div>
    </div>
  </section>`,
};

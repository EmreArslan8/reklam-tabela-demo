import { STATS, img, e, pad } from '../data.js';

const MACHINES = [
  ['CNC Router', '3.000 × 1.500 mm çalışma alanı; kompozit, pleksi ve ahşap kesim.'],
  ['Lazer Kesim', 'Metal ve pleksi üzerinde hassas kesim ve gravür.'],
  ['UV Baskı', '5 m ek yersiz baskı, dış mekân dayanımlı mürekkep.'],
  ['Abkant Büküm', 'Alüminyum ve paslanmaz kutu harf bükümü.'],
  ['Boya Kabini', 'Elektrostatik toz boya ve fırınlama.'],
  ['Sepetli Araç', '24 m erişimli montaj aracı ve sertifikalı ekip.'],
];

const TIMELINE = [
  ['2008', 'İkitelli’de 120 m²’lik atölyede tabela üretimiyle kuruluş.'],
  ['2013', 'Geniş format dijital baskı yatırımı; araç giydirme hizmetinin eklenmesi.'],
  ['2017', 'Mimar ve iç mimardan oluşan proje ekibinin kurulması.'],
  ['2021', '1.400 m²’lik yeni atölyeye taşınma, CNC ve büküm hattının kurulması.'],
  ['2025', '640’ıncı projenin teslimi; Türkiye geneli montaj ağının tamamlanması.'],
];

export default {
  file: 'hakkimizda.html',
  title: 'Kurumsal',
  desc: 'AKS Reklam & Mimari hakkında: 2008’den bu yana tabela üretimi, dijital baskı ve mimari proje alanında 640’tan fazla tamamlanmış iş.',
  body: `
  <section class="page-head">
    <div class="wrap">
      <p class="crumb"><a href="index.html">Ana Sayfa</a> / Kurumsal</p>
      <h1>Atölyesi olan<br><span class="text-signal">reklam firması</span></h1>
      <p class="lead" style="margin-top:26px">2008’de 120 m²’lik bir atölyede tabela üretimiyle başladık. Bugün mimari proje ekibimizle birlikte, bir ticari mekânın konseptinden tabelasına kadar tüm sürecini üstleniyoruz.</p>
    </div>
  </section>

  <section>
    <div class="wrap split">
      <div class="shot" data-reveal="0"><img src="${img('about-team', 1000, 1250)}" alt="AKS üretim ekibi atölyede çalışırken" loading="lazy"></div>
      <div class="prose" data-reveal="1">
        <p class="eyebrow">Biz kimiz</p>
        <h2>İşin tamamını<br>tek elden yürütüyoruz</h2>
        <p>Reklam sektöründe en sık yaşanan sorun, işin parçalara bölünmesidir: tasarımı bir firma, üretimi başka bir atölye, montajı üçüncü bir ekip yapar. Sorun çıktığında kimse sahiplenmez.</p>
        <p>Biz bu zinciri kırdık. Tasarım, üretim, montaj ve satış sonrası destek aynı çatı altında, aynı ekip tarafından yürütülür. Teslim tarihini bu yüzden net verebiliyoruz.</p>
        <blockquote>“Bir tabela sadece bir levha değildir; markanın sokaktaki ilk cümlesidir.”</blockquote>
        <h3>Çalışma ilkelerimiz</h3>
        <ul>
          <li>Keşif ve ölçü ücretsizdir; teklif kalem kalem verilir.</li>
          <li>Onaysız hiçbir üretim başlamaz, her iş 3B görselle sunulur.</li>
          <li>Işıklı ürünlerde 2 yıl garanti, arızada 48 saat içinde müdahale.</li>
          <li>Montaj, iş güvenliği sertifikalı kendi ekibimizle yapılır.</li>
        </ul>
      </div>
    </div>
  </section>

  <section style="background:var(--ink-2);border-block:1px solid var(--line)">
    <div class="wrap">
      <div class="sec-head" data-reveal="0"><div><p class="eyebrow">Rakamlarla</p><h2>AKS</h2></div></div>
      <div class="hero__stats" style="border-top:0">
        ${STATS.map(([n, l]) => `<div><strong>${e(n)}</strong><span>${e(l)}</span></div>`).join('\n        ')}
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="sec-head" data-reveal="0"><div><p class="eyebrow">Yol haritamız</p><h2>Kısa tarihçe</h2></div></div>
      <ul class="info-list">
        ${TIMELINE.map(([y, t]) => `<li><span>${y}</span><span>${e(t)}</span></li>`).join('\n        ')}
      </ul>
    </div>
  </section>

  <section style="padding-top:0">
    <div class="wrap">
      <div class="sec-head" data-reveal="0"><div><p class="eyebrow">Ekipman</p><h2>Makine parkuru</h2></div></div>
      <div class="svc-grid">
        ${MACHINES.map(([t, d], i) => `<article class="svc" data-reveal="${i}">
          <span class="svc__no">${pad(i + 1)}</span>
          <h3>${e(t)}</h3>
          <p>${e(d)}</p>
        </article>`).join('\n        ')}
      </div>
    </div>
  </section>`,
};

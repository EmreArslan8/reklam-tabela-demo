import { POSTS, img, trdate, e } from '../data.js';

const featured = POSTS[0];
const rest = POSTS.slice(1);

export default {
  file: 'blog.html',
  title: 'Blog',
  desc: 'Tabela seçimi, mağaza tasarımı, araç giydirme bakımı ve belediye izin süreçleri üzerine pratik yazılar.',
  body: `
  <section class="page-head">
    <div class="wrap">
      <p class="crumb"><a href="index.html">Ana Sayfa</a> / Blog</p>
      <h1>Blog</h1>
      <p class="lead" style="margin-top:26px">Sahadan çıkan deneyimleri yazıya döküyoruz: malzeme seçimi, mevzuat, bakım ve tasarım kararları.</p>
    </div>
  </section>

  <section>
    <div class="wrap">
      <a class="split" href="blog-detay.html" style="margin-bottom:clamp(48px,7vw,90px)" data-reveal="0">
        <div class="shot" style="aspect-ratio:4/3"><img src="${img(featured.seed, 1200, 900)}" alt="${e(featured.title)}" loading="lazy"></div>
        <div>
          <p class="eyebrow">Öne çıkan yazı</p>
          <h2>${e(featured.title)}</h2>
          <p class="lead" style="margin-top:20px;font-size:18px">${e(featured.excerpt)}</p>
          <p style="font-family:var(--font-mono);letter-spacing:.16em;color:var(--signal);text-transform:uppercase;font-size:13px">${trdate(featured.date)} · ${e(featured.cat)}</p>
          <span class="btn" style="margin-top:12px">Yazıyı Oku</span>
        </div>
      </a>

      <div class="post-grid">
        ${rest.map((p, i) => `<article class="post" data-reveal="${i % 3}">
          <a href="blog-detay.html">
            <div class="shot"><img src="${img(p.seed, 900, 560)}" alt="${e(p.title)}" loading="lazy"></div>
            <time datetime="${p.date}">${trdate(p.date)} · ${e(p.cat)}</time>
            <h3>${e(p.title)}</h3>
            <p>${e(p.excerpt)}</p>
          </a>
        </article>`).join('\n        ')}
      </div>
    </div>
  </section>`,
};

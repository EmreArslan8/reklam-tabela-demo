import { SERVICES, PROJECTS, CATEGORIES, POSTS, STATS, PROCESS, CLIENTS, img, trdate, e, pad } from '../data.js';

export default {
  file: 'index.html',
  title: 'Tabela, Dijital Baskı ve Mimari Proje',
  desc: 'İstanbul merkezli reklam ve mimari proje firması. Kutu harf tabela, totem, araç giydirme, mağaza tasarımı ve anahtar teslim uygulama hizmetleri.',
  body: `
  <!-- HERO -->
  <section class="hero">
    <div class="hero__bg" aria-hidden="true"><img src="${img('hero-facade', 1800, 1100)}" alt=""></div>
    <div class="wrap hero__inner">
      <p class="eyebrow">2008’den beri üretimin içinde</p>
      <h1>Markanızı sokakta<em>görünür kılıyoruz</em></h1>
      <p class="lead">Tabela üretimi, dijital baskı ve mimari proje… Tasarımdan montaja kadar bütün süreç kendi atölyemizde, tek ekiple yürütülür.</p>
      <div class="hero__actions">
        <a class="btn btn--signal" href="projeler.html">Projelerimiz
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
        <a class="btn" href="hizmetler.html">Hizmetler</a>
      </div>
    </div>
  </section>

  <div class="wrap">
    <div class="hero__stats">
      ${STATS.map(([n, l]) => `<div><strong>${e(n)}</strong><span>${e(l)}</span></div>`).join('\n      ')}
    </div>
  </div>

  <!-- KAYAN ŞERİT -->
  <div class="marquee" aria-hidden="true">
    <div class="marquee__track">
      ${[0, 1].map(() => SERVICES.map((s) => `<span>${e(s.title)}</span>`).join('')).join('')}
    </div>
  </div>

  <!-- HİZMETLER -->
  <section>
    <div class="wrap">
      <div class="sec-head" data-reveal="0">
        <div>
          <p class="eyebrow">Ne yapıyoruz</p>
          <h2>Tek çatı altında<br>üretim ve proje</h2>
        </div>
        <a class="btn" href="hizmetler.html">Tüm Hizmetler</a>
      </div>
      <div class="svc-grid">
        ${SERVICES.map((s, i) => `<article class="svc" data-reveal="${i}">
          <span class="svc__no">${pad(i + 1)}</span>
          <svg class="svc__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${s.icon}"/></svg>
          <h3>${e(s.title)}</h3>
          <p>${e(s.short)}</p>
          <a class="svc__link" href="hizmet-detay.html">Detay</a>
        </article>`).join('\n        ')}
      </div>
    </div>
  </section>

  <!-- ÖNE ÇIKAN PROJELER -->
  <section style="padding-top:0">
    <div class="wrap">
      <div class="sec-head" data-reveal="0">
        <div>
          <p class="eyebrow">Seçilmiş işler</p>
          <h2>Son projeler</h2>
        </div>
        <a class="btn" href="projeler.html">Tümünü Gör</a>
      </div>
      <div class="proj-grid">
        ${PROJECTS.slice(0, 5).map((p, i) => `<a class="proj${i === 0 || i === 3 ? ' proj--wide' : ''}" href="proje-detay.html" data-reveal="${i}">
          <div class="shot"><img src="${img(p.seed, 1200, 800)}" alt="${e(p.title)} — ${e(CATEGORIES[p.cat])} uygulaması" loading="lazy"></div>
          <div class="proj__meta">
            <h3>${e(p.title)}</h3>
            <span>${e(CATEGORIES[p.cat])} · ${p.year}</span>
          </div>
        </a>`).join('\n        ')}
      </div>
    </div>
  </section>

  <!-- ATÖLYE -->
  <section style="background:var(--ink-2);border-block:1px solid var(--line)">
    <div class="wrap split">
      <div data-reveal="0">
        <p class="eyebrow">Atölyemiz</p>
        <h2>Üretimi taşerona<br>bırakmıyoruz</h2>
        <p class="lead" style="margin-top:24px">1.400 m²’lik atölyemizde CNC kesim, büküm, boya ve montaj hazırlığı tek hatta ilerliyor. Bu yüzden teslim süresini biz veriyoruz, başkası değil.</p>
        <ul class="info-list" style="margin-top:32px">
          <li><span>Atölye</span><span>1.400 m² kapalı üretim alanı</span></li>
          <li><span>Ekip</span><span>12 kişilik üretim ve proje kadrosu</span></li>
          <li><span>Kapsam</span><span>İstanbul merkezli, Türkiye geneli montaj</span></li>
        </ul>
        <a class="btn" href="hakkimizda.html" style="margin-top:32px">Kurumsal</a>
      </div>
      <div class="shot" data-reveal="1"><img src="${img('workshop-cnc', 1000, 1250)}" alt="Atölyede CNC kesim ve tabela üretimi" loading="lazy"></div>
    </div>
  </section>

  <!-- SÜREÇ -->
  <section>
    <div class="wrap">
      <div class="sec-head" data-reveal="0">
        <div><p class="eyebrow">Nasıl çalışıyoruz</p><h2>Dört adımda teslim</h2></div>
      </div>
      <div class="steps">
        ${PROCESS.map(([t, d], i) => `<div class="step" data-reveal="${i}">
          <strong>${pad(i + 1)}</strong>
          <h3>${e(t)}</h3>
          <p>${e(d)}</p>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>

  <!-- REFERANSLAR -->
  <section style="padding-top:0">
    <div class="wrap">
      <div class="sec-head" data-reveal="0">
        <div><p class="eyebrow">Birlikte çalıştıklarımız</p><h2>Referanslar</h2></div>
      </div>
      <div class="logos">${CLIENTS.map((c) => `<div>${e(c)}</div>`).join('')}</div>
    </div>
  </section>

  <!-- BLOG -->
  <section style="padding-top:0">
    <div class="wrap">
      <div class="sec-head" data-reveal="0">
        <div><p class="eyebrow">Bilgi</p><h2>Blogdan</h2></div>
        <a class="btn" href="blog.html">Tüm Yazılar</a>
      </div>
      <div class="post-grid">
        ${POSTS.slice(0, 3).map((p, i) => `<article class="post" data-reveal="${i}">
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

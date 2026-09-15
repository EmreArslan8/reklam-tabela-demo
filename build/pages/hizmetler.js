import { SERVICES, PROCESS, img, e, pad } from '../data.js';

export default {
  file: 'hizmetler.html',
  title: 'Hizmetler',
  desc: 'Tabela üretimi, dijital baskı, mimari proje, iç mekân tasarımı, kurumsal kimlik ve montaj-bakım hizmetleri.',
  body: `
  <section class="page-head">
    <div class="wrap">
      <p class="crumb"><a href="index.html">Ana Sayfa</a> / Hizmetler</p>
      <h1>Hizmetler</h1>
      <p class="lead" style="margin-top:26px">Altı ana başlıkta topladığımız hizmetlerin tamamı kendi atölyemizde, kendi ekibimizle yürütülür.</p>
    </div>
  </section>

  <section>
    <div class="wrap">
      ${SERVICES.map((s, i) => {
        const shot = `<div class="shot" style="aspect-ratio:4/3"><img src="${img(s.seed, 1000, 750)}" alt="${e(s.title)} hizmeti" loading="lazy"></div>`;
        const text = `<div>
            <p class="eyebrow">${pad(i + 1)} — Hizmet</p>
            <h2>${e(s.title)}</h2>
            <p class="lead" style="margin-top:22px;font-size:18px">${e(s.short)}</p>
            <ul class="prose" style="margin-top:24px">${s.items.map((it) => `<li>${e(it)}</li>`).join('')}</ul>
            <a class="btn" href="hizmet-detay.html">Detaylı Bilgi
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>`;
        return `<article class="split" style="margin-bottom:clamp(56px,8vw,110px)" data-reveal="${i}">
          ${i % 2 ? shot + '\n          ' + text : text + '\n          ' + shot}
        </article>`;
      }).join('\n      ')}
    </div>
  </section>

  <section style="background:var(--ink-2);border-block:1px solid var(--line)">
    <div class="wrap">
      <div class="sec-head" data-reveal="0"><div><p class="eyebrow">Nasıl çalışıyoruz</p><h2>Dört adımda teslim</h2></div></div>
      <div class="steps">
        ${PROCESS.map(([t, d], i) => `<div class="step" data-reveal="${i}"><strong>${pad(i + 1)}</strong><h3>${e(t)}</h3><p>${e(d)}</p></div>`).join('\n        ')}
      </div>
    </div>
  </section>`,
};

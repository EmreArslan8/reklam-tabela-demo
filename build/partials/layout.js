/**
 * Ortak iskelet: <head>, üst menü, alt bilgi.
 * Tüm sayfalar bu dosyadan beslenir; menüye bir madde eklemek
 * için sadece data.js düzenlenir, 9 dosya tek tek elle güncellenmez.
 */
import { SITE, MENU, SERVICES, img, e } from '../data.js';

const phoneHref = SITE.phone.replace(/\s+/g, '');

const head = ({ file, title, desc }) => `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${e(title)} | ${e(SITE.full)}</title>
<meta name="description" content="${e(desc)}">
<link rel="canonical" href="${SITE.url}/${file}">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#0C0D10">

<!-- Sosyal paylaşım (Open Graph) -->
<meta property="og:type" content="website">
<meta property="og:locale" content="tr_TR">
<meta property="og:site_name" content="${e(SITE.full)}">
<meta property="og:title" content="${e(title)}">
<meta property="og:description" content="${e(desc)}">
<meta property="og:url" content="${SITE.url}/${file}">
<meta property="og:image" content="${img('og-cover', 1200, 630)}">
<meta name="twitter:card" content="summary_large_image">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/site.css">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23FF4A17'/%3E%3C/svg%3E">

<!-- Arama motorları için yapısal veri -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "${e(SITE.full)}",
  "description": "${e(desc)}",
  "url": "${SITE.url}",
  "telephone": "${SITE.phone}",
  "email": "${SITE.email}",
  "address": { "@type": "PostalAddress", "streetAddress": "${e(SITE.address)}", "addressLocality": "İstanbul", "addressCountry": "TR" },
  "openingHours": "Mo-Sa 08:30-18:30",
  "areaServed": "Türkiye"
}
</script>
</head>
<body>`;

const logo = () => `<a class="logo" href="index.html" aria-label="${e(SITE.full)} ana sayfa">
      <span class="logo__mark" aria-hidden="true">A</span>
      <span>
        <span class="logo__txt">${e(SITE.name)}<span>.</span></span>
        <span class="logo__sub">${e(SITE.slogan)}</span>
      </span>
    </a>`;

const header = (file) => `<header class="site-head">
  <div class="wrap site-head__inner">
    ${logo()}
    <nav class="nav" id="nav" aria-label="Ana menü">
      ${MENU.map(([href, label]) =>
        `<a href="${href}"${href === file ? ' class="is-active" aria-current="page"' : ''}>${e(label)}</a>`).join('\n      ')}
    </nav>
    <div class="head-cta">
      <a class="head-phone" href="tel:${phoneHref}">${e(SITE.phone)}</a>
      <a class="btn btn--signal" href="iletisim.html">Teklif Al</a>
      <button class="nav-toggle" id="navToggle" aria-label="Menüyü aç/kapat" aria-expanded="false" aria-controls="nav">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>`;

const footer = () => `<section class="cta-band">
  <div class="wrap">
    <h2>Projenizi konuşalım.<br>Ölçü ve keşif ücretsiz.</h2>
    <a class="btn" href="iletisim.html">Teklif Formu
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </a>
  </div>
</section>

<footer class="site-foot">
  <div class="wrap">
    <div class="foot-grid">
      <div>
        ${logo()}
        <p style="font-size:16px;margin-top:22px;max-width:36ch;color:var(--paper-dim)">
          2008’den bu yana tabela üretimi, dijital baskı ve mimari proje işlerini kendi atölyemizde tek elden yürütüyoruz.
        </p>
      </div>
      <div>
        <h4>Kurumsal</h4>
        <ul>${MENU.map(([href, label]) => `<li><a href="${href}">${e(label)}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h4>Hizmetler</h4>
        <ul>${SERVICES.map((s) => `<li><a href="hizmet-detay.html">${e(s.title)}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h4>İletişim</h4>
        <ul>
          <li><a href="tel:${phoneHref}">${e(SITE.phone)}</a></li>
          <li><a href="mailto:${SITE.email}">${e(SITE.email)}</a></li>
          <li style="color:var(--paper-dim)">${e(SITE.address)}</li>
          <li style="color:var(--paper-dim)">${e(SITE.hours)}</li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© <span data-year>2026</span> ${e(SITE.full)} — Tüm hakları saklıdır.</span>
      <span>Demo sürüm · <a href="admin/index.html">Yönetim Paneli</a></span>
    </div>
  </div>
</footer>

<script src="assets/js/site.js"></script>
</body>
</html>`;

/** Sayfa şablonlarının tek giriş noktası */
export const layout = ({ file, title, desc, body }) =>
  head({ file, title, desc }) + '\n' + header(file) + '\n\n<main>\n' + body + '\n</main>\n\n' + footer();

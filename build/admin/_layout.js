/**
 * Yönetim paneli iskeleti: sol menü, üst bar, içerik alanı.
 * bare:true olan sayfalar (giriş ekranı) menüsüz basılır.
 */
import { SITE, e } from '../data.js';

export const NAV = [
  ['Genel', [
    ['dashboard.html', 'Kontrol Paneli', 'M4 13h7V4H4v9zm0 7h7v-5H4v5zm9 0h7v-9h-7v9zm0-16v5h7V4h-7z'],
    ['mesajlar.html', 'Mesajlar', 'M3 5h18v14H3zM3 5l9 7 9-7'],
  ]],
  ['İçerik', [
    ['projeler.html', 'Projeler', 'M3 7h6l2 2h10v10H3zM3 7V4h6v3'],
    ['hizmetler.html', 'Hizmetler', 'M12 3l8 4.5v9L12 21l-8-4.5v-9z'],
    ['blog.html', 'Blog', 'M5 3h14v18H5zM8 7h8M8 11h8M8 15h5'],
    ['sayfalar.html', 'Sayfalar', 'M6 2h8l4 4v16H6zM14 2v4h4'],
    ['medya.html', 'Medya', 'M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6'],
  ]],
  ['Yapılandırma', [
    ['seo.html', 'SEO', 'M11 4a7 7 0 107 7 7 7 0 00-7-7zM20 20l-4.5-4.5'],
    ['ayarlar.html', 'Ayarlar', 'M12 8a4 4 0 104 4 4 4 0 00-4-4zM3 12h3m12 0h3M12 3v3m0 12v3'],
  ]],
];

const head = ({ file, title }) => `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${e(title)} · Yönetim Paneli | ${e(SITE.full)}</title>
<meta name="robots" content="noindex, nofollow">
<meta name="theme-color" content="#14161B">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/admin.css">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23FF4A17'/%3E%3C/svg%3E">
</head>
<body${file === 'index.html' ? ' class="login-body"' : ''}>`;

const sidebar = (file) => `<aside class="side" id="side">
  <a class="side__logo" href="dashboard.html">
    <span class="side__mark">A</span>
    <span>
      <strong>${e(SITE.name)}</strong>
      <small>Yönetim Paneli</small>
    </span>
  </a>

  ${NAV.map(([group, links]) => `<div class="side__group">
    <h6>${e(group)}</h6>
    <ul>
      ${links.map(([href, label, icon]) => `<li><a href="${href}"${href === file ? ' class="is-active" aria-current="page"' : ''}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="${icon}"/></svg>
        ${e(label)}${label === 'Mesajlar' ? '<span class="pill">2</span>' : ''}
      </a></li>`).join('\n      ')}
    </ul>
  </div>`).join('\n  ')}

  <div class="side__foot">
    <a href="../index.html" target="_blank" rel="noopener">↗ Siteyi görüntüle</a>
    <a href="index.html">→ Çıkış yap</a>
  </div>
</aside>`;

const topbar = (title, actions) => `<header class="topbar">
  <button class="side-toggle" id="sideToggle" aria-label="Menüyü aç/kapat"><span></span><span></span><span></span></button>
  <h1>${e(title)}</h1>
  <div class="topbar__right">
    <div class="search"><input type="search" placeholder="Panelde ara…" aria-label="Panelde ara"></div>
    <div class="user"><span class="avatar">MY</span><span class="user__txt"><strong>Murat Y.</strong><small>Yönetici</small></span></div>
  </div>
</header>
${actions ? `<div class="page-bar">${actions}</div>` : ''}`;

export const adminLayout = (page) => {
  if (page.bare) {
    return head(page) + '\n' + page.body + '\n<script src="assets/js/admin.js"></script>\n</body>\n</html>';
  }
  return `${head(page)}
<div class="shell">
${sidebar(page.file)}
<div class="main">
${topbar(page.title, page.actions || '')}
<div class="content">
${page.body}
</div>
</div>
</div>
<div class="side-scrim" id="sideScrim"></div>
<script src="assets/js/admin.js"></script>
</body>
</html>`;
};

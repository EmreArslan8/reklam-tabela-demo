import { PROJECTS, POSTS, img } from '../data.js';

const files = [
  ...PROJECTS.map((p, i) => [`${p.slug}-kapak.jpg`, p.seed, `${420 + i * 37} KB`]),
  ...POSTS.map((p, i) => [`${p.slug}-gorsel.jpg`, p.seed, `${260 + i * 41} KB`]),
];

export default {
  file: 'medya.html',
  title: 'Medya',
  actions: `<button class="btn btn--signal" data-demo-action="Yükleme">+ Dosya Yükle</button>
    <select style="padding:9px 14px;border:1px solid var(--line);border-radius:4px;font:inherit;font-size:14px">
      <option>Tüm klasörler</option><option>Projeler</option><option>Blog</option><option>Logo & kimlik</option>
    </select>
    <span style="margin-left:auto;color:var(--txt-dim);font-size:14px">${files.length} dosya · 68 MB / 2 GB</span>`,
  body: `
<div class="dropzone" style="margin-bottom:22px" data-demo-action="Dosya yükleme">
  <strong>Dosyaları sürükleyip bırakın</strong>
  JPG, PNG, WebP, PDF · tek dosya en fazla 5 MB · yüklenen görseller otomatik olarak WebP'ye çevrilir
</div>

<section class="card">
  <div class="card__head"><h2>Medya kütüphanesi</h2><a href="#" data-demo-action="Toplu silme">Seçilenleri sil</a></div>
  <div class="media-grid">
    ${files.map(([name, seed, size]) => `<figure class="media" style="margin:0">
      <img src="${img(seed, 400, 300)}" alt="" loading="lazy">
      <figcaption title="${name}">${name.length > 22 ? name.slice(0, 20) + '…' : name}<br><small>${size}</small></figcaption>
    </figure>`).join('\n    ')}
  </div>
</section>`,
};

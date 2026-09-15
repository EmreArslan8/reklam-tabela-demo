import { POSTS, img, trdate, e } from '../data.js';

export default {
  file: 'blog.html',
  title: 'Blog',
  actions: `<button class="btn btn--signal" data-demo-action="Yeni yazı">+ Yeni Yazı</button>
    <input data-table-search="#blogTable" type="search" placeholder="Yazı ara…" aria-label="Yazı ara"
      style="padding:9px 14px;border:1px solid var(--line);border-radius:4px;font:inherit;font-size:14px">
    <span style="margin-left:auto;color:var(--txt-dim);font-size:14px">${POSTS.length} yazı</span>`,
  body: `
<div class="tabs">
  <button class="is-active" data-tab="tumu">Tümü (${POSTS.length})</button>
  <button data-tab="yayinda">Yayında (5)</button>
  <button data-tab="taslak">Taslak (1)</button>
</div>

<section class="card" data-panel="tumu">
  <div class="card__head"><h2>Yazı listesi</h2><a href="#" data-demo-action="Kategori yönetimi">Kategorileri yönet</a></div>
  <div class="table-wrap">
    <table class="data" id="blogTable">
      <thead><tr><th style="width:76px">Görsel</th><th>Başlık</th><th>Kategori</th><th>Tarih</th><th>Okunma</th><th>Durum</th><th style="text-align:right">İşlem</th></tr></thead>
      <tbody>
        ${POSTS.map((p, i) => `<tr>
          <td><img class="thumb" src="${img(p.seed, 120, 90)}" alt=""></td>
          <td><strong>${e(p.title)}</strong><br><small style="color:var(--txt-dim)">/blog/${p.slug}</small></td>
          <td>${e(p.cat)}</td>
          <td>${trdate(p.date)}</td>
          <td>${[1248, 876, 654, 432, 390, 210][i]}</td>
          <td>${i === 5 ? '<span class="badge badge--draft">Taslak</span>' : '<span class="badge badge--ok">Yayında</span>'}</td>
          <td class="row-actions">
            <a class="btn btn--sm" href="../blog-detay.html" target="_blank" rel="noopener">Gör</a>
            <button class="btn btn--sm" data-demo-action="Düzenleme">Düzenle</button>
            <button class="btn btn--sm btn--danger" data-demo-action="Silme">Sil</button>
          </td>
        </tr>`).join('\n        ')}
      </tbody>
    </table>
  </div>
</section>

<section class="card" data-panel="yayinda" hidden>
  <div class="card__head"><h2>Yayındaki yazılar</h2></div>
  <p style="color:var(--txt-dim);margin:0">Yayında olan 5 yazı listelenir. (Demo — sekme filtresi örnek amaçlıdır.)</p>
</section>

<section class="card" data-panel="taslak" hidden>
  <div class="card__head"><h2>Taslaklar</h2></div>
  <p style="color:var(--txt-dim);margin:0">“${e(POSTS[5].title)}” taslak olarak bekliyor.</p>
</section>`,
};

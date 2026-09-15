import { PROJECTS, CATEGORIES, img, e } from '../data.js';

export default {
  file: 'projeler.html',
  title: 'Projeler',
  actions: `<a class="btn btn--signal" href="proje-duzenle.html">+ Yeni Proje</a>
    <input data-table-search="#projTable" type="search" placeholder="Proje ara…" aria-label="Proje ara"
      style="padding:9px 14px;border:1px solid var(--line);border-radius:4px;font:inherit;font-size:14px">
    <select style="padding:9px 14px;border:1px solid var(--line);border-radius:4px;font:inherit;font-size:14px">
      <option>Tüm kategoriler</option>
      ${Object.values(CATEGORIES).map((c) => `<option>${e(c)}</option>`).join('')}
    </select>
    <span style="margin-left:auto;color:var(--txt-dim);font-size:14px">${PROJECTS.length} kayıt</span>`,
  body: `
<section class="card">
  <div class="card__head">
    <h2>Proje listesi</h2>
    <a href="#" data-demo-action="Dışa aktar">CSV olarak dışa aktar</a>
  </div>

  <div class="table-wrap">
    <table class="data" id="projTable">
      <thead>
        <tr>
          <th style="width:40px"><input type="checkbox" data-check-all="#projTable" aria-label="Tümünü seç"></th>
          <th style="width:76px">Görsel</th>
          <th>Proje</th>
          <th>Kategori</th>
          <th>İşveren</th>
          <th>Yıl</th>
          <th>Durum</th>
          <th style="text-align:right">İşlem</th>
        </tr>
      </thead>
      <tbody>
        ${PROJECTS.map((p, i) => `<tr>
          <td><input type="checkbox" aria-label="${e(p.title)} seç"></td>
          <td><img class="thumb" src="${img(p.seed, 120, 90)}" alt=""></td>
          <td><strong>${e(p.title)}</strong><br><small style="color:var(--txt-dim)">/projeler/${p.slug}</small></td>
          <td>${e(CATEGORIES[p.cat])}</td>
          <td>${e(p.client)}</td>
          <td>${p.year}</td>
          <td>${i % 5 === 4 ? '<span class="badge badge--draft">Taslak</span>' : '<span class="badge badge--ok">Yayında</span>'}</td>
          <td class="row-actions">
            <a class="btn btn--sm" href="../proje-detay.html" target="_blank" rel="noopener">Gör</a>
            <a class="btn btn--sm" href="proje-duzenle.html">Düzenle</a>
            <button class="btn btn--sm btn--danger" data-demo-action="Silme">Sil</button>
          </td>
        </tr>`).join('\n        ')}
      </tbody>
    </table>
  </div>

  <div style="display:flex;align-items:center;gap:12px;margin-top:18px;flex-wrap:wrap">
    <select style="padding:8px 12px;border:1px solid var(--line);border-radius:4px;font:inherit;font-size:14px">
      <option>Toplu işlem seç</option><option>Yayına al</option><option>Taslağa çek</option><option>Sil</option>
    </select>
    <button class="btn btn--sm" data-demo-action="Toplu işlem">Uygula</button>
    <div style="margin-left:auto;display:flex;gap:6px">
      <button class="btn btn--sm" disabled>‹</button>
      <button class="btn btn--sm btn--signal">1</button>
      <button class="btn btn--sm">2</button>
      <button class="btn btn--sm">›</button>
    </div>
  </div>
</section>`,
};

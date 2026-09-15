import { MENU, e } from '../data.js';

const PAGES = [
  ['Ana Sayfa', 'index.html', 'Yayında', '14.09.2026'],
  ['Kurumsal', 'hakkimizda.html', 'Yayında', '08.09.2026'],
  ['Hizmetler', 'hizmetler.html', 'Yayında', '11.09.2026'],
  ['Projeler', 'projeler.html', 'Yayında', '14.09.2026'],
  ['Blog', 'blog.html', 'Yayında', '28.08.2026'],
  ['İletişim', 'iletisim.html', 'Yayında', '02.09.2026'],
  ['KVKK Aydınlatma Metni', 'kvkk.html', 'Yayında', '12.03.2026'],
  ['Çerez Politikası', 'cerez.html', 'Taslak', '12.03.2026'],
];

export default {
  file: 'sayfalar.html',
  title: 'Sayfalar',
  actions: `<button class="btn btn--signal" data-demo-action="Yeni sayfa">+ Yeni Sayfa</button>
    <span style="margin-left:auto;color:var(--txt-dim);font-size:14px">${PAGES.length} sayfa</span>`,
  body: `
<div class="grid grid--sidebar">
  <section class="card">
    <div class="card__head"><h2>Site sayfaları</h2></div>
    <div class="table-wrap">
      <table class="data">
        <thead><tr><th>Sayfa</th><th>Adres</th><th>Durum</th><th>Güncelleme</th><th style="text-align:right">İşlem</th></tr></thead>
        <tbody>
          ${PAGES.map(([t, u, s, d]) => `<tr>
            <td><strong>${e(t)}</strong></td>
            <td><small style="color:var(--txt-dim)">/${u}</small></td>
            <td>${s === 'Yayında' ? '<span class="badge badge--ok">Yayında</span>' : '<span class="badge badge--draft">Taslak</span>'}</td>
            <td>${d}</td>
            <td class="row-actions">
              <button class="btn btn--sm" data-demo-action="Düzenleme">Düzenle</button>
              <button class="btn btn--sm btn--danger" data-demo-action="Silme">Sil</button>
            </td>
          </tr>`).join('\n          ')}
        </tbody>
      </table>
    </div>
  </section>

  <form class="card" data-demo-form>
    <div class="card__head"><h2>Menü yönetimi</h2></div>
    <p style="color:var(--txt-dim);font-size:14px;margin-top:0">Sıralamayı sürükleyerek değiştirin, menüden çıkarmak için işareti kaldırın.</p>
    <ul style="display:grid;gap:8px;margin-bottom:18px">
      ${MENU.map(([href, label]) => `<li style="display:flex;align-items:center;gap:10px;border:1px solid var(--line);border-radius:4px;padding:10px 12px">
        <span style="color:var(--txt-dim);cursor:grab">⠿</span>
        <input type="checkbox" checked aria-label="${e(label)} menüde göster" style="accent-color:var(--signal)">
        <span>${e(label)}</span>
        <small style="margin-left:auto;color:var(--txt-dim)">/${href}</small>
      </li>`).join('\n      ')}
    </ul>
    <button class="btn btn--signal" style="width:100%;justify-content:center" type="submit">Menüyü Kaydet</button>
  </form>
</div>`,
};

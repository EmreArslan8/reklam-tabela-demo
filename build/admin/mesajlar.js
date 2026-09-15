import { MESSAGES, e } from '../data.js';

const badge = (s) => s === 'yeni'
  ? '<span class="badge badge--new">Yeni</span>'
  : s === 'okundu'
    ? '<span class="badge badge--info">Okundu</span>'
    : '<span class="badge badge--ok">Yanıtlandı</span>';

export default {
  file: 'mesajlar.html',
  title: 'Mesajlar',
  actions: `<button class="btn" data-demo-action="Dışa aktar">CSV indir</button>
    <input data-table-search="#msgTable" type="search" placeholder="Mesajlarda ara…" aria-label="Mesajlarda ara"
      style="padding:9px 14px;border:1px solid var(--line);border-radius:4px;font:inherit;font-size:14px">
    <span style="margin-left:auto;color:var(--txt-dim);font-size:14px">2 okunmamış · toplam ${MESSAGES.length}</span>`,
  body: `
<div class="grid grid--sidebar">
  <section class="card">
    <div class="card__head"><h2>Gelen teklif talepleri</h2></div>
    <div class="table-wrap">
      <table class="data" id="msgTable">
        <thead><tr><th>#</th><th>Gönderen</th><th>Konu</th><th>Hizmet</th><th>Tarih</th><th>Durum</th><th style="text-align:right">İşlem</th></tr></thead>
        <tbody>
          ${MESSAGES.map((m) => `<tr>
            <td style="color:var(--txt-dim)">${m.id}</td>
            <td><strong>${e(m.name)}</strong><br><small style="color:var(--txt-dim)">${e(m.company)}</small></td>
            <td>${e(m.subject)}</td>
            <td>${e(m.service)}</td>
            <td>${m.date}</td>
            <td>${badge(m.status)}</td>
            <td class="row-actions">
              <button class="btn btn--sm" data-demo-action="Görüntüleme">Aç</button>
              <button class="btn btn--sm btn--danger" data-demo-action="Silme">Sil</button>
            </td>
          </tr>`).join('\n          ')}
        </tbody>
      </table>
    </div>
  </section>

  <section class="card">
    <div class="card__head"><h2>Mesaj #${MESSAGES[0].id}</h2>${badge(MESSAGES[0].status)}</div>
    <ul style="display:grid;gap:10px;font-size:14px;margin-bottom:18px">
      <li><strong>Ad Soyad:</strong> ${e(MESSAGES[0].name)}</li>
      <li><strong>Firma:</strong> ${e(MESSAGES[0].company)}</li>
      <li><strong>Telefon:</strong> <a href="tel:05001112233">0500 111 22 33</a></li>
      <li><strong>E-posta:</strong> <a href="mailto:ornek@firma.com">ornek@firma.com</a></li>
      <li><strong>Hizmet:</strong> ${e(MESSAGES[0].service)}</li>
      <li><strong>Tarih:</strong> ${MESSAGES[0].date}</li>
    </ul>
    <p style="background:var(--paper);border:1px solid var(--line);border-radius:4px;padding:14px;font-size:14px">${e(MESSAGES[0].text)}</p>

    <form data-demo-form style="margin-top:16px">
      <div class="field" style="margin-bottom:14px">
        <label for="yanit">Hızlı yanıt</label>
        <textarea id="yanit" placeholder="Merhaba, keşif için bu hafta perşembe uygun musunuz?"></textarea>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn btn--signal" type="submit">Yanıtla</button>
        <button class="btn" type="button" data-demo-action="Okundu işaretleme">Okundu işaretle</button>
      </div>
    </form>
  </section>
</div>`,
};

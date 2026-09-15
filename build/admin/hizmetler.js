import { SERVICES, img, e } from '../data.js';

export default {
  file: 'hizmetler.html',
  title: 'Hizmetler',
  actions: `<button class="btn btn--signal" data-demo-action="Yeni hizmet">+ Yeni Hizmet</button>
    <span style="margin-left:auto;color:var(--txt-dim);font-size:14px">${SERVICES.length} hizmet · sürükleyerek sıralanabilir</span>`,
  body: `
<div class="grid grid--sidebar">
  <section class="card">
    <div class="card__head"><h2>Hizmet listesi</h2><a href="#" data-demo-action="Sıralama">Sıralamayı kaydet</a></div>
    <div class="table-wrap">
      <table class="data">
        <thead><tr><th style="width:36px"></th><th style="width:76px">Görsel</th><th>Hizmet</th><th>URL</th><th>Durum</th><th style="text-align:right">İşlem</th></tr></thead>
        <tbody>
          ${SERVICES.map((s, i) => `<tr>
            <td style="color:var(--txt-dim);cursor:grab" title="Sürükle">⠿</td>
            <td><img class="thumb" src="${img(s.seed, 120, 90)}" alt=""></td>
            <td><strong>${e(s.title)}</strong><br><small style="color:var(--txt-dim)">${e(s.short.slice(0, 54))}…</small></td>
            <td><small style="color:var(--txt-dim)">/hizmetler/${s.slug}</small></td>
            <td>${i === 5 ? '<span class="badge badge--draft">Gizli</span>' : '<span class="badge badge--ok">Yayında</span>'}</td>
            <td class="row-actions">
              <a class="btn btn--sm" href="../hizmet-detay.html" target="_blank" rel="noopener">Gör</a>
              <button class="btn btn--sm" data-demo-action="Düzenleme">Düzenle</button>
            </td>
          </tr>`).join('\n          ')}
        </tbody>
      </table>
    </div>
  </section>

  <form class="card" data-demo-form>
    <div class="card__head"><h2>Hızlı düzenle: ${e(SERVICES[0].title)}</h2></div>
    <div class="field" style="margin-bottom:16px">
      <label for="hBaslik">Başlık</label>
      <input id="hBaslik" type="text" value="${e(SERVICES[0].title)}">
    </div>
    <div class="field" style="margin-bottom:16px">
      <label for="hOzet">Kısa açıklama</label>
      <textarea id="hOzet" style="min-height:90px">${e(SERVICES[0].short)}</textarea>
    </div>
    <div class="field" style="margin-bottom:16px">
      <label for="hMadde">Kapsam maddeleri (her satıra bir madde)</label>
      <textarea id="hMadde" style="min-height:120px">${SERVICES[0].items.join('\n')}</textarea>
    </div>
    <div class="field" style="margin-bottom:16px">
      <label for="hIkon">İkon</label>
      <select id="hIkon"><option>Tabela</option><option>Baskı</option><option>Mimari</option><option>Mobilya</option><option>Marka</option><option>Montaj</option></select>
    </div>
    <div class="switch" style="margin-bottom:18px">
      <input id="hAna" type="checkbox" checked>
      <label for="hAna" style="font-family:var(--font-body);letter-spacing:0;text-transform:none;color:var(--txt)">Ana sayfada göster</label>
    </div>
    <button class="btn btn--signal" style="width:100%;justify-content:center" type="submit">Kaydet</button>
  </form>
</div>`,
};

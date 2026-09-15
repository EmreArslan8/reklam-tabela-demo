import { SITE, e } from '../data.js';

export default {
  file: 'ayarlar.html',
  title: 'Ayarlar',
  actions: `<button class="btn btn--signal" form="ayarForm" type="submit">Değişiklikleri Kaydet</button>
    <span style="margin-left:auto;color:var(--txt-dim);font-size:14px">Son kayıt: 12.09.2026 14:20</span>`,
  body: `
<div class="tabs">
  <button class="is-active" data-tab="genel">Genel</button>
  <button data-tab="iletisim">İletişim</button>
  <button data-tab="sosyal">Sosyal Medya</button>
  <button data-tab="kullanici">Kullanıcılar</button>
</div>

<form id="ayarForm" data-demo-form>
  <section class="card" data-panel="genel">
    <div class="card__head"><h2>Genel ayarlar</h2></div>
    <div class="form-grid">
      <div class="field">
        <label for="siteAdi">Site Adı</label>
        <input id="siteAdi" type="text" value="${e(SITE.full)}">
      </div>
      <div class="field">
        <label for="slogan">Slogan</label>
        <input id="slogan" type="text" value="${e(SITE.slogan)}">
      </div>
      <div class="field field--full">
        <label for="aciklama">Site Açıklaması</label>
        <textarea id="aciklama" style="min-height:80px">İstanbul merkezli reklam ve mimari proje firması. Tabela üretimi, dijital baskı, mağaza tasarımı ve anahtar teslim uygulama.</textarea>
      </div>
      <div class="field">
        <label for="logo">Logo</label>
        <input id="logo" type="file">
        <small>Önerilen: SVG veya 512×512 PNG</small>
      </div>
      <div class="field">
        <label for="favicon">Favicon</label>
        <input id="favicon" type="file">
      </div>
      <div class="field">
        <label for="dil">Varsayılan Dil</label>
        <select id="dil"><option>Türkçe</option><option>İngilizce</option></select>
      </div>
      <div class="field">
        <label for="tema">Tema Rengi</label>
        <input id="tema" type="color" value="#ff4a17" style="height:46px;padding:4px">
      </div>
      <div class="field field--full">
        <div class="switch"><input id="bakim" type="checkbox"><label for="bakim" style="font-family:var(--font-body);letter-spacing:0;text-transform:none;color:var(--txt)">Bakım modunu aç (ziyaretçilere bakım sayfası gösterilir)</label></div>
      </div>
    </div>
  </section>

  <section class="card" data-panel="iletisim" hidden>
    <div class="card__head"><h2>İletişim bilgileri</h2></div>
    <div class="form-grid">
      <div class="field"><label for="tel">Telefon</label><input id="tel" type="tel" value="${e(SITE.phone)}"></div>
      <div class="field"><label for="gsm">WhatsApp / GSM</label><input id="gsm" type="tel" value="+90 532 000 00 00"></div>
      <div class="field"><label for="eposta">E-posta</label><input id="eposta" type="email" value="${SITE.email}"></div>
      <div class="field"><label for="calisma">Çalışma Saatleri</label><input id="calisma" type="text" value="${e(SITE.hours)}"></div>
      <div class="field field--full"><label for="adres">Adres</label><textarea id="adres" style="min-height:70px">${e(SITE.address)}</textarea></div>
      <div class="field field--full"><label for="harita">Google Haritalar Bağlantısı</label><input id="harita" type="url" value="https://maps.google.com/?q=ikitelli+osb"></div>
      <div class="field"><label for="vergi">Vergi Dairesi / No</label><input id="vergi" type="text" value="Başakşehir / 000 000 0000"></div>
      <div class="field"><label for="mersis">MERSİS No</label><input id="mersis" type="text" value="0000000000000000"></div>
    </div>
  </section>

  <section class="card" data-panel="sosyal" hidden>
    <div class="card__head"><h2>Sosyal medya hesapları</h2></div>
    <div class="form-grid">
      ${[['Instagram', 'https://instagram.com/aksreklam'], ['LinkedIn', 'https://linkedin.com/company/aksreklam'], ['YouTube', 'https://youtube.com/@aksreklam'], ['X (Twitter)', ''], ['Facebook', 'https://facebook.com/aksreklam'], ['Pinterest', '']]
        .map(([n, u], i) => `<div class="field">
          <label for="sos-${i}">${n}</label>
          <input id="sos-${i}" type="url" value="${u}" placeholder="https://">
        </div>`).join('\n      ')}
    </div>
  </section>

  <section class="card" data-panel="kullanici" hidden>
    <div class="card__head"><h2>Panel kullanıcıları</h2><a href="#" data-demo-action="Kullanıcı ekleme">+ Kullanıcı ekle</a></div>
    <div class="table-wrap">
      <table class="data">
        <thead><tr><th>Ad</th><th>Kullanıcı adı</th><th>Rol</th><th>Son giriş</th><th style="text-align:right">İşlem</th></tr></thead>
        <tbody>
          <tr><td><strong>Murat Yaşar</strong></td><td>admin</td><td><span class="badge badge--ok">Yönetici</span></td><td>Bugün 09:12</td><td class="row-actions"><button class="btn btn--sm" data-demo-action="Düzenleme">Düzenle</button></td></tr>
          <tr><td><strong>Ayşe Demir</strong></td><td>ayse</td><td><span class="badge badge--info">Editör</span></td><td>Dün 17:40</td><td class="row-actions"><button class="btn btn--sm" data-demo-action="Düzenleme">Düzenle</button></td></tr>
          <tr><td><strong>Kemal Öz</strong></td><td>kemal</td><td><span class="badge badge--draft">Sadece görüntüleme</span></td><td>08.09.2026</td><td class="row-actions"><button class="btn btn--sm" data-demo-action="Düzenleme">Düzenle</button></td></tr>
        </tbody>
      </table>
    </div>
  </section>
</form>`,
};

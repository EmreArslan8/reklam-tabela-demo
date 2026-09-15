import { e } from '../data.js';

const PAGE_SEO = [
  ['Ana Sayfa', '/', 58, 148, 92],
  ['Kurumsal', '/hakkimizda', 41, 132, 88],
  ['Hizmetler', '/hizmetler', 47, 156, 90],
  ['Projeler', '/projeler', 44, 121, 86],
  ['Blog', '/blog', 38, 0, 62],
  ['İletişim', '/iletisim', 52, 139, 84],
];

export default {
  file: 'seo.html',
  title: 'SEO',
  actions: `<button class="btn btn--signal" form="seoForm" type="submit">Kaydet</button>
    <button class="btn" data-demo-action="Sitemap yenileme">Sitemap’i Yenile</button>
    <span style="margin-left:auto;color:var(--txt-dim);font-size:14px">Genel puan: 86 / 100</span>`,
  body: `
<div class="grid grid--sidebar">
  <form id="seoForm" data-demo-form style="display:grid;gap:20px">

    <section class="card">
      <div class="card__head"><h2>Ana sayfa meta bilgileri</h2></div>
      <div class="field" style="margin-bottom:16px">
        <label for="t">Sayfa Başlığı (title)</label>
        <input id="t" type="text" data-counter="#tCount" data-max="60" value="Tabela, Dijital Baskı ve Mimari Proje | AKS Reklam & Mimari">
        <small id="tCount"></small>
      </div>
      <div class="field" style="margin-bottom:16px">
        <label for="d">Açıklama (meta description)</label>
        <textarea id="d" style="min-height:80px" data-counter="#dCount" data-max="160">İstanbul merkezli reklam ve mimari proje firması. Kutu harf tabela, totem, araç giydirme, mağaza tasarımı ve anahtar teslim uygulama hizmetleri.</textarea>
        <small id="dCount"></small>
      </div>
      <div class="field">
        <label>Google’da nasıl görünecek?</label>
        <div class="serp">
          <div class="serp__url">aksreklam.com.tr</div>
          <div class="serp__title">Tabela, Dijital Baskı ve Mimari Proje | AKS Reklam & Mimari</div>
          <div class="serp__desc">İstanbul merkezli reklam ve mimari proje firması. Kutu harf tabela, totem, araç giydirme, mağaza tasarımı ve anahtar teslim uygulama hizmetleri.</div>
        </div>
      </div>
    </section>

    <section class="card">
      <div class="card__head"><h2>Sayfa bazlı durum</h2></div>
      <div class="table-wrap">
        <table class="data">
          <thead><tr><th>Sayfa</th><th>Adres</th><th>Başlık</th><th>Açıklama</th><th>Puan</th><th style="text-align:right">İşlem</th></tr></thead>
          <tbody>
            ${PAGE_SEO.map(([t, u, tl, dl, sc]) => `<tr>
              <td><strong>${e(t)}</strong></td>
              <td><small style="color:var(--txt-dim)">${u}</small></td>
              <td>${tl} krk ${tl > 60 ? '<span class="badge badge--warn">Uzun</span>' : '<span class="badge badge--ok">İyi</span>'}</td>
              <td>${dl === 0 ? '<span class="badge badge--warn">Boş</span>' : dl + ' krk <span class="badge badge--ok">İyi</span>'}</td>
              <td><div class="meter" style="width:80px"><i style="width:${sc}%"></i></div></td>
              <td class="row-actions"><button class="btn btn--sm" data-demo-action="Düzenleme">Düzenle</button></td>
            </tr>`).join('\n            ')}
          </tbody>
        </table>
      </div>
    </section>

    <section class="card">
      <div class="card__head"><h2>Teknik ayarlar</h2></div>
      <div class="form-grid">
        <div class="field"><label for="ga">Google Analytics ID</label><input id="ga" type="text" value="G-XXXXXXXXXX"></div>
        <div class="field"><label for="gsc">Search Console doğrulama</label><input id="gsc" type="text" placeholder="google-site-verification=..."></div>
        <div class="field field--full"><label for="robots">robots.txt</label><textarea id="robots" style="min-height:90px;font-family:var(--font-mono);font-size:15px">User-agent: *
Allow: /
Sitemap: https://www.aksreklam.com.tr/sitemap.xml</textarea></div>
        <div class="field field--full">
          <div class="switch" style="margin-bottom:10px"><input id="idx" type="checkbox" checked><label for="idx" style="font-family:var(--font-body);letter-spacing:0;text-transform:none;color:var(--txt)">Arama motorlarının siteyi dizine eklemesine izin ver</label></div>
          <div class="switch"><input id="schema" type="checkbox" checked><label for="schema" style="font-family:var(--font-body);letter-spacing:0;text-transform:none;color:var(--txt)">Yapısal veri (LocalBusiness schema) ekle</label></div>
        </div>
      </div>
    </section>
  </form>

  <div style="display:grid;gap:20px">
    <section class="card">
      <div class="card__head"><h2>Kontrol listesi</h2></div>
      <ul style="font-size:14px;display:grid;gap:10px">
        <li>✓ Her sayfada tek H1 başlığı var</li>
        <li>✓ Görsellerde alt metni tanımlı</li>
        <li>✓ Canonical etiketleri doğru</li>
        <li>✓ Mobil uyumluluk sorunsuz</li>
        <li>✓ sitemap.xml ve robots.txt yayında</li>
        <li style="color:#C0341B">✕ Blog sayfasının açıklaması boş</li>
        <li style="color:#C0341B">✕ 3 görsel 500 KB üzerinde</li>
      </ul>
    </section>

    <section class="card">
      <div class="card__head"><h2>Anahtar kelimeler</h2></div>
      <div class="table-wrap">
        <table class="data" style="min-width:auto">
          <thead><tr><th>Kelime</th><th>Sıra</th></tr></thead>
          <tbody>
            <tr><td>istanbul tabela</td><td><span class="badge badge--ok">4</span></td></tr>
            <tr><td>kutu harf tabela</td><td><span class="badge badge--ok">7</span></td></tr>
            <tr><td>totem tabela imalat</td><td><span class="badge badge--warn">12</span></td></tr>
            <tr><td>mağaza mimari proje</td><td><span class="badge badge--warn">18</span></td></tr>
            <tr><td>araç giydirme istanbul</td><td><span class="badge badge--draft">31</span></td></tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</div>`,
};

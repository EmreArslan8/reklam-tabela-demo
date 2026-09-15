import { PROJECTS, CATEGORIES, img, e } from '../data.js';

const p = PROJECTS[0];

export default {
  file: 'proje-duzenle.html',
  title: 'Proje Düzenle',
  actions: `<a class="btn" href="projeler.html">← Listeye dön</a>
    <a class="btn" href="../proje-detay.html" target="_blank" rel="noopener">Önizle</a>
    <span style="margin-left:auto;display:flex;gap:10px">
      <button class="btn" form="projForm" type="submit">Taslak Kaydet</button>
      <button class="btn btn--signal" form="projForm" type="submit">Kaydet & Yayınla</button>
    </span>`,
  body: `
<form id="projForm" data-demo-form>
  <div class="grid grid--sidebar">
    <div style="display:grid;gap:20px">

      <section class="card">
        <div class="card__head"><h2>Proje bilgileri</h2></div>
        <div class="form-grid">
          <div class="field field--full">
            <label for="baslik">Proje Başlığı</label>
            <input id="baslik" type="text" value="${e(p.title)}">
          </div>
          <div class="field field--full">
            <label for="slug">URL (slug)</label>
            <input id="slug" type="text" value="${p.slug}">
            <small>Adres: aksreklam.com.tr/projeler/${p.slug}</small>
          </div>
          <div class="field">
            <label for="isveren">İşveren</label>
            <input id="isveren" type="text" value="${e(p.client)}">
          </div>
          <div class="field">
            <label for="konum">Konum</label>
            <input id="konum" type="text" value="${e(p.loc)}">
          </div>
          <div class="field">
            <label for="olcek">Ölçek</label>
            <input id="olcek" type="text" value="${e(p.area)}">
          </div>
          <div class="field">
            <label for="sure">Süre</label>
            <input id="sure" type="text" value="${e(p.dur)}">
          </div>
          <div class="field field--full">
            <label for="ozet">Kısa Özet</label>
            <textarea id="ozet" style="min-height:90px">${e(p.desc)}</textarea>
          </div>
        </div>
      </section>

      <section class="card">
        <div class="card__head">
          <h2>Proje metni</h2>
          <span style="font-family:var(--font-mono);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--txt-dim)">Zengin metin editörü</span>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;border:1px solid var(--line);border-bottom:0;padding:8px;background:var(--paper);border-radius:4px 4px 0 0">
          ${['B', 'I', 'U', 'H2', 'H3', '• Liste', '1. Liste', '🔗 Bağlantı', '🖼 Görsel', '↶', '↷'].map((t) =>
            `<button type="button" class="btn btn--sm" data-demo-action="Editör">${t}</button>`).join('\n          ')}
        </div>
        <textarea style="min-height:230px;border-radius:0 0 4px 4px;width:100%;padding:14px;border:1px solid var(--line);font:inherit">İşveren, otoyoldan gelen araç trafiğinin AVM girişini geç fark ettiğini belirtti. İhtiyaç, 250 metre mesafeden okunabilen ve gece de aynı netlikte görünen bir yönlendirme elemanıydı.

Cephe ve zemin etüdü sonrası 12 metrelik çift yüzlü totem tasarlandı. Alüminyum karkas statik hesabı yapıldı, rüzgâr yüküne göre temel ölçüsü belirlendi.</textarea>
      </section>

      <section class="card">
        <div class="card__head"><h2>Galeri görselleri</h2><a href="medya.html">Medya kütüphanesi</a></div>
        <div class="media-grid" style="margin-bottom:16px">
          ${[1, 2, 3, 4, 5].map((n) => `<figure class="media" style="margin:0">
            <img src="${img(p.seed + '-g' + n, 400, 300)}" alt="">
            <figcaption>gorsel-${n}.jpg · 480 KB <button type="button" class="btn btn--sm btn--danger" style="float:right;margin-top:-4px" data-demo-action="Görsel silme">×</button></figcaption>
          </figure>`).join('\n          ')}
        </div>
        <div class="dropzone" data-demo-action="Görsel yükleme">
          <strong>Görselleri buraya sürükleyin</strong>
          JPG, PNG veya WebP · tek dosya en fazla 5 MB
        </div>
      </section>

      <section class="card">
        <div class="card__head"><h2>SEO ayarları</h2></div>
        <div class="form-grid">
          <div class="field field--full">
            <label for="seoTitle">Sayfa Başlığı (title)</label>
            <input id="seoTitle" type="text" data-counter="#seoTitleCount" data-max="60" value="${e(p.title)} | AKS Reklam & Mimari">
            <small id="seoTitleCount"></small>
          </div>
          <div class="field field--full">
            <label for="seoDesc">Açıklama (meta description)</label>
            <textarea id="seoDesc" style="min-height:80px" data-counter="#seoDescCount" data-max="160">${e(p.desc)}</textarea>
            <small id="seoDescCount"></small>
          </div>
          <div class="field field--full">
            <label for="seoKw">Anahtar kelimeler</label>
            <input id="seoKw" type="text" value="totem tabela, avm totem, ışıklı totem, istanbul tabela">
          </div>
        </div>
      </section>
    </div>

    <div style="display:grid;gap:20px">
      <section class="card">
        <div class="card__head"><h2>Yayın</h2></div>
        <div class="field" style="margin-bottom:14px">
          <label for="durum">Durum</label>
          <select id="durum"><option>Yayında</option><option>Taslak</option><option>Arşiv</option></select>
        </div>
        <div class="field" style="margin-bottom:14px">
          <label for="tarih">Yayın Tarihi</label>
          <input id="tarih" type="date" value="2026-09-02">
        </div>
        <div class="switch"><input id="oneCikan" type="checkbox" checked><label for="oneCikan" style="font-family:var(--font-body);letter-spacing:0;text-transform:none;color:var(--txt)">Ana sayfada öne çıkar</label></div>
      </section>

      <section class="card">
        <div class="card__head"><h2>Kategori</h2></div>
        <div style="display:grid;gap:10px">
          ${Object.entries(CATEGORIES).map(([k, v]) => `<div class="switch">
            <input id="cat-${k}" type="radio" name="cat"${k === p.cat ? ' checked' : ''}>
            <label for="cat-${k}" style="font-family:var(--font-body);letter-spacing:0;text-transform:none;color:var(--txt)">${e(v)}</label>
          </div>`).join('\n          ')}
        </div>
      </section>

      <section class="card">
        <div class="card__head"><h2>Kapak görseli</h2></div>
        <img src="${img(p.seed, 600, 400)}" alt="" style="border-radius:4px;margin-bottom:12px">
        <button type="button" class="btn" style="width:100%;justify-content:center" data-demo-action="Kapak değiştirme">Görseli Değiştir</button>
      </section>

      <section class="card">
        <div class="card__head"><h2>Kayıt bilgisi</h2></div>
        <ul style="font-size:14px;color:var(--txt-dim);display:grid;gap:8px">
          <li>Oluşturan: Murat Y.</li>
          <li>Oluşturma: 02.09.2026 10:14</li>
          <li>Son düzenleme: 14.09.2026 16:02</li>
          <li>Görüntülenme: 1.248</li>
        </ul>
        <button type="button" class="btn btn--danger" style="width:100%;justify-content:center;margin-top:16px" data-demo-action="Silme">Projeyi Sil</button>
      </section>
    </div>
  </div>
</form>`,
};

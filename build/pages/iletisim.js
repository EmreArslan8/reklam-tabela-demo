import { SITE, SERVICES, e } from '../data.js';

export default {
  file: 'iletisim.html',
  title: 'İletişim',
  desc: 'Tabela, dijital baskı ve mimari proje talepleriniz için bize ulaşın. Ölçü ve keşif ücretsizdir.',
  body: `
  <section class="page-head">
    <div class="wrap">
      <p class="crumb"><a href="index.html">Ana Sayfa</a> / İletişim</p>
      <h1>İletişim</h1>
      <p class="lead" style="margin-top:26px">Formu doldurun ya da doğrudan arayın. Ölçü ve keşif ücretsizdir; aynı gün içinde dönüş yapıyoruz.</p>
    </div>
  </section>

  <section>
    <div class="wrap side-layout">
      <div data-reveal="0">
        <p class="eyebrow">Teklif formu</p>
        <h2 style="margin-bottom:32px">Projenizi anlatın</h2>

        <form class="form-grid" id="contactForm" novalidate>
          <div class="field">
            <label for="ad">Ad Soyad *</label>
            <input id="ad" name="ad" type="text" required autocomplete="name" placeholder="Adınız ve soyadınız">
          </div>
          <div class="field">
            <label for="firma">Firma</label>
            <input id="firma" name="firma" type="text" autocomplete="organization" placeholder="Firma adı">
          </div>
          <div class="field">
            <label for="tel">Telefon *</label>
            <input id="tel" name="tel" type="tel" required autocomplete="tel" placeholder="05xx xxx xx xx">
          </div>
          <div class="field">
            <label for="eposta">E-posta *</label>
            <input id="eposta" name="eposta" type="email" required autocomplete="email" placeholder="ornek@firma.com">
          </div>
          <div class="field field--full">
            <label for="hizmet">Hizmet</label>
            <select id="hizmet" name="hizmet">
              <option value="">Seçiniz</option>
              ${SERVICES.map((s) => `<option value="${s.slug}">${e(s.title)}</option>`).join('\n              ')}
              <option value="diger">Diğer</option>
            </select>
          </div>
          <div class="field field--full">
            <label for="mesaj">Mesajınız *</label>
            <textarea id="mesaj" name="mesaj" required placeholder="Cephe ölçüsü, konum, beklenen teslim tarihi gibi bilgileri paylaşabilirsiniz."></textarea>
          </div>
          <div class="field field--full" style="flex-direction:row;align-items:flex-start;gap:12px">
            <input id="kvkk" name="kvkk" type="checkbox" required style="width:18px;height:18px;margin-top:4px">
            <label for="kvkk" style="letter-spacing:0;text-transform:none;font-family:var(--font-body);font-size:14px">
              Kişisel verilerimin, talebimin değerlendirilmesi amacıyla işlenmesini kabul ediyorum.
            </label>
          </div>
          <div id="formOk" class="form-ok" role="status"></div>
          <div class="field field--full">
            <button class="btn btn--signal" type="submit">Teklif Talebi Gönder
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </button>
            <p class="form-note" style="margin-top:14px">Demo sürümde form sunucuya gönderilmez. Canlı sürümde talepler yönetim panelindeki “Mesajlar” ekranına düşer.</p>
          </div>
        </form>
      </div>

      <aside data-reveal="1" class="side-card">
        <p class="eyebrow">Bize ulaşın</p>
        <ul class="info-list">
          <li><span>Telefon</span><span><a href="tel:${SITE.phone.replace(/\s+/g, '')}">${e(SITE.phone)}</a></span></li>
          <li><span>E-posta</span><span><a href="mailto:${SITE.email}">${e(SITE.email)}</a></span></li>
          <li><span>Adres</span><span>${e(SITE.address)}</span></li>
          <li><span>Çalışma</span><span>${e(SITE.hours)}</span></li>
        </ul>
        <div style="margin-top:28px;border:1px solid var(--line);aspect-ratio:4/3;display:grid;place-items:center;background:var(--ink-2);text-align:center;padding:24px">
          <div>
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--signal)" stroke-width="1.4" style="width:40px;height:40px;margin:0 auto 14px" aria-hidden="true"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
            <p style="font-family:var(--font-mono);letter-spacing:.18em;text-transform:uppercase;font-size:13px;color:var(--paper-dim);margin:0">
              Harita alanı<br>(canlı sürümde Google Haritalar)
            </p>
          </div>
        </div>
      </aside>
    </div>
  </section>`,
};

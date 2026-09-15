import { POSTS, img, trdate, e } from '../data.js';

const p = POSTS[0]; // Demo: ilk yazı. PHP sürümünde ?slug= ile dinamik gelecek.
const others = POSTS.slice(1, 4);

export default {
  file: 'blog-detay.html',
  title: p.title,
  desc: p.excerpt,
  body: `
  <section class="page-head">
    <div class="wrap">
      <p class="crumb"><a href="index.html">Ana Sayfa</a> / <a href="blog.html">Blog</a> / ${e(p.cat)}</p>
      <h1 style="max-width:20ch">${e(p.title)}</h1>
      <p style="font-family:var(--font-mono);letter-spacing:.16em;color:var(--signal);text-transform:uppercase;font-size:13px;margin-top:24px">
        <time datetime="${p.date}">${trdate(p.date)}</time> · ${e(p.cat)} · 6 dk okuma
      </p>
    </div>
  </section>

  <section style="padding-bottom:0">
    <div class="wrap">
      <div class="shot" style="aspect-ratio:16/9" data-reveal="0"><img src="${img(p.seed + '-hero', 1800, 1010)}" alt="${e(p.title)}" loading="lazy"></div>
    </div>
  </section>

  <section>
    <div class="wrap side-layout">
      <article class="prose" data-reveal="0">
        <p class="lead" style="color:var(--paper)">${e(p.excerpt)}</p>

        <h2>1. Okunabilirlik mesafesini baştan belirleyin</h2>
        <p>Tabela kararının ilk adımı estetik değil, mesafedir. Yaya trafiğine bakan bir cephede 15–20 metreden okunması yeterliyken, otoyol cephesinde 200 metrenin altına inen harf yüksekliği para kaybıdır. Pratik kural: her 10 metre okuma mesafesi için yaklaşık 4 cm harf yüksekliği.</p>

        <h2>2. Cephenin elektrik altyapısını kontrol edin</h2>
        <p>Işıklı tabelalarda en sık yaşanan gecikme, cephede uygun besleme hattının bulunmamasıdır. Keşif sırasında pano konumu, hat kesiti ve zaman rölesi ihtiyacı birlikte değerlendirilmelidir.</p>

        <blockquote>“Ölçü alınmadan verilen fiyat, tekliften çok tahmindir.”</blockquote>

        <h2>3. Malzemeyi ömre göre seçin</h2>
        <ul>
          <li><strong style="color:var(--paper)">Kompozit panel:</strong> Geniş yüzeylerde hafif ve ekonomik, 8–10 yıl dış mekân ömrü.</li>
          <li><strong style="color:var(--paper)">Paslanmaz kutu harf:</strong> Yüksek algı, deniz kenarı gibi zorlu koşullarda uzun ömür.</li>
          <li><strong style="color:var(--paper)">Pleksi:</strong> Işık geçirgenliği yüksek, gece görünürlüğü güçlü.</li>
          <li><strong style="color:var(--paper)">LED neon:</strong> Klasik neonun kırılganlığı olmadan benzer görünüm.</li>
        </ul>

        <h2>4. Belediye iznini üretimden önce çözün</h2>
        <p>Her ilçenin ölçü ve renk sınırları farklıdır. Üretilmiş bir tabelanın izin alamaması, işin baştan yapılması demektir. Başvuru dosyası tasarım onayıyla eş zamanlı hazırlanmalıdır.</p>

        <h2>5. Aydınlatma tipini mekâna göre seçin</h2>
        <p>Önden aydınlatma, arkadan aydınlatma (halo) ve iç aydınlatma aynı logoda tamamen farklı sonuç verir. Karar öncesi gece simülasyonu istemek, sonradan pişmanlığı ortadan kaldırır.</p>

        <h2>6. Montaj koşullarını sözleşmeye yazın</h2>
        <p>Sepetli araç, trafik izni, gece çalışma gibi kalemler fiyatı doğrudan etkiler. Teklifte görünmeyen bu maddeler, sonradan sürprize dönüşür.</p>

        <h2>7. Garanti ve bakım şartlarını netleştirin</h2>
        <p>Işıklı ürünlerde LED ve güç kaynağı ömrü sonludur. Garanti süresi kadar, garanti sonrası bakım fiyatının da baştan konuşulması önerilir.</p>

        <h3>Özet</h3>
        <p>Doğru tabela kararı; mesafe, malzeme, izin ve bakım başlıklarının üretim öncesinde konuşulmasıyla verilir. Keşif aşamasında ayrılan bir saat, montaj gününde günlerce zaman kazandırır.</p>
      </article>

      <aside data-reveal="1" class="side-card">
        <p class="eyebrow">Diğer yazılar</p>
        <ul>
          ${others.map((o) => `<li style="padding:16px 0;border-top:1px solid var(--line)">
            <a href="blog-detay.html">
              <span style="display:block;font-family:var(--font-mono);font-size:12px;letter-spacing:.16em;color:var(--signal);text-transform:uppercase">${trdate(o.date)}</span>
              <span style="color:var(--paper)">${e(o.title)}</span>
            </a>
          </li>`).join('\n          ')}
        </ul>
        <a class="btn btn--signal" href="iletisim.html" style="width:100%;justify-content:center;margin-top:24px">Ücretsiz Keşif İste</a>
      </aside>
    </div>
  </section>`,
};

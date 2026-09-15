import { PROJECTS, CATEGORIES, MESSAGES, ACTIVITY, img, e } from '../data.js';

const STATS = [
  ['Bu ay ziyaretçi', '4.812', '+%12 geçen aya göre', false],
  ['Teklif talebi', '37', '+%8 geçen aya göre', false],
  ['Yayındaki proje', '64', '3 taslak bekliyor', false],
  ['Blog yazısı', '18', '-%4 okunma', true],
];

const CHART = [['Nis', 46], ['May', 58], ['Haz', 71], ['Tem', 64], ['Ağu', 83], ['Eyl', 92]];
const max = Math.max(...CHART.map((c) => c[1]));

export default {
  file: 'dashboard.html',
  title: 'Kontrol Paneli',
  actions: `<a class="btn btn--signal" href="proje-duzenle.html">+ Yeni Proje</a>
    <a class="btn" href="blog.html">+ Yeni Yazı</a>
    <a class="btn" href="medya.html">Medya Yükle</a>
    <span style="margin-left:auto;font-family:var(--font-mono);font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:var(--txt-dim)">Son güncelleme: bugün 09:12</span>`,
  body: `
<div class="notice">
  <span>●</span>
  <div><strong>Demo sürüm</strong> Bu panelde yapılan değişiklikler kaydedilmez. İş onaylandığında ekranlar PHP + MySQL ile çalışır hâle getirilecek.</div>
</div>

<div class="grid grid--4" style="margin-bottom:22px">
  ${STATS.map(([label, val, delta, down], i) => `<div class="stat${i === 0 ? ' stat--accent' : ''}">
    <div class="stat__label">${e(label)}</div>
    <div class="stat__value">${e(val)}</div>
    <div class="stat__delta${down ? ' is-down' : ''}">${e(delta)}</div>
  </div>`).join('\n  ')}
</div>

<div class="grid grid--sidebar">
  <div style="display:grid;gap:20px">
    <section class="card chart-wrap">
      <div class="card__head"><h2>Teklif talepleri (son 6 ay)</h2><a href="mesajlar.html">Mesajlar</a></div>
      <div class="chart">
        ${CHART.map(([ay, v]) => `<div style="height:${Math.round((v / max) * 100)}%" title="${ay}: ${v} talep"><span>${ay}</span></div>`).join('\n        ')}
      </div>
    </section>

    <section class="card">
      <div class="card__head"><h2>Son eklenen projeler</h2><a href="projeler.html">Tümünü yönet</a></div>
      <div class="table-wrap">
        <table class="data">
          <thead><tr><th>Görsel</th><th>Proje</th><th>Kategori</th><th>Yıl</th><th>Durum</th><th></th></tr></thead>
          <tbody>
            ${PROJECTS.slice(0, 5).map((p, i) => `<tr>
              <td><img class="thumb" src="${img(p.seed, 120, 90)}" alt=""></td>
              <td><strong>${e(p.title)}</strong><br><small style="color:var(--txt-dim)">${e(p.client)}</small></td>
              <td>${e(CATEGORIES[p.cat])}</td>
              <td>${p.year}</td>
              <td>${i === 4 ? '<span class="badge badge--draft">Taslak</span>' : '<span class="badge badge--ok">Yayında</span>'}</td>
              <td class="row-actions"><a class="btn btn--sm" href="proje-duzenle.html">Düzenle</a></td>
            </tr>`).join('\n            ')}
          </tbody>
        </table>
      </div>
    </section>
  </div>

  <div style="display:grid;gap:20px">
    <section class="card">
      <div class="card__head"><h2>Yeni mesajlar</h2><a href="mesajlar.html">Tümü</a></div>
      <ul class="msg">
        ${MESSAGES.slice(0, 3).map((m) => `<li class="msg__item">
          <div class="msg__top">
            <strong>${e(m.name)}</strong>
            ${m.status === 'yeni' ? '<span class="badge badge--new">Yeni</span>' : ''}
            <time>${m.date.slice(11)}</time>
          </div>
          <p class="msg__body">${e(m.text.slice(0, 92))}…</p>
          <a class="btn btn--sm" href="mesajlar.html">Görüntüle</a>
        </li>`).join('\n        ')}
      </ul>
    </section>

    <section class="card">
      <div class="card__head"><h2>Son işlemler</h2></div>
      <ul class="feed">
        ${ACTIVITY.map(([t, d, w]) => `<li>
          <span class="dot"></span>
          <div><strong>${e(t)}</strong><small>${e(d)}</small></div>
          <time>${e(w)}</time>
        </li>`).join('\n        ')}
      </ul>
    </section>

    <section class="card">
      <div class="card__head"><h2>Site sağlığı</h2></div>
      <p style="margin:0 0 10px;font-size:14px;color:var(--txt-dim)">SEO kontrol listesi</p>
      <div class="meter" style="margin-bottom:14px"><i style="width:86%"></i></div>
      <ul style="font-size:14px;display:grid;gap:8px">
        <li>✓ Tüm sayfalarda başlık ve açıklama dolu</li>
        <li>✓ Sitemap.xml güncel</li>
        <li>✓ Görsellerde alt metni tanımlı</li>
        <li style="color:#C0341B">✕ 3 görsel 500 KB üzerinde</li>
      </ul>
    </section>
  </div>
</div>`,
};

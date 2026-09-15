# reklam-tabela-demo

Reklam, tabela ve mimari proje firması için **kurumsal site + yönetim paneli** arayüz demosu.
Saf HTML / CSS / JS — build adımı dışında hiçbir bağımlılık yok, doğrudan Vercel'e atılabilir.

> Demo aşamasında arayüz onaylanır; iş onaylandığında aynı şablonlar PHP + MySQL ile çalışır hâle getirilir.

## Sayfalar

**Site:** `index` · `hakkimizda` · `hizmetler` · `hizmet-detay` · `projeler` · `proje-detay` · `blog` · `blog-detay` · `iletisim`

**Panel (`/admin`):** `index` (giriş) · `dashboard` · `projeler` · `proje-duzenle` · `hizmetler` · `blog` · `sayfalar` · `mesajlar` · `medya` · `ayarlar` · `seo`

Panel girişi (demo): `admin` / `demo1234` — doğrulama yapılmaz, doğrudan panele geçer.

## Yapı

```
├── index.html …            derlenmiş site sayfaları
├── admin/                  derlenmiş panel sayfaları + panel css/js
├── assets/                 site css/js
├── build/                  KAYNAK (şablonlar)
│   ├── data.js             tüm içerik/mock veri — ileride veritabanı
│   ├── partials/layout.js  head + header + footer
│   ├── pages/*.js          site sayfa şablonları
│   ├── admin/*.js          panel ekran şablonları
│   └── build.mjs           derleyici
├── robots.txt
└── sitemap.xml
```

İçerik ve menü tek yerden (`build/data.js`) yönetilir; sayfalar elle tek tek düzenlenmez.

## Geliştirme

```bash
npm run build     # build/ → .html üretir
npm run dev       # derler ve http://localhost:4173 üzerinde sunar
```

## SEO

Semantik HTML, sayfa başına `title` + `description`, canonical, Open Graph, `LocalBusiness` JSON-LD,
görsellerde `alt`, `sitemap.xml`, `robots.txt` (panel `Disallow`), mobil uyumlu düzen.

## Notlar

- Görseller geçici stok (picsum.photos); yerlerine firmanın kendi fotoğrafları gelecek.
- Formlar ve panel işlemleri demo — veri kaydetmez.

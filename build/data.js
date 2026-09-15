/**
 * Demo içerik kaynağı (mock veri).
 * Diziler bilerek tablo şemasına karşılık gelecek şekilde kurgulandı;
 * iş alındığında bu dosyanın yerini veritabanı sorguları alacak.
 */

export const SITE = {
  name: 'AKS',
  full: 'AKS Reklam & Mimari',
  slogan: 'Reklam · Tabela · Mimari Proje',
  phone: '+90 212 000 00 00',
  email: 'info@aksreklam.com.tr',
  address: 'İkitelli OSB, Metal İş San. Sit. 4. Blok No:12, Başakşehir / İstanbul',
  hours: 'Pazartesi – Cumartesi  08:30 – 18:30',
  url: 'https://www.aksreklam.com.tr',
};

/** Üst menü — panelde "Menü Yönetimi" ekranından beslenir */
export const MENU = [
  ['index.html', 'Ana Sayfa'],
  ['hakkimizda.html', 'Kurumsal'],
  ['hizmetler.html', 'Hizmetler'],
  ['projeler.html', 'Projeler'],
  ['blog.html', 'Blog'],
  ['iletisim.html', 'İletişim'],
];

export const SERVICES = [
  {
    slug: 'tabela-uretimi',
    title: 'Tabela Üretimi',
    short: 'Kutu harf, ışıklı tabela, totem ve cephe giydirme çözümlerini kendi atölyemizde üretiyoruz.',
    icon: 'M3 20h18M6 20V9l6-5 6 5v11M10 20v-6h4v6',
    seed: 'signage-01',
    body: [
      'Paslanmaz, pleksi, kompozit ve alüminyum malzemelerle üretilen tabelalarımız; marka kimliğinizi gündüz ve gece aynı netlikte taşır. CNC kesim, lazer kesim ve büküm işlemleri kendi atölyemizde yapılır.',
      'Her tabela üretiminden önce cephe ölçüsü alınır, 3B görselleştirme hazırlanır ve onayınıza sunulur. Böylece montaj günü sürpriz yaşanmaz.',
    ],
    items: ['Işıklı kutu harf ve vega harf', 'Totem ve yönlendirme tabelaları', 'Cephe giydirme ve kompozit kaplama', 'Işıklı/ışıksız pleksi tabela', 'Neon ve LED neon uygulamaları'],
  },
  {
    slug: 'dijital-baski',
    title: 'Dijital Baskı',
    short: 'Geniş format baskı, araç giydirme, branda ve vitrin folyo uygulamaları.',
    icon: 'M6 9V3h12v6M6 18h12v3H6zM4 9h16v9H4z',
    seed: 'print-02',
    body: [
      'UV ve solvent baskı makinelerimizle 5 metreye kadar ek yersiz baskı alabiliyoruz. Dış mekân uygulamalarında UV dayanımlı mürekkep ve laminasyon standart olarak kullanılır.',
      'Araç giydirmede önce aracın kalıbı çıkarılır, tasarım kalıba oturtulur; uygulama sonrası ısı tabancasıyla kenar sabitlemesi yapılır.',
    ],
    items: ['Araç ve filo giydirme', 'Vitrin cam folyo ve kumlama', 'Mesh ve branda baskı', 'Raket, afiş ve billboard baskı', 'Fuar stand baskıları'],
  },
  {
    slug: 'mimari-proje',
    title: 'Mimari Proje',
    short: 'Ticari mekân, mağaza ve ofis projelerinde konseptten uygulama projesine.',
    icon: 'M4 21V7l8-4 8 4v14M9 21v-6h6v6M4 12h16',
    seed: 'arch-03',
    body: [
      'Mimar ve iç mimar kadromuz, ticari mekânınızı marka kimliğinizle birlikte kurgular. Konsept tasarım, ruhsat projesi ve uygulama projesi tek elden yürütülür.',
      'Projelerde AutoCAD ve SketchUp üzerinden üretilen paftalar; imalatçı, işveren ve şantiye arasında ortak dil oluşturur.',
    ],
    items: ['Konsept ve avan proje', 'Uygulama ve detay projeleri', '3B görselleştirme ve render', 'Metraj ve keşif çalışması', 'Ruhsat ve tadilat projeleri'],
  },
  {
    slug: 'ic-mekan-tasarimi',
    title: 'İç Mekân Tasarımı',
    short: 'Mağaza rafı, teşhir ünitesi ve özel mobilya üretimiyle mekânı bitirme.',
    icon: 'M3 10h18v11H3zM3 10l9-6 9 6M8 21v-6h8v6',
    seed: 'interior-04',
    body: [
      'Mekânın planı kadar kullandığı malzeme de markayı anlatır. Ahşap, metal ve cam kombinasyonlarıyla üretilen teşhir üniteleri kendi marangozhanemizde hazırlanır.',
      'Aydınlatma senaryosu, vitrin kurgusu ve müşteri akışı tasarımın ilk gününden itibaren birlikte planlanır.',
    ],
    items: ['Mağaza rafı ve teşhir ünitesi', 'Özel ölçü mobilya üretimi', 'Aydınlatma senaryosu', 'Vitrin ve showroom kurgusu', 'Anahtar teslim uygulama'],
  },
  {
    slug: 'kurumsal-kimlik',
    title: 'Kurumsal Kimlik',
    short: 'Logo, kılavuz ve basılı malzemeyle markanın her noktada aynı konuşması.',
    icon: 'M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12L4 7.5',
    seed: 'brand-05',
    body: [
      'Logo tasarımından kurumsal kimlik kılavuzuna kadar tüm süreci yönetiyoruz. Kılavuz, tabeladan araç giydirmeye kadar her uygulamanın ölçü ve renk kuralını içerir.',
      'Kimlik çalışması tamamlanan markalarda üretim aşaması hızlanır; renk ve oran tartışması yaşanmaz.',
    ],
    items: ['Logo ve amblem tasarımı', 'Kurumsal kimlik kılavuzu', 'Kartvizit, antetli, dosya', 'Katalog ve broşür tasarımı', 'Sosyal medya şablonları'],
  },
  {
    slug: 'montaj-bakim',
    title: 'Montaj & Bakım',
    short: 'Sepetli araç ve yetkin ekiple montaj, periyodik bakım ve arıza müdahalesi.',
    icon: 'M7 7l10 10M14 4l6 6-3 3-6-6zM4 20l5-5M3 14l7 7',
    seed: 'install-06',
    body: [
      'Yüksek cephe montajları sepetli araç ve iş güvenliği sertifikalı ekiple yapılır. Montaj öncesi statik ve elektrik altyapısı kontrol edilir.',
      'Teslim edilen tüm ışıklı ürünlerde 2 yıl garanti ve talep hâlinde yıllık bakım anlaşması sunuyoruz.',
    ],
    items: ['Sepetli araçla yüksek montaj', 'Elektrik ve LED besleme', 'Periyodik bakım anlaşması', '48 saatte arıza müdahalesi', 'Söküm ve yer değişikliği'],
  },
];

export const CATEGORIES = {
  tabela: 'Tabela',
  magaza: 'Mağaza',
  mimari: 'Mimari Proje',
  arac: 'Araç Giydirme',
  fuar: 'Fuar & Stand',
};

export const PROJECTS = [
  { slug: 'lumen-avm-totem', title: 'Lumen AVM Totem', cat: 'tabela', year: '2025', client: 'Lumen Gayrimenkul', loc: 'Ataşehir, İstanbul', seed: 'p-lumen', area: '12 m yükseklik', dur: '6 hafta',
    desc: 'Otoyol cephesinden okunması gereken 12 metrelik çift yüzlü totem. Alüminyum karkas üzerine kompozit kaplama, iç aydınlatma LED modül.' },
  { slug: 'form-concept-magaza', title: 'Form Concept Mağaza', cat: 'magaza', year: '2025', client: 'Form Concept', loc: 'Nişantaşı, İstanbul', seed: 'p-form', area: '240 m²', dur: '10 hafta',
    desc: 'Konsept tasarımdan anahtar teslim uygulamaya kadar yürütülen mağaza projesi. Vitrin kurgusu, raf sistemi ve cephe tabelası tek elden üretildi.' },
  { slug: 'arter-ofis-kati', title: 'Arter Ofis Katı', cat: 'mimari', year: '2024', client: 'Arter Yazılım', loc: 'Maslak, İstanbul', seed: 'p-arter', area: '610 m²', dur: '14 hafta',
    desc: 'Açık ofis, toplantı odaları ve sosyal alanları içeren kat planı. Akustik çözümler ve aydınlatma senaryosu projeyle birlikte kurgulandı.' },
  { slug: 'nova-filo-giydirme', title: 'Nova Filo Giydirme', cat: 'arac', year: '2025', client: 'Nova Lojistik', loc: 'Hadımköy, İstanbul', seed: 'p-nova', area: '28 araç', dur: '3 hafta',
    desc: '28 araçlık filonun tek seferde giydirilmesi. Her araç tipi için ayrı kalıp çıkarıldı, cast folyo ve laminasyon uygulandı.' },
  { slug: 'meta-fuar-standi', title: 'Meta Fuar Standı', cat: 'fuar', year: '2024', client: 'Meta Makine', loc: 'Tüyap, İstanbul', seed: 'p-meta', area: '96 m²', dur: '4 hafta',
    desc: 'İki katlı ada stand tasarımı ve üretimi. Modüler karkas sayesinde stand sonraki fuarlarda yeniden kurulabiliyor.' },
  { slug: 'kare-cephe-giydirme', title: 'Kare Plaza Cephe', cat: 'tabela', year: '2024', client: 'Kare İnşaat', loc: 'Kartal, İstanbul', seed: 'p-kare', area: '420 m²', dur: '8 hafta',
    desc: 'Plaza cephesinin kompozit panelle giydirilmesi ve ışıklı kurum logosunun uygulanması. Gece görünürlüğü için ayrı aydınlatma projesi hazırlandı.' },
  { slug: 'hane-kafe', title: 'Hane Kafe', cat: 'magaza', year: '2025', client: 'Hane Kahve', loc: 'Moda, İstanbul', seed: 'p-hane', area: '95 m²', dur: '7 hafta',
    desc: 'Tarihi bir binanın zemin katında kurgulanan kafe projesi. Özgün detaylar korunarak metal ve ahşap kombinasyonuyla yeni bir kimlik kuruldu.' },
  { slug: 'terra-showroom', title: 'Terra Showroom', cat: 'mimari', year: '2023', client: 'Terra Seramik', loc: 'İkitelli, İstanbul', seed: 'p-terra', area: '1.150 m²', dur: '20 hafta',
    desc: 'Seramik markası için showroom ve numune alanı. Ürün teşhirine göre modüler panel sistemi geliştirildi.' },
  { slug: 'ege-market-zinciri', title: 'Ege Market Zinciri', cat: 'tabela', year: '2023', client: 'Ege Market', loc: '12 şube, Marmara', seed: 'p-ege', area: '12 şube', dur: '11 hafta',
    desc: '12 şubenin cephe tabelalarının tek kimlik altında yenilenmesi. Şube bazlı ölçü çalışması ve gece montaj planlaması yapıldı.' },
];

export const POSTS = [
  { slug: 'tabela-secerken', title: 'Tabela Seçerken Dikkat Edilmesi Gereken 7 Nokta', date: '2026-08-28', cat: 'Rehber', seed: 'b-01',
    excerpt: 'Cephe ölçüsü, okunabilirlik mesafesi, aydınlatma tipi ve belediye izni… Doğru tabela kararı üretimden önce verilir.' },
  { slug: 'kutu-harf-mi-pleksi-mi', title: 'Kutu Harf mi, Pleksi Tabela mı?', date: '2026-07-14', cat: 'Teknik', seed: 'b-02',
    excerpt: 'İki uygulamanın maliyet, dayanım ve görünürlük açısından farklarını örnek projelerle karşılaştırdık.' },
  { slug: 'magaza-tasariminda-aydinlatma', title: 'Mağaza Tasarımında Aydınlatmanın Rolü', date: '2026-06-02', cat: 'Mimari', seed: 'b-03',
    excerpt: 'Doğru renk sıcaklığı ve aydınlatma senaryosu, aynı mekânda satışı ölçülebilir biçimde değiştirir.' },
  { slug: 'arac-giydirme-bakimi', title: 'Araç Giydirme Sonrası Bakım Rehberi', date: '2026-05-19', cat: 'Rehber', seed: 'b-04',
    excerpt: 'Folyonun ömrünü uzatan yıkama alışkanlıkları ve kaçınılması gereken kimyasallar.' },
  { slug: 'tabela-izni-sureci', title: 'Belediye Tabela İzni Süreci Nasıl İşler?', date: '2026-04-08', cat: 'Mevzuat', seed: 'b-05',
    excerpt: 'Başvuru evrakları, ölçü sınırları ve sık yaşanan ret sebepleri üzerine pratik bir özet.' },
  { slug: 'kurumsal-kimlik-neden', title: 'Kurumsal Kimlik Kılavuzu Neden Gerekli?', date: '2026-03-11', cat: 'Marka', seed: 'b-06',
    excerpt: 'Kılavuzu olan markalarda üretim süreci kısalır, renk ve oran tartışması ortadan kalkar.' },
];

export const STATS = [
  ['18', 'Yıllık Tecrübe'],
  ['640+', 'Tamamlanan Proje'],
  ['12', 'Kişilik Ekip'],
  ['2 Yıl', 'Üretim Garantisi'],
];

export const PROCESS = [
  ['Keşif & Ölçü', 'Cephede ölçü alır, elektrik altyapısını ve montaj koşullarını yerinde inceleriz.'],
  ['Tasarım & Görsel', 'Uygulamanın 3B görselini hazırlar, malzeme alternatiflerini birlikte değerlendiririz.'],
  ['Üretim', 'Onaylanan işi kendi atölyemizde üretir, her aşamada fotoğraflı ilerleme paylaşırız.'],
  ['Montaj & Garanti', 'Montajı kendi ekibimiz yapar; teslim sonrası 2 yıl garanti ve bakım desteği veririz.'],
];

export const CLIENTS = ['LUMEN', 'NOVA', 'TERRA', 'ARTER', 'EGE', 'META', 'KARE', 'HANE', 'FORM', 'ATLAS', 'VERA', 'ORBİT'];

/** Panel demo verileri */
export const MESSAGES = [
  { id: 1042, name: 'Serkan Aydın', company: 'Aydın Optik', subject: 'Cephe tabelası teklifi', service: 'Tabela Üretimi', date: '2026-09-14 11:20', status: 'yeni',
    text: 'Merhaba, Kadıköy’deki mağazamızın cephesi 6,5 metre. Işıklı kutu harf düşünüyoruz, keşif için ne zaman gelebilirsiniz?' },
  { id: 1041, name: 'Dilek Moran', company: 'Moran Lojistik', subject: '14 araç giydirme', service: 'Dijital Baskı', date: '2026-09-13 16:05', status: 'yeni',
    text: 'Filomuzda 14 panelvan var. Tasarım bizde hazır, uygulama ve süre hakkında bilgi alabilir miyim?' },
  { id: 1040, name: 'Emre Kılıç', company: 'Kılıç Yapı', subject: 'Ofis kat planı', service: 'Mimari Proje', date: '2026-09-12 09:40', status: 'okundu',
    text: '380 m² ofis katı için konsept ve uygulama projesi istiyoruz. Örnek iş görebilir miyiz?' },
  { id: 1039, name: 'Nazlı Tunç', company: 'Tunç Pastane', subject: 'Vitrin folyo', service: 'Dijital Baskı', date: '2026-09-11 14:12', status: 'yanıtlandı',
    text: 'Vitrin camımız 4x2,2 metre. Kumlama folyo fiyatı nedir?' },
  { id: 1038, name: 'Barış Ateş', company: 'Ateş Market', subject: '3 şube tabela yenileme', service: 'Tabela Üretimi', date: '2026-09-10 10:02', status: 'yanıtlandı',
    text: 'Üç şubemizin tabelasını aynı kimlikte yenilemek istiyoruz. Toplu fiyat verebilir misiniz?' },
];

export const ACTIVITY = [
  ['Proje eklendi', '“Lumen AVM Totem” yayına alındı', '12 dk önce'],
  ['Mesaj', 'Serkan Aydın yeni teklif talebi gönderdi', '1 saat önce'],
  ['Blog', '“Tabela Seçerken…” yazısı güncellendi', '3 saat önce'],
  ['Medya', '8 görsel yüklendi (Form Concept)', 'Dün 18:24'],
  ['Ayarlar', 'İletişim telefonu güncellendi', '2 gün önce'],
];

/* --- Yardımcılar --- */
export const img = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const trdate = (iso) => {
  const ay = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${ay[m - 1]} ${y}`;
};

export const e = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const pad = (n) => String(n).padStart(2, '0');

import { SITE, e } from '../data.js';

export default {
  file: 'index.html',
  title: 'Giriş',
  bare: true,
  body: `
<main class="login">
  <span class="login__mark" aria-hidden="true">A</span>
  <h1>Yönetim Paneli</h1>
  <p class="sub">${e(SITE.full)} içerik yönetim sistemi</p>

  <form id="loginForm" novalidate>
    <div class="field">
      <label for="kadi">Kullanıcı Adı</label>
      <input id="kadi" name="kadi" type="text" value="admin" autocomplete="username" required>
    </div>
    <div class="field">
      <label for="sifre">Parola</label>
      <input id="sifre" name="sifre" type="password" value="demo1234" autocomplete="current-password" required>
    </div>
    <div class="switch" style="margin-bottom:6px">
      <input id="hatirla" type="checkbox" checked>
      <label for="hatirla" style="font-family:var(--font-body);letter-spacing:0;text-transform:none;color:var(--txt)">Beni hatırla</label>
    </div>
    <button class="btn btn--signal" type="submit">Giriş Yap</button>
  </form>

  <p class="login__hint"><strong>Demo:</strong> kullanıcı <code>admin</code> · parola <code>demo1234</code>. Giriş bilgileri doğrulanmaz, doğrudan panele geçer.</p>
  <a class="login__back" href="../index.html">← Siteye dön</a>
</main>`,
};

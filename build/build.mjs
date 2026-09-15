/**
 * Statik site derleyicisi (bağımlılık yok).
 * build/pages/*.js  ->  proje kökünde  *.html
 * build/admin/*.js  ->  admin/*.html
 *
 * Kullanım:  node build/build.mjs
 * Çıktı saf HTML/CSS/JS olduğu için doğrudan Vercel'e atılabilir.
 */
import { readdir, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { layout } from './partials/layout.js';
import { adminLayout } from './admin/_layout.js';

const here = dirname(fileURLToPath(import.meta.url));
const root = dirname(here);

const jobs = [
  { src: join(here, 'pages'), out: root, wrap: layout, label: '' },
  { src: join(here, 'admin'), out: join(root, 'admin'), wrap: adminLayout, label: 'admin/' },
];

let count = 0;

for (const job of jobs) {
  await mkdir(job.out, { recursive: true });
  const files = (await readdir(job.src)).filter((f) => f.endsWith('.js') && !f.startsWith('_'));

  for (const f of files.sort()) {
    const mod = (await import(pathToFileURL(join(job.src, f)).href)).default;
    await writeFile(join(job.out, mod.file), job.wrap(mod), 'utf8');
    console.log(`  ✓ ${job.label}${mod.file}`);
    count++;
  }
}

console.log(`\n${count} sayfa üretildi.`);

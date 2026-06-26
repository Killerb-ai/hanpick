// post-build: copy index.html → 404.html for GitHub Pages SPA routing
import { copyFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Project root is one level up from this script (scripts/postbuild.mjs)
const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(projectRoot, 'dist');
const src = resolve(dist, 'index.html');
const dst = resolve(dist, '404.html');

copyFileSync(src, dst);
console.log('✓ Copied index.html → 404.html (SPA routing for GitHub Pages)');

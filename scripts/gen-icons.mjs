// Generates simple PWA icons (192/512/maskable) as solid PNGs with a brand glyph.
// Pure Node — uses zlib to encode raw RGBA into a valid PNG. No native deps.
import { writeFileSync, mkdirSync } from 'node:fs';
import { deflateSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, 'icons');
mkdirSync(outDir, { recursive: true });

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return ~c >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function makePNG(size, { maskable = false } = {}) {
  const bg = [0xe6, 0x39, 0x46, 0xff]; // coral
  const fg = [0xfa, 0xf9, 0xf7, 0xff]; // cream
  const padding = maskable ? Math.round(size * 0.12) : 0; // safe zone for maskable
  const usable = size - padding * 2;

  // Raw RGBA (filtered scanlines)
  const raw = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0; // filter byte
    for (let x = 0; x < size; x++) {
      // Brand glyph: a stylized "한" mark — bold vertical bar + circle dot
      // Normalized into the usable area.
      const ux = (x - padding) / usable; // 0..1
      const uy = (y - padding) / usable; // 0..1
      let hit = false;
      // Vertical bar (left of glyph)
      if (ux > 0.26 && ux < 0.42 && uy > 0.26 && uy < 0.74) hit = true;
      // Horizontal stub
      if (ux > 0.26 && ux < 0.60 && uy > 0.30 && uy < 0.40) hit = true;
      // Circle (dot)
      const cx = 0.66, cy = 0.40, r = 0.11;
      if ((ux - cx) ** 2 + (uy - cy) ** 2 < r * r) hit = true;
      // Lower accent bar
      if (ux > 0.42 && ux < 0.74 && uy > 0.55 && uy < 0.63) hit = true;

      const c = hit ? fg : bg;
      const off = y * (size * 4 + 1) + 1 + x * 4;
      raw[off] = c[0];
      raw[off + 1] = c[1];
      raw[off + 2] = c[2];
      raw[off + 3] = c[3];
    }
  }

  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  const idat = deflateSync(raw, { level: 9 });
  return Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', idat),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

writeFileSync(join(outDir, 'icon-192.png'), makePNG(192));
writeFileSync(join(outDir, 'icon-512.png'), makePNG(512));
writeFileSync(join(outDir, 'icon-512-maskable.png'), makePNG(512, { maskable: true }));
console.log('Icons generated:', outDir);

/**
 * Phase 0 — Image Optimization Script
 * Converts all project images to WebP with smart resizing.
 * Run once: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, unlink, rename } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const INPUT_DIR = './public/images/projects';
const WEB_MAX_WIDTH = 1664;   // keep web screenshots at their native width (already good)
const MOBILE_MAX_WIDTH = 800; // resize mobile screenshots down (were 1536px)
const QUALITY = 82;

// Files to delete (duplicates / non-standard formats that have better versions)
const TO_DELETE = [
  'web_e_commerce.jpg',    // duplicate of web_e_commerce.png
];

// Classify images: web screenshots vs mobile screenshots
const WEB_PREFIXES = ['web_', 'who_'];
const isWebImage = (name) => WEB_PREFIXES.some(p => name.startsWith(p));

async function main() {
  const files = await readdir(INPUT_DIR);
  const toProcess = files.filter(f =>
    /\.(png|jpg|jpeg|jfif)$/i.test(f) && !TO_DELETE.includes(f)
  );

  console.log(`\n🖼  Processing ${toProcess.length} images...\n`);

  let totalSavedBytes = 0;

  for (const file of toProcess) {
    const inputPath = path.join(INPUT_DIR, file);
    const baseName = file.replace(/\.[^.]+$/, '');
    const outputPath = path.join(INPUT_DIR, `${baseName}.webp`);

    const maxWidth = isWebImage(file) ? WEB_MAX_WIDTH : MOBILE_MAX_WIDTH;

    try {
      const { size: beforeSize } = await import('fs').then(m =>
        m.promises.stat(inputPath)
      );

      await sharp(inputPath)
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const { size: afterSize } = await import('fs').then(m =>
        m.promises.stat(outputPath)
      );

      const saved = beforeSize - afterSize;
      totalSavedBytes += saved;
      const pct = Math.round((saved / beforeSize) * 100);

      console.log(
        `  ✅ ${file.padEnd(36)} ${(beforeSize / 1024 / 1024).toFixed(2)} MB → ${(afterSize / 1024).toFixed(0)} KB  (-${pct}%)`
      );

      // Delete original after successful conversion
      await unlink(inputPath);
    } catch (err) {
      console.error(`  ❌ ${file}: ${err.message}`);
    }
  }

  // Delete explicit duplicates
  for (const file of TO_DELETE) {
    const p = path.join(INPUT_DIR, file);
    if (existsSync(p)) {
      await unlink(p);
      console.log(`  🗑  Deleted duplicate: ${file}`);
    }
  }

  console.log(`\n✨ Done! Total saved: ${(totalSavedBytes / 1024 / 1024).toFixed(1)} MB\n`);
}

main().catch(console.error);

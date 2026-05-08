/**
 * Generates public/favicon.png (192x192) from the SVG favicon.
 * Run: node scripts/generate-favicon.mjs
 *
 * PNG favicons bypass SVG favicon caching quirks in browsers.
 */
import { createRequire } from "module";
import { fileURLToPath } from "url";
import path from "path";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144" width="144" height="144">
  <rect width="144" height="144" rx="32" fill="#0A0A0A"/>

  <!-- < chevron -->
  <polyline points="44,28 24,72 44,116"
    fill="none" stroke="#C8FF3D" stroke-width="8"
    stroke-linecap="round" stroke-linejoin="round"/>

  <!-- k -->
  <line x1="52" y1="28" x2="52" y2="116"
    stroke="#FAFAF7" stroke-width="8" stroke-linecap="round"/>
  <line x1="52" y1="70" x2="74" y2="28"
    stroke="#FAFAF7" stroke-width="8" stroke-linecap="round"/>
  <line x1="52" y1="70" x2="74" y2="116"
    stroke="#FAFAF7" stroke-width="8" stroke-linecap="round"/>

  <!-- / slash -->
  <line x1="92" y1="116" x2="82" y2="28"
    stroke="#C8FF3D" stroke-width="6" stroke-linecap="round"/>

  <!-- > chevron -->
  <polyline points="100,28 120,72 100,116"
    fill="none" stroke="#C8FF3D" stroke-width="8"
    stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`.trim();

const sharp = require("sharp");

const sizes = [
  { size: 32, name: "favicon-32.png" },
  { size: 192, name: "favicon.png" },
];

for (const { size, name } of sizes) {
  const outPath = path.join(root, "public", name);
  await sharp(Buffer.from(svg))
    .resize(size, size)
    .png()
    .toFile(outPath)
    .then(() => console.log(`✓  ${name} written → ${outPath}`))
    .catch((err) => { console.error(err); process.exit(1); });
}

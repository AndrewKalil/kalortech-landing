/**
 * Generates public/og-image.png — 1200×630 social card.
 * Run once: node scripts/generate-og.mjs
 *
 * Features the full <kalortech/> brand mark centred on a dark background,
 * matching the Mark component style used on the site.
 */
import { createRequire } from "module";
import { fileURLToPath } from "url";
import path from "path";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#C8FF3D" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="#0A0A0A" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0L0 0 0 40" fill="none" stroke="rgba(250,250,247,0.04)" stroke-width="0.5"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#0A0A0A"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- ── Brand mark: <kalortech/> ── -->
  <!-- Positioned upper-centre, large -->
  <text
    x="600" y="320"
    text-anchor="middle"
    dominant-baseline="middle"
    font-family="system-ui, -apple-system, Helvetica Neue, sans-serif"
    font-size="130"
    font-weight="600"
    letter-spacing="-5"
  >
    <tspan fill="#C8FF3D" opacity="0.72">&lt;</tspan><tspan fill="#FAFAF7">kalortech</tspan><tspan fill="#C8FF3D" opacity="0.72">/&gt;</tspan>
  </text>

  <!-- Divider under mark -->
  <line x1="200" y1="390" x2="1000" y2="390"
        stroke="rgba(250,250,247,0.10)" stroke-width="1"/>

  <!-- Tagline row -->
  <text x="600" y="438"
    text-anchor="middle"
    font-family="monospace, Courier New"
    font-size="14" font-weight="400" letter-spacing="4"
    fill="rgba(250,250,247,0.45)"
  >// INDEPENDENT SOFTWARE STUDIO  ·  BARRANQUILLA / REMOTE</text>

  <!-- Sub-tagline -->
  <text x="600" y="482"
    text-anchor="middle"
    font-family="system-ui, -apple-system, Helvetica Neue, sans-serif"
    font-size="22" font-weight="400" letter-spacing="-0.5"
    fill="rgba(250,250,247,0.58)"
  >Websites, automations &amp; integrations that actually ship.</text>

  <!-- Volt accent dot bottom-centre -->
  <rect x="592" y="536" width="16" height="16" rx="2" fill="#C8FF3D" opacity="0.6"/>
</svg>
`.trim();

const sharp = require("sharp");
const outPath = path.join(root, "public", "og-image.png");

sharp(Buffer.from(svg))
  .png()
  .toFile(outPath)
  .then(() => console.log(`✓  og-image.png written → ${outPath}`))
  .catch((err) => { console.error(err); process.exit(1); });

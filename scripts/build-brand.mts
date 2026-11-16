// Regenerates brand/*.svg and app/icon.svg from components/logo-shapes.ts.
// Run: npm run brand
import fs from "node:fs";
import path from "node:path";
import { CORNERS, LOGO_COLORS as C, logoSvg } from "../components/logo-shapes.ts";

const root = path.resolve(import.meta.dirname, "..");
const out = (p: string, s: string) => fs.writeFileSync(path.join(root, p), s + "\n");

const light = { ink: C.ink, ...C.light };
const dark = { ink: C.paper, ...C.dark };
const mono = { ink: "currentColor", strategy: "currentColor", tech: "currentColor", family: "currentColor", football: "currentColor" };

fs.mkdirSync(path.join(root, "brand"), { recursive: true });
out("brand/rh-logo.svg", logoSvg(light, { size: 256 }));
out("brand/rh-logo-reversed.svg", logoSvg(dark, { size: 256 }));
out("brand/rh-logo-simple.svg", logoSvg(light, { detail: "simple", size: 64 }));
out("brand/rh-logo-mono.svg", logoSvg(mono, { size: 256 }));
out("brand/rh-icon.svg", logoSvg(dark, { size: 512, background: C.ink, radius: 14, padding: 6 }));
out("brand/rh-avatar.svg", logoSvg(dark, { size: 1024, background: C.ink, padding: 10 }));

// Favicon: simple version on a rounded ink tile
out("app/icon.svg", logoSvg(dark, { detail: "simple", size: 32, background: C.ink, radius: 12, padding: 3 }));

// Labelled diagram (for presentations / the About page explanation)
const inner = logoSvg(light).replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "");
const lab = (x: number, y: number, anchor: string, text: string, color: string) =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="Georgia, serif" font-size="6" fill="${color}">${text}</text>`;
const [s, t, f, b] = CORNERS.map((c) => C.light[c.key]);
out(
  "brand/rh-four-corners.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-46 -6 156 76" width="780" height="380">` +
    `<rect x="-46" y="-6" width="156" height="76" fill="${C.paper}"/>${inner}` +
    `<path d="M2 14.5h-8M62 14.5h8M2 51h-8M62 51h8" stroke="#888780" stroke-width="0.4"/>` +
    lab(-8, 16.5, "end", "Strategy", s) + lab(72, 16.5, "start", "Tech", t) +
    lab(-8, 53, "end", "Family", f) + lab(72, 53, "start", "Football", b) +
    `</svg>`,
);
console.log("brand files written");

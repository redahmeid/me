// The "four corners" logo: RH framed by four corners, one for each part of Reda's life.
//   top left  = strategy (target)      top right    = tech (circuit trace + code chevron)
//   bottom left = family (heart)       bottom right = football (pitch corner arc + flag)
// Plain TypeScript with no React, so the site, favicon, share image and the brand/ files
// are all drawn from this one definition. Drawn on a 64x64 grid.

export type LogoColors = { ink: string; strategy: string; tech: string; family: string; football: string };

export const LOGO_COLORS = {
  ink: "#121922",
  paper: "#f6f4f0",
  light: { strategy: "#185FA5", tech: "#0F6E56", family: "#993C1D", football: "#3B6D11" },
  dark: { strategy: "#85B7EB", tech: "#5DCAA5", family: "#F0997B", football: "#97C459" },
};

export const CORNERS = [
  { key: "strategy", label: "Strategy", position: "top left" },
  { key: "tech", label: "Tech", position: "top right" },
  { key: "family", label: "Family", position: "bottom left" },
  { key: "football", label: "Football", position: "bottom right" },
] as const;

/**
 * Inner SVG markup for a viewBox of "0 0 64 64".
 * "full" includes the small corner symbols (use at 48px and up);
 * "simple" is corners + RH only, with heavier strokes, for favicons and the header.
 */
export function logoInner(c: LogoColors, detail: "full" | "simple" = "full"): string {
  const simple = detail === "simple";
  const w = simple ? 5 : 2.4;
  const corners =
    `<path d="M6 22V6h16" fill="none" stroke="${c.strategy}" stroke-width="${w}"/>` +
    `<path d="M42 6h16v16" fill="none" stroke="${c.tech}" stroke-width="${w}"/>` +
    `<path d="M22 58H6V42" fill="none" stroke="${c.family}" stroke-width="${w}"/>` +
    `<path d="M58 42v16H42" fill="none" stroke="${c.football}" stroke-width="${w}"/>`;

  const symbols = simple
    ? ""
    : // strategy: target
      `<circle cx="14.5" cy="14.5" r="3.8" fill="none" stroke="${c.strategy}" stroke-width="1.3"/>` +
      `<circle cx="14.5" cy="14.5" r="1.1" fill="${c.strategy}"/>` +
      `<path d="M14.5 8.6v2.4M14.5 18v2.4M8.6 14.5h2.4M18 14.5h2.4" stroke="${c.strategy}" stroke-width="1.3"/>` +
      // tech: circuit trace with nodes, branching into the corner
      `<circle cx="42" cy="6" r="2.1" fill="${c.tech}"/><circle cx="58" cy="22" r="2.1" fill="${c.tech}"/>` +
      `<path d="M52 6v5.5l-3.5 3.5" fill="none" stroke="${c.tech}" stroke-width="1.3"/><circle cx="48" cy="15.5" r="1.7" fill="${c.tech}"/>` +
      // family: heart
      `<path d="M14 54.5l-3.6-3.6a2.1 2.1 0 0 1 3.6-2.9 2.1 2.1 0 0 1 3.6 2.9Z" fill="${c.family}"/>` +
      // football: corner arc and corner flag
      `<path d="M58 50.5a7.5 7.5 0 0 0-7.5 7.5" fill="none" stroke="${c.football}" stroke-width="1.4"/>` +
      `<path d="M58 41V32" stroke="${c.football}" stroke-width="1.3"/><path d="M57.4 32l-5.4 2.2 5.4 2.2Z" fill="${c.football}"/>`;

  // Monoline RH, centred. Cap height 23.5 to 40 on the 64 grid.
  const rh =
    `<g transform="${simple ? "translate(32 31.75) scale(1.28) translate(-32 -31.75)" : "translate(-0.5 0)"}">` +
    `<path d="M20.5 40V25h5a3.75 3.75 0 0 1 0 7.5h-5" fill="none" stroke="${c.ink}" stroke-width="3"/>` +
    `<path d="M23.64 32.5h3.72l5.5 7.5h-3.72Z" fill="${c.ink}"/>` +
    `<path d="M36.5 23.5V40M44.5 23.5V40M36.5 32.5h8" fill="none" stroke="${c.ink}" stroke-width="3"/>` +
    `</g>`;

  return corners + symbols + rh;
}

/** A complete SVG document. `background` fills the square; `radius` rounds it (for app tiles). */
export function logoSvg(c: LogoColors, opts: { detail?: "full" | "simple"; size?: number; background?: string; radius?: number; padding?: number } = {}): string {
  const { detail = "full", size = 64, background, radius = 0, padding = 0 } = opts;
  const scale = (64 - padding * 2) / 64;
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${size}" height="${size}">` +
    (background ? `<rect width="64" height="64" rx="${radius}" fill="${background}"/>` : "") +
    `<g transform="translate(${padding} ${padding}) scale(${scale})">${logoInner(c, detail)}</g></svg>`
  );
}

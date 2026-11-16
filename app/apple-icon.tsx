import { ImageResponse } from "next/og";
import { LOGO_COLORS, logoSvg } from "@/components/logo-shapes";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS rounds the corners itself, so this is a full-bleed square.
const svg = logoSvg({ ink: LOGO_COLORS.paper, ...LOGO_COLORS.dark }, { size: 180, background: LOGO_COLORS.ink, padding: 12 });
const src = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

export default function AppleIcon() {
  return new ImageResponse(<img src={src} alt="" width={180} height={180} />, size);
}

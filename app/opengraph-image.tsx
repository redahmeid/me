import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { LOGO_COLORS, logoSvg } from "@/components/logo-shapes";

export const alt = `${site.name}: technology strategy, engineering leadership and AI`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Read once at module scope so the image prerenders at build time.
const photo = await readFile(join(process.cwd(), "assets/reda-hmeid.jpg"));
const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

const markSvg = logoSvg({ ink: "#eef0f3", ...LOGO_COLORS.dark }, { size: 96 });
const markSrc = `data:image/svg+xml;base64,${Buffer.from(markSvg).toString("base64")}`;

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#111925" }}>
        {/* Photo is 1922x1332; scaled to 1240 wide and nudged up-left to keep the face in frame */}
        <img src={photoSrc} alt="" width={1240} height={859} style={{ position: "absolute", top: -60, left: -40 }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            background: "linear-gradient(90deg, rgba(17,25,37,0) 38%, rgba(17,25,37,0.7) 60%, rgba(17,25,37,0.94) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 64,
            top: 0,
            bottom: 0,
            width: 470,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "#eef0f3",
          }}
        >
          <img src={markSrc} alt="" width={96} height={96} style={{ marginLeft: -6 }} />
          <div style={{ fontSize: 76, lineHeight: 1, marginTop: 22, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ fontSize: 26, lineHeight: 1.35, marginTop: 24, opacity: 0.9 }}>
            Head of Technology Strategy & AI in the SDLC at Equal Experts. Founder of TeamMate.
          </div>
        </div>
      </div>
    ),
    size,
  );
}

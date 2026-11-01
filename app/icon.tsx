import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#121922",
          color: "#f6f4f0",
          borderRadius: 32,
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        RH
      </div>
    ),
    size,
  );
}

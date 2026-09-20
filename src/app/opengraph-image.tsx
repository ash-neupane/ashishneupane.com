import { ImageResponse } from "next/og";
import { PERSONAL } from "@/data/resume";

export const dynamic = "force-static";
export const alt = `${PERSONAL.name} — ${PERSONAL.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#a8ba9a",
          color: "#0c2a1e",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700 }}>{PERSONAL.name}</div>
        <div style={{ fontSize: 44, marginTop: 16, color: "#4d5d46" }}>
          {PERSONAL.title}
        </div>
      </div>
    ),
    size,
  );
}

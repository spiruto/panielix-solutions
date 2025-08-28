// app/opengraph-image.tsx
import { getTranslations } from "next-intl/server";
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Panielix Solutions — High-Converting Websites";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const t = await getTranslations('Opengraph');

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          background: "#101a23",
          color: "white",
          padding: "64px",
          fontSize: 56,
          fontWeight: 800,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>{t("brandName")}</div>
          <div style={{ fontSize: 36, fontWeight: 500 }}>
            {t("desc")}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

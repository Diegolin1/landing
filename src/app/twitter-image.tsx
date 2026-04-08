import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(140deg, #111827 0%, #1e40af 55%, #3b82f6 100%)",
          color: "#ffffff",
          padding: "56px 64px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#22c55e",
            }}
          />
          Gestory
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Menos errores operativos, mas ventas en todos tus canales
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 500,
              color: "rgba(255,255,255,0.88)",
            }}
          >
            POS offline | Inventario en tiempo real | Portal B2B
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "rgba(255,255,255,0.92)",
          }}
        >
          <span>Prueba y demo guiada</span>
          <span>gestory.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

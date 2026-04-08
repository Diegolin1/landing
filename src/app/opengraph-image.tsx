import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
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
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a8a 45%, #2563eb 100%)",
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
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.02em",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 999,
              background: "#22c55e",
            }}
          />
          Gestory
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            ERP + POS + CFDI 4.0 para crecer con control
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "rgba(255,255,255,0.86)",
            }}
          >
            Inventario multi-almacen | Pedidos B2B | Auto-facturacion QR
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          <span>Demo en 15 minutos</span>
          <span>gestory.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

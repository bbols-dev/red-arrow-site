import { ImageResponse } from "next/og";

export const alt = "SuitProof — Lawsuit Protection for Shopify Stores";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #1A1A1A 0%, #2A2020 50%, #1A1A1A 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background orbs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,84,77,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(155,143,212,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Shield icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "linear-gradient(135deg, #C9544D, #D4716B)",
            marginBottom: 32,
            boxShadow: "0 8px 32px rgba(201,84,77,0.4)",
          }}
        >
          <svg width="44" height="48" viewBox="0 0 24 26" fill="none">
            <path
              d="M12 1L3 5v7c0 6.5 5.4 11.4 9 12.5 3.6-1.1 9-6 9-12.5V5L12 1z"
              fill="white"
              fillOpacity="0.95"
            />
            <path
              d="M10.5 16.5l-3-3 1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z"
              fill="#C9544D"
            />
          </svg>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "white",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          SuitProof
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Scan your Shopify store for the compliance gaps that get brands sued
        </div>

        {/* Risk categories pill */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 40,
          }}
        >
          {["ADA", "FTC", "CCPA", "Prop 65"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 20px",
                borderRadius: 50,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.7)",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}

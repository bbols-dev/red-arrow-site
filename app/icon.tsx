import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          background: "linear-gradient(135deg, #C9544D 0%, #D4716B 100%)",
          borderRadius: 6,
        }}
      >
        {/* Shield shape via SVG */}
        <svg
          width="22"
          height="24"
          viewBox="0 0 24 26"
          fill="none"
        >
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
    ),
    { ...size }
  );
}

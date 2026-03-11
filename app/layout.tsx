import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SuitProof — Lawsuit Protection for Shopify Stores",
  description:
    "Scan your Shopify store for the compliance gaps that get brands sued. ADA, FTC, CCPA, Prop 65 — find your risk and fix it before a plaintiff does.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

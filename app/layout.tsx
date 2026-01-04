import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feeble - Business Transformation Consulting",
  description:
    "Transforming business inefficiencies into high-impact solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

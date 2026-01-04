import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coup",
  description:
    "Coup lets you, your team, or AI workflows send iMessages directly from your phone number, running securely on your Mac or Mac Mini.",
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

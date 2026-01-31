import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RSM (राष्ट्रमा) | Nation-Building Through Action",
  description: "RSM (राष्ट्रमा) is a nation-building social service platform inspired by Netaji Subhas Chandra Bose. Building a disciplined, self-reliant India through action.",
  keywords: "RSM, राष्ट्रमा, Netaji, Subhas Chandra Bose, Nation Building, India, Youth, Service, Discipline",
  authors: [{ name: "RSM (राष्ट्रमा)" }],
  openGraph: {
    title: "RSM (राष्ट्रमा) | Nation-Building Through Action",
    description: "Inspired by Netaji Subhas Chandra Bose. Building a disciplined, self-reliant India through action.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

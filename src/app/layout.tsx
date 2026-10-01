import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rashtrama (RSM) | सब राष्ट्र का!",
  description: "Rashtrama is a youth-driven political and nation-building movement inspired by Netaji Subhas Chandra Bose. India's next generation will lead the world's largest democracy.",
  keywords: "Rashtrama, RSM, राष्ट्रमा, Netaji, Subhas Chandra Bose, Nation Building, India, Youth, Political Movement",
  authors: [{ name: "Rashtrama (RSM)" }],
  openGraph: {
    title: "Rashtrama (RSM) | सब राष्ट्र का!",
    description: "Inspired by Netaji. Driven & Led by Youth. Committed to Bharat.",
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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

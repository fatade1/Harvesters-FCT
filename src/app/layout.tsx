import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Harvesters FCT | Coming Soon",
  description: "Harvesters FCT is an upcoming campus of Harvesters International Christian Centre, coming to the Federal Capital Territory. Join the community, partner with us, or join the workforce.",
  keywords: ["Harvesters FCT", "Harvesters Abuja", "Church in FCT", "Church in Abuja", "Harvesters International Christian Centre", "Christian community Abuja"],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "Harvesters FCT | Coming Soon",
    description: "A new Harvesters community is coming to the FCT. Be part of it from the beginning.",
    type: "website",
    locale: "en_NG",
    siteName: "Harvesters FCT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harvesters FCT | Coming Soon",
    description: "A new Harvesters community is coming to the FCT. Be part of it from the beginning.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main style={{ paddingTop: '72px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

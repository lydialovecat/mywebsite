import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zhenruifood.com"),
  title: {
    default: "Zhenrui Food | Food Enzyme Manufacturer for Bakery Processing",
    template: "%s | Zhenrui Food",
  },
  description:
    "Guangzhou ZhenRuiZhiChuang Biotech provides customized food enzyme solutions for biscuits, bread, bakery processing, and food manufacturers.",
  keywords: [
    "food enzyme manufacturer",
    "food enzyme supplier",
    "customized food enzyme solutions",
    "bakery enzyme solutions",
    "biscuit enzyme",
    "bread moisturizing enzyme",
  ],
  openGraph: {
    title: "Zhenrui Food | Customized Food Enzyme Solutions",
    description:
      "B2B food enzyme solutions for bakery, biscuits, bread, rice products, and flour-based food processing.",
    url: "https://www.zhenruifood.com",
    siteName: "Zhenrui Food",
    images: [
      {
        url: "/images/catalog-cover.jpg",
        width: 1280,
        height: 835,
        alt: "Zhenrui Food product brochure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

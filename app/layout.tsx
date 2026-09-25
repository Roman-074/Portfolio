import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { asset, site } from "../content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const socialImage = `${site.url}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: {
    canonical: `${site.url}/`,
  },
  icons: {
    icon: asset("/favicon.svg"),
    shortcut: asset("/favicon.svg"),
  },
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: site.locale,
    url: `${site.url}/`,
    images: [{ url: socialImage, width: 1200, height: 630, alt: site.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [socialImage],
  },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}

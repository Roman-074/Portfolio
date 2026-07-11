import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Senior Android Developer — Portfolio";
const description = "Портфолио Senior Android-разработчика: Kotlin, Jetpack Compose, архитектура и продуктовая инженерия.";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const siteUrl = isGitHubPages
  ? "https://roman-074.github.io/Portfolio"
  : "https://android-systems-portfolio.romanf.chatgpt.site";
const assetPrefix = isGitHubPages ? "/Portfolio" : "";
const socialImage = `${siteUrl}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: `${assetPrefix}/favicon.svg`,
    shortcut: `${assetPrefix}/favicon.svg`,
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    images: [{ url: socialImage, width: 1731, height: 909, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

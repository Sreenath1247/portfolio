import type { Metadata } from "next";
import { Gabarito, Be_Vietnam_Pro } from "next/font/google";
import { SITE_CONFIG } from "@/config";
import "./globals.css";

const gabaritoSans = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
});

const beVietNamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  authors: [{ name: SITE_CONFIG.author }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.canonicalURL,
    images: [SITE_CONFIG.socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.socialImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"
    className={`${gabaritoSans.variable} ${beVietNamPro.variable} scroll-pt-16 scroll-smooth`}
    >
      <body className="bg-black font-sans">{children}</body>
    </html>
  );
}

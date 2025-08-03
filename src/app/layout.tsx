import type { Metadata, Viewport } from "next";
import { Cinzel, Geist_Mono } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Engarde Eskrim Kulübü - Modern Eskrim Eğitimi",
  description: "Profesyonel eskrim eğitimi, modern ekipmanlar ve yarışma fırsatları. Foil, Epee ve Sabre kategorilerinde uzman eğitmenler.",
  keywords: "eskrim, eskrim kulübü, foil, epee, sabre, kılıç, antrenman, yarışma, istanbul eskrim, türkiye eskrim",
  authors: [{ name: "Engarde Eskrim Kulübü" }],
  creator: "Engarde Eskrim Kulübü",
  publisher: "Engarde Eskrim Kulübü",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://engarde-eskrim.com',
    title: 'Engarde Eskrim Kulübü - Modern Eskrim Eğitimi',
    description: 'Profesyonel eskrim eğitimi, modern ekipmanlar ve yarışma fırsatları. Foil, Epee ve Sabre kategorilerinde uzman eğitmenler.',
    siteName: 'Engarde Eskrim Kulübü',
    images: [
      {
        url: '/engardelogo.png',
        width: 1200,
        height: 630,
        alt: 'Engarde Eskrim Kulübü Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engarde Eskrim Kulübü - Modern Eskrim Eğitimi',
    description: 'Profesyonel eskrim eğitimi, modern ekipmanlar ve yarışma fırsatları.',
    images: ['/engardelogo.png'],
  },
  alternates: {
    canonical: 'https://engarde-eskrim.com',
  },
  category: 'sports',
  classification: 'eskrim kulübü',
  other: {
    'theme-color': '#3B82F6',
    'msapplication-TileColor': '#3B82F6',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Engarde Eskrim" />
        <link rel="apple-touch-icon" href="/engardelogo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/engardelogo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/engardelogo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${cinzel.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 min-h-screen font-cinzel`}
      >
        {children}
      </body>
    </html>
  );
}

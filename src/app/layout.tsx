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

export const metadata: Metadata = {
  title: "Engarde Eskrim Kulübü - Modern Eskrim Eğitimi",
  description: "Profesyonel eskrim eğitimi, modern ekipmanlar ve yarışma fırsatları. Foil, Epee ve Sabre kategorilerinde uzman eğitmenler.",
  keywords: "eskrim, eskrim kulübü, foil, epee, sabre, kılıç, antrenman, yarışma",
  authors: [{ name: "Engarde Eskrim Kulübü" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

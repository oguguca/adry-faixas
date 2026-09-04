import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adry-faixas.guguxtaa.chatgpt.site"),
  title: "Adry Faixas | Comunicação Visual em São Paulo",
  description:
    "Faixas, fachadas, adesivos, placas e letreiros com produção própria em São Paulo desde 1993.",
  keywords: [
    "comunicação visual São Paulo",
    "faixas personalizadas",
    "fachadas",
    "adesivos",
    "placas",
    "letreiros",
  ],
  openGraph: {
    title: "Adry Faixas | Comunicação Visual em São Paulo",
    description:
      "Produção própria de faixas, fachadas, adesivos, placas e letreiros em São Paulo.",
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Adry Faixas",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Adry Faixas — Comunicação Visual em São Paulo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adry Faixas | Comunicação Visual em São Paulo",
    description: "Produção própria em São Paulo desde 1993.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>{children}</body>
    </html>
  );
}

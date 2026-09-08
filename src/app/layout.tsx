import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Adry Faixas — Comunicação visual em São Paulo",
  description:
    "Faixas, fachadas, adesivos, placas e letreiros. Mais de 30 anos de produção própria em São Paulo, do primeiro WhatsApp à peça instalada.",
  metadataBase: new URL("https://adry-faixas.vercel.app"),
  openGraph: {
    title: "Adry Faixas — Comunicação visual em São Paulo",
    description:
      "Faixas, fachadas, adesivos, placas e letreiros. Mais de 30 anos de produção própria em São Paulo.",
    url: "https://adry-faixas.vercel.app",
    siteName: "Adry Faixas",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${archivo.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}

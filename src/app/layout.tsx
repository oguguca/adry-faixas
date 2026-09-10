import type { Metadata } from "next";
import { Anton, Archivo, Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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

const anton = Anton({
  variable: "--font-about",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Adry Faixas — Comunicação visual em São Paulo",

  description:
    "Faixas, fachadas, adesivos, placas e letreiros. Mais de 30 anos de produção própria em São Paulo, do primeiro contato à peça instalada.",

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
    <html lang="pt-BR" className={cn("font-sans", geist.variable)}>
      <body
        className={`${archivo.variable} ${inter.variable} ${anton.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
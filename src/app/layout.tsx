import type { Metadata } from "next";
import { Archivo_Black, Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adry-faixas.guguxtaa.chatgpt.site"),
  title: "Adry Faixas | Comunicação Visual em São Paulo",
  description:
    "Faixas, fachadas, placas, adesivos e letreiros em São Paulo. Mais de 30 anos transformando ideias em comunicação visual.",
  keywords: [
    "comunicação visual São Paulo",
    "faixas personalizadas",
    "fachadas",
    "adesivos",
    "placas",
    "letreiros",
  ],
  openGraph: {
    title: "Adry Faixas | Comunicação Visual",
    description: "Sua marca precisa ser vista.",
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Adry Faixas",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Adry Faixas — Sua marca precisa ser vista.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adry Faixas | Comunicação Visual",
    description: "Sua marca precisa ser vista.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${archivoBlack.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    description: "Sua marca não passa despercebida.",
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Adry Faixas",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Adry Faixas — Sua marca não passa despercebida.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adry Faixas | Comunicação Visual",
    description: "Sua marca não passa despercebida.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

"use client";

import { useState } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#" className="text-lg font-bold tracking-wide">
          Adry Faixas
        </a>

        {/* Menu desktop */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Menu principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 hover:text-orange-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-400"
          >
            Orçamento via WhatsApp
          </a>
        </nav>

        {/* Botão hambúrguer mobile */}
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav
          className="flex flex-col gap-4 border-t border-white/10 px-4 py-4 md:hidden"
          aria-label="Menu mobile"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 px-4 py-2 text-center text-sm font-semibold text-black"
            onClick={() => setMenuOpen(false)}
          >
            Orçamento via WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

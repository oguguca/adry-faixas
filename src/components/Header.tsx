"use client";

import Image from "next/image";
import { useState } from "react";
import { CONTACT_LINK } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#portfolio" },
  { label: "A Adry", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Adry Faixas — início">
          <Image
            src="/images/logo-adry-dark.png"
            alt="Adry Comunicação Visual"
            width={520}
            height={146}
            preload
          />
        </a>

        <p className="header-note">
          <span aria-hidden="true" /> Produção sob medida em São Paulo
        </p>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="button button--dark header-cta"
          data-magnet
          href={CONTACT_LINK}
          target="_blank"
          rel="noreferrer"
        >
          Pedir orçamento <span aria-hidden="true">↗</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Navegação mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="button button--orange"
              href={CONTACT_LINK}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Orçamento no WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </nav>
        )}
    </header>
  );
}

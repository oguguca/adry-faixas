"use client";

import Image from "next/image";
import { useState } from "react";
import { CONTACT_LINK } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#portfolio" },
  { label: "A Adry", href: "#sobre" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="announcement">
        <span>Comunicação visual em São Paulo</span>
        <span className="announcement__dot" aria-hidden="true" />
        <span>Mais de 30 anos de experiência</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Adry Faixas — início">
          <Image
            src="/images/logo-adry.jpg"
            alt="Adry Comunicação Visual"
            width={150}
            height={150}
            priority
          />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="button button--dark header-cta"
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
              Pedir orçamento <span aria-hidden="true">↗</span>
            </a>
          </nav>
        )}
      </header>
    </>
  );
}

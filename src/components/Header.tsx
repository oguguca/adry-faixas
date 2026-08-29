"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CONTACT_LINK } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#portfolio" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "A Adry", href: "#sobre" },
  { label: "Dúvidas", href: "#duvidas" },
];

const TRACKED_SECTION_IDS = [
  ...NAV_LINKS.map((link) => link.href.replace("#", "")),
  "contato",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = TRACKED_SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((section): section is HTMLElement => Boolean(section));

    let animationFrame = 0;

    const updateActiveSection = () => {
      animationFrame = 0;

      const header = document.querySelector<HTMLElement>(".site-header");
      const headerHeight = header?.offsetHeight ?? 84;

      /*
       * A linha imaginária usada para decidir qual seção está ativa
       * fica um pouco abaixo do topo da área visível.
       * Isso deixa a troca de aba estável mesmo com scroll suave/snap.
       */
      const visibleArea = Math.max(window.innerHeight - headerHeight, 1);
      const probeY = headerHeight + visibleArea * 0.34;

      const currentSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();

        return rect.top <= probeY && rect.bottom > probeY;
      });

      setActiveSection(currentSection?.id ?? "");
    };

    const requestUpdate = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", requestUpdate);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

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
        <span aria-hidden="true" />
        Comunicação visual em São Paulo
      </p>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {NAV_LINKS.map((link) => {
          const sectionId = link.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <a
              key={link.href}
              href={link.href}
              className={isActive ? "is-active" : undefined}
              aria-current={isActive ? "location" : undefined}
              onClick={() => handleNavClick(sectionId)}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

      <a
        className="button button--orange header-cta"
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
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                className={isActive ? "is-active" : undefined}
                aria-current={isActive ? "location" : undefined}
                onClick={() => handleNavClick(sectionId)}
              >
                {link.label}
              </a>
            );
          })}

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

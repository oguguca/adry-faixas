"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CONTACT_LINK } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos", index: "01" },
  { label: "Trabalhos", href: "#portfolio", index: "02" },
  { label: "Como funciona", href: "#como-funciona", index: "03" },
  { label: "A Adry", href: "#sobre", index: "04" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hasScrolled, setHasScrolled] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let animationFrame = 0;

    const updateHeaderState = () => {
      animationFrame = 0;

      const header = document.querySelector<HTMLElement>(".site-header");
      const headerHeight = header?.offsetHeight ?? 76;
      const probeY =
        window.scrollY +
        headerHeight +
        Math.max(window.innerHeight - headerHeight, 1) * 0.24;

      let currentSection = "";

      for (const link of NAV_LINKS) {
        const sectionId = link.href.slice(1);
        const section = document.getElementById(sectionId);

        if (!section) continue;

        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        if (sectionTop <= probeY) {
          currentSection = sectionId;
        }
      }

      const contact = document.getElementById("contato");

      if (contact) {
        const contactTop =
          contact.getBoundingClientRect().top + window.scrollY;

        if (contactTop <= probeY) {
          currentSection = "";
        }
      }

      setActiveSection(currentSection);
      setHasScrolled(window.scrollY > 8);
    };

    const requestUpdate = () => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(updateHeaderState);
    };

    updateHeaderState();

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

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.documentElement.style.overflow;

    document.documentElement.style.overflow = "hidden";

    window.requestAnimationFrame(() => {
      firstMobileLinkRef.current?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        window.requestAnimationFrame(() => {
          menuButtonRef.current?.focus();
        });
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 960) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <header
      className={`site-header${hasScrolled ? " has-scrolled" : ""}`}
    >
      <div className="site-header__inner section-shell">
        <a
          className="brand"
          href="#inicio"
          aria-label="Adry Faixas — voltar ao início"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/logo-adry-dark.png"
            alt="Adry Comunicação Visual"
            width={520}
            height={146}
            preload
          />

          <span className="brand__signature" aria-hidden="true">
            <span>Desde 1993</span>
            <strong>São Paulo · SP</strong>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.slice(1);
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
          className="header-cta"
          href={CONTACT_LINK}
          target="_blank"
          rel="noreferrer"
        >
          Pedir orçamento
        </a>

        <button
          ref={menuButtonRef}
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav
          className="mobile-nav"
          id="mobile-navigation"
          aria-label="Navegação mobile"
        >
          <div className="mobile-nav__inner section-shell">
            <div className="mobile-nav__intro" aria-hidden="true">
              <span>Navegação</span>
              <p>Comunicação visual em São Paulo desde 1993.</p>
            </div>

            <div className="mobile-nav__links">
              {NAV_LINKS.map((link, index) => {
                const sectionId = link.href.slice(1);
                const isActive = activeSection === sectionId;

                return (
                  <a
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                    key={link.href}
                    href={link.href}
                    className={isActive ? "is-active" : undefined}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => handleNavClick(sectionId)}
                  >
                    <span className="mobile-nav__index" aria-hidden="true">
                      {link.index}
                    </span>
                    <span className="mobile-nav__label">{link.label}</span>
                    <span className="mobile-nav__mark" aria-hidden="true">
                      →
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mobile-nav__footer">
              <a
                className="button button--accent button--large"
                href={CONTACT_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Pedir orçamento no WhatsApp
              </a>

              <span>Produção própria · São Paulo</span>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

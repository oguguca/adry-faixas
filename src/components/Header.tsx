"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT_LINK } from "@/lib/constants";

const NAV_ITEMS = [
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "A Adry" },
  { href: "#duvidas", label: "Dúvidas" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const navigationFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1080px)");
    const handleBreakpoint = (event: MediaQueryListEvent) => {
      // Hidden links lose focus before the media query change event fires.
      const active = document.activeElement === document.body
        ? navigationFocusRef.current
        : document.activeElement;

      if (event.matches) {
        if (active instanceof HTMLElement && (
          active.closest(".mobile-nav") || active === menuToggleRef.current
        )) {
          const links = headerRef.current?.querySelectorAll<HTMLAnchorElement>(".site-header__inner a");
          const destination = Array.from(links ?? []).find(
            (link) => link.getAttribute("href") === active.getAttribute("href"),
          ) ?? headerRef.current?.querySelector<HTMLAnchorElement>(".desktop-nav a");
          destination?.focus({ preventScroll: true });
        }
        setOpen(false);
      } else if (active instanceof HTMLElement && active.closest(".desktop-nav")) {
        menuToggleRef.current?.focus({ preventScroll: true });
      }
    };

    desktop.addEventListener("change", handleBreakpoint);
    return () => desktop.removeEventListener("change", handleBreakpoint);
  }, []);

  return (
    <header
      ref={headerRef}
      className="site-header"
      onFocusCapture={(event) => {
        navigationFocusRef.current = event.target;
      }}
      onKeyDown={(event) => {
        if (open && event.key === "Escape") {
          event.preventDefault();
          setOpen(false);
          menuToggleRef.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          if (event.relatedTarget || event.target.getClientRects().length > 0) {
            navigationFocusRef.current = null;
          }
          if (event.relatedTarget) setOpen(false);
        }
      }}
    >
      <div className="section-shell site-header__inner">
        <a
          className="brand"
          href="#inicio"
          aria-label="Adry Faixas — início"
          onClick={() => setOpen(false)}
        >
          Adry <span>comunicação visual</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="btn btn--solid"
            href={CONTACT_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="Pedir orçamento no WhatsApp"
            onClick={() => setOpen(false)}
          >
            Orçamento<span className="header-cta-detail"> no WhatsApp</span>
          </a>

          <button
            ref={menuToggleRef}
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-nav section-shell"
        aria-label="Navegação móvel"
        hidden={!open}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(event) => {
              setOpen(false);
              if (
                event.detail !== 0 ||
                event.ctrlKey ||
                event.metaKey ||
                event.shiftKey ||
                event.altKey
              ) {
                return;
              }

              const destination = document.getElementById(item.href.slice(1));
              if (destination) {
                if (!destination.hasAttribute("tabindex")) destination.tabIndex = -1;
                destination.focus({ preventScroll: true });
              }
            }}
          >
            {item.label}
          </a>
        ))}
        <a
          className="btn btn--solid"
          href={CONTACT_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label="Pedir orçamento no WhatsApp"
          onClick={() => setOpen(false)}
        >
          Orçamento<span className="header-cta-detail"> no WhatsApp</span>
        </a>
      </nav>
    </header>
  );
}

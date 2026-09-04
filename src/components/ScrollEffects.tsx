"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!reducedMotion) root.classList.add("motion-ready");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    revealElements.forEach((element) => {
      if (reducedMotion) element.classList.add("is-visible");
      else revealObserver.observe(element);
    });

    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        '.desktop-nav a[href^="#"], .mobile-nav a[href^="#"]',
      ),
    );

    const sections = Array.from(
      new Set(
        navLinks
          .map((link) => document.querySelector<HTMLElement>(link.hash))
          .filter((section): section is HTMLElement => Boolean(section)),
      ),
    );

    const setActive = (id: string) => {
      navLinks.forEach((link) => {
        const active = link.hash === `#${id}`;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };

    const navObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target instanceof HTMLElement) setActive(visible.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.01, 0.15, 0.35] },
    );

    sections.forEach((section) => navObserver.observe(section));

    return () => {
      revealObserver.disconnect();
      navObserver.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}

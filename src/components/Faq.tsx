"use client";

import { useEffect, useRef, useState } from "react";

import { FAQS } from "@/lib/content";
import { CONTACT_LINK } from "@/lib/constants";

export default function Faq() {
  const sectionRef = useRef<HTMLElement>(null);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      section.classList.add("faq--visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        section.classList.add("faq--visible");
        observer.disconnect();
      },
      {
        threshold: 0.18,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="faq section-shell"
      id="duvidas"
      tabIndex={-1}
    >
      <div className="faq__layout">
        <div className="faq__intro">
          <span className="faq__eyebrow">
            Dúvidas frequentes
          </span>

          <h2>
            Antes de chamar no WhatsApp.
          </h2>

          <p className="faq__intro-copy">
            Separei aqui as respostas para o que normalmente perguntam antes
            de pedir um orçamento.
          </p>

          <a
            className="faq__contact"
            href={CONTACT_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Ainda ficou com dúvida? Fale com a gente

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>

        <div className="faq-list">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <details
                className="faq-item"
                key={item.question}
                open={isOpen}
              >
                <summary
                  onClick={(event) => {
                    event.preventDefault();

                    setOpenIndex((currentIndex) =>
                      currentIndex === index ? null : index,
                    );
                  }}
                >
                  <span className="faq-item__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="faq-item__question">
                    {item.question}
                  </span>

                  <i
                    className="faq-item__icon"
                    aria-hidden="true"
                  />
                </summary>

                <div className="faq-item__answer-wrap">
                  <p className="faq-item__answer">
                    {item.answer}
                  </p>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}

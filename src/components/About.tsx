"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CONTACT_LINK } from "@/lib/constants";
import ScrollFloat from "@/components/ScrollFloat";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const reveal = revealRef.current;
    const visual = visualRef.current;

    if (!section || !reveal || !visual) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) return;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      /*
        DESKTOP:
        O mascote começa deslocado para a esquerda, por cima da área
        onde o conteúdo ficará. Conforme a seção entra na tela,
        ele desliza para a direita e o conteúdo é revelado atrás dele.
      */
      media.add("(min-width: 851px)", () => {
        gsap.set(visual, {
          xPercent: -112,
          scale: 1.08,
          rotation: -2,
        });

        gsap.set(reveal, {
          clipPath: "inset(0 100% 0 0)",
          opacity: 0.25,
        });

        gsap.set(".about__stat, .about__copy > *", {
          y: 22,
          opacity: 0.2,
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 84%",
            end: "top 18%",
            scrub: 1.15,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to(
            visual,
            {
              xPercent: 0,
              scale: 1,
              rotation: 0,
              ease: "none",
              duration: 1,
            },
            0,
          )
          .to(
            reveal,
            {
              clipPath: "inset(0 0% 0 0)",
              opacity: 1,
              ease: "none",
              duration: 0.9,
            },
            0.08,
          )
          .to(
            ".about__stat, .about__copy > *",
            {
              y: 0,
              opacity: 1,
              stagger: 0.055,
              ease: "none",
              duration: 0.55,
            },
            0.2,
          );
      });

      /*
        TABLET / MOBILE:
        Em telas menores evitamos o movimento horizontal grande.
        O conteúdo entra de baixo de forma leve e legível.
      */
      media.add("(max-width: 850px)", () => {
        gsap.fromTo(
          [reveal, visual],
          {
            y: 34,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, section);

    const refreshId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(refreshId);
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about"
      id="sobre"
      tabIndex={-1}
    >
      <div className="section-shell about__inner">
        <div className="about__intro">
          <span className="about__eyebrow">A Adry</span>

          <ScrollFloat
            containerClassName="about__headline"
            textClassName="about__headline-text"
            animationDuration={0.9}
            ease="power2.out"
            stagger={0.012}
          >
            Experiência que aparece no acabamento.
          </ScrollFloat>
        </div>

        <div className="about__bottom">
          <div
            ref={revealRef}
            className="about__reveal"
          >
            <div className="about__stat">
              <strong>30+</strong>

              <span>
                anos de
                <br />
                experiência
              </span>
            </div>

            <div className="about__copy">
              <p className="about__lead">
                Há mais de 30 anos, a Adry transforma espaços, fachadas,
                veículos e pontos comerciais por meio da comunicação visual.
              </p>

              <p>
                Cada projeto é acompanhado de perto, da escolha do material ao
                acabamento final, buscando uma solução que funcione para o
                espaço, para o uso e para a marca.
              </p>

              <a
                className="about__cta"
                href={CONTACT_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Conversar sobre meu projeto

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
          </div>

          <div
            ref={visualRef}
            className="about__visual"
          >
            <div className="about__visual-accent" />

            <Image
              src="/images/lucas1.png"
              alt="Mascote da Adry Comunicação Visual apresentando a marca"
              width={900}
              height={1125}
              className="about__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

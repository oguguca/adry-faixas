"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/content";
import { getWhatsAppLink } from "@/lib/constants";

export default function Portfolio() {
  const [selected, setSelected] = useState<(typeof PROJECTS)[number] | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!selected || !dialog) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  function renderProject(project: (typeof PROJECTS)[number]) {
    return (
      <button
        className="portfolio-card"
        type="button"
        key={project.src}
        onClick={() => setSelected(project)}
        aria-label={`Ampliar projeto: ${project.title}`}
        aria-haspopup="dialog"
      >
        <span className="portfolio-card__image">
          <Image
            src={project.src}
            alt={project.alt}
            width={project.width}
            height={project.height}
            sizes="(max-width: 599px) 100vw, (max-width: 899px) 50vw, 66vw"
          />
        </span>
        <span className="portfolio-card__caption">
          <span className="portfolio-card__category">{project.category}</span>
          <strong>{project.title}</strong>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M14 4h6v6M20 4l-7 7M10 20H4v-6M4 20l7-7" />
          </svg>
        </span>
      </button>
    );
  }

  return (
    <section className="portfolio section--dark" id="projetos" tabIndex={-1}>
      <div className="section-shell">
        <div className="portfolio__heading">
          <div className="section-heading">
            
            <h2>Do nosso trabalho<br />para a sua cidade.</h2>
          </div>
          <p className="portfolio__intro">
            Fachadas, vitrines e marcas em movimento. Conheça alguns trabalhos
            da Adry e amplie as fotos para ver de perto.
          </p>
        </div>

        <div className="portfolio-grid portfolio-grid--featured">
          {PROJECTS.slice(0, 3).map(renderProject)}
        </div>

        <details className="portfolio-more">
          <summary>
            <span className="portfolio-more__show">Ver mais {PROJECTS.length - 3} trabalhos</span>
            <span className="portfolio-more__hide">Recolher trabalhos</span>
            <span className="portfolio-more__icon" aria-hidden="true">+</span>
          </summary>
          <div className="portfolio-grid">
            {PROJECTS.slice(3).map(renderProject)}
          </div>
        </details>
      </div>

      <dialog
        ref={dialogRef}
        className="project-dialog"
        aria-labelledby="project-dialog-title"
        onClose={() => setSelected(null)}
        onPointerDown={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom
          ) {
            // Keep the pointer's default focus action from overriding dialog restoration.
            event.preventDefault();
            event.currentTarget.close();
          }
        }}
      >
        {selected && (
          <>
            <div className="project-dialog__header">
              <div>
                <p className="mono-tag">{selected.category}</p>
                <h2 id="project-dialog-title">{selected.title}</h2>
              </div>
              <button className="project-dialog__close" type="button" onClick={() => dialogRef.current?.close()}>
                Fechar
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
            <div className="project-dialog__image">
              <Image
                src={selected.src}
                alt={selected.alt}
                width={selected.width}
                height={selected.height}
                sizes="(max-width: 1000px) 100vw, 900px"
              />
            </div>
            <div className="project-dialog__footer">
              <p>Uma referência para o seu próximo projeto.</p>
              <a
                className="btn btn--solid"
                href={getWhatsAppLink(`Olá! Vi o projeto ${selected.title} (${selected.category}) no site da Adry e gostaria de um orçamento para algo assim.`)}
                target="_blank"
                rel="noreferrer"
              >
                Quero um projeto assim
              </a>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}

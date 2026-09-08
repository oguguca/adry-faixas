import Image from "next/image";
import { CONTACT_LINK } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="hero" id="inicio" tabIndex={-1}>
      <div className="section-shell hero__inner">
        <div>
          <p className="hero__ticket mono-tag">Comunicação visual em São Paulo</p>

          <h1>
            Sua marca em destaque.
            <span className="hero__subtitle">Na fachada, na vitrine e na rua.</span>
          </h1>

          <p className="hero__lead">
            Faixas, fachadas, adesivos, placas e letreiros sob medida para
            o seu negócio. Da escolha do material ao acabamento.
          </p>

          <div className="hero__actions">
            <a
              className="btn btn--solid"
              href={CONTACT_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Pedir orçamento no WhatsApp
            </a>
            <a className="text-link" href="#projetos">
              Ver trabalhos
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M12 4v16m-6-6 6 6 6-6" />
              </svg>
            </a>
          </div>

          <p className="hero__contact-note">
            Envie uma foto, as medidas ou só a sua ideia.
          </p>
        </div>

        <figure className="hero__project">
          <div className="hero__visual reg-frame">
            <Image
              src="/images/projeto-fachada-brindes-boni.webp"
              alt="Fachada Brindes do Boni produzida pela Adry, com painel preto e detalhes em amarelo e vermelho"
              width={900}
              height={506}
              priority
              sizes="(max-width: 899px) 100vw, 50vw"
            />
          </div>
          <figcaption className="hero__visual-caption">
            <div>
              <span className="mono-tag">Fachada comercial</span>
              <strong>Brindes do Boni</strong>
            </div>
            <span className="hero__project-credit">Feito pela Adry</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

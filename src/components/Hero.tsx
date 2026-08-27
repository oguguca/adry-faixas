import Image from "next/image";
import { CONTACT_LINK } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__content">
        <p className="eyebrow">
          <span>01</span> Impressão, instalação e acabamento
        </p>

        <h1>
          Sua marca não passa <em>despercebida.</em>
        </h1>

        <p className="hero__lead">
          Faixas, fachadas, adesivos, placas e letreiros produzidos por quem
          entende de impacto visual há mais de três décadas.
        </p>

        <div className="hero__actions">
          <a
            className="button button--orange"
            href={CONTACT_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Começar um projeto <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#portfolio">
            Ver projetos <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero__proof" aria-label="Destaques da Adry Faixas">
          <div>
            <strong>30+</strong>
            <span>anos no ramo</span>
          </div>
          <div>
            <strong>SP</strong>
            <span>atendimento local</span>
          </div>
          <div>
            <strong>5</strong>
            <span>soluções principais</span>
          </div>
        </div>
      </div>

      <div className="hero__visual" aria-label="Trabalho produzido pela Adry Faixas">
        <div className="hero__image-main">
          <Image
            src="/images/hero-faixa.jpg"
            alt="Faixa promocional de açougue produzida pela Adry Faixas"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 47vw"
          />
        </div>

        <div className="hero__image-secondary">
          <Image
            src="/images/fachada-odontologia.jpg"
            alt="Fachada de clínica odontológica produzida pela Adry Faixas"
            fill
            priority
            sizes="(max-width: 900px) 42vw, 18vw"
          />
        </div>

        <div className="hero__stamp">
          <span>Feito para</span>
          <strong>chamar atenção</strong>
        </div>

        <span className="hero__caption">Projeto real • São Paulo</span>
      </div>
    </section>
  );
}

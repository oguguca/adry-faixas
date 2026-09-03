import { CONTACT_LINK } from "@/lib/constants";
import HeroVideo from "@/components/HeroVideo";

export default function Hero() {
  return (
    <section className="hero hero--editorial" id="inicio">
      <div className="hero__content">
        <p className="eyebrow">
          <span>Desde 1993</span>
          Comunicação visual em São Paulo
        </p>

        <h1>
          <span>Sua marca,</span>
          <span>do arquivo</span>
          <em>para a rua.</em>
        </h1>

        <p className="hero__lead">
          Faixas, fachadas, adesivos, placas e letreiros produzidos pela própria
          equipe da Adry, em São Paulo.
        </p>

        <div className="hero__actions">
          <a
            className="hero__primary-cta"
            href={CONTACT_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Pedir orçamento
          </a>

          <a className="text-link" href="#portfolio">
            Ver trabalhos
          </a>
        </div>

        <div className="hero__footnote">
          <span>30+ anos de experiência</span>
          <span>Produção própria</span>
          <span>Atendimento direto</span>
        </div>
      </div>

      <div
        className="hero__visual"
        aria-label="Bastidores reais da produção da Adry Faixas"
      >
        <HeroVideo />

        <div className="hero__visual-note">
          <span>Bastidores reais da oficina</span>
          <strong>Produção própria • São Paulo</strong>
        </div>
      </div>
    </section>
  );
}

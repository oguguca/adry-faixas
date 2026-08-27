import { CONTACT_LINK } from "@/lib/constants";
import HeroVideo from "@/components/HeroVideo";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__content">
        <p className="eyebrow">
          <span>Desde 1993</span> Comunicação visual em São Paulo
        </p>

        <h1>
          Seu negócio chama atenção <em>antes mesmo de você falar.</em>
        </h1>

        <p className="hero__lead">
          Faixas, fachadas, adesivos, placas e letreiros feitos sob medida,
          com produção própria e atendimento direto pelo WhatsApp.
        </p>

        <div className="hero__actions">
          <a
            className="button button--orange"
            href={CONTACT_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Pedir orçamento no WhatsApp <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#portfolio">
            Ver trabalhos reais <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero__proof" aria-label="Diferenciais da Adry Faixas">
          <div>
            <strong>30+</strong>
            <span>anos de experiência</span>
          </div>
          <div>
            <strong>Sob medida</strong>
            <span>produção sob medida</span>
          </div>
          <div>
            <strong>SP</strong>
            <span>atendimento próximo</span>
          </div>
        </div>
      </div>

      <div className="hero__visual" aria-label="Bastidores reais do trabalho da Adry Faixas">
        <div className="hero__image-main">
          <HeroVideo />
        </div>

        <div className="hero__video-meta">
          <span>Bastidores reais</span>
          <span>Do arquivo à instalação</span>
        </div>

        <div className="hero__video-steps" aria-label="Etapas exibidas no vídeo">
          <span><b>01</b> Impressão</span>
          <span><b>02</b> Produção</span>
          <span><b>03</b> Instalação</span>
        </div>
      </div>
    </section>
  );
}

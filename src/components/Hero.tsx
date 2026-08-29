import { CONTACT_LINK } from "@/lib/constants";
import HeroVideo from "@/components/HeroVideo";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__content">
        <p className="eyebrow">
          <span>Desde 1993</span>
          Comunicação visual em São Paulo
        </p>

        <h1>
          <span>Comunicação visual</span>
          <span>para quem precisa</span>
          <em>ser visto.</em>
        </h1>

        <p className="hero__lead">
          Fachadas, faixas, adesivos, placas e letreiros feitos sob medida para
          transformar seu ponto, veículo ou espaço em comunicação que chama
          atenção.
        </p>

        <div className="hero__actions">
          <a
            className="button button--orange"
            data-magnet
            href={CONTACT_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Pedir orçamento no WhatsApp <span aria-hidden="true">↗</span>
          </a>

          <a className="text-link" href="#portfolio">
            Ver trabalhos realizados <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div
          className="hero__signature"
          aria-label="Mais de 30 anos de experiência"
        >
          <strong data-count-up="30" data-count-suffix="+">
            30+
          </strong>

          <p>
            anos de experiência, produção própria e atendimento direto para
            tirar sua ideia do papel e colocar sua marca na rua.
          </p>
        </div>
      </div>

      <div
        className="hero__visual"
        aria-label="Bastidores reais do trabalho da Adry Faixas"
      >
        <div className="hero__image-main">
          <HeroVideo />
        </div>

        <div className="hero__video-meta">
          <span>Produção real</span>
          <span>Fachadas • Adesivos • Faixas • Letreiros</span>
        </div>

        <div className="hero__video-caption">
          <span>Da ideia à instalação</span>
          <strong>Sua marca pronta para aparecer.</strong>
        </div>
      </div>
    </section>
  );
}

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
          <span>Seu negócio</span>
          <span>chama atenção</span>
          <em>antes de você falar.</em>
        </h1>

        <p className="hero__lead">
          Faixas, fachadas, adesivos, placas e letreiros sob medida — com
          produção própria e mais de 30 anos de experiência.
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
            Ver trabalhos reais <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero__signature" aria-label="Mais de 30 anos de experiência">
          <strong data-count-up="30" data-count-suffix="+">30+</strong>
          <p>
            anos fazendo marcas aparecerem, com produção própria e atendimento
            direto em São Paulo.
          </p>
        </div>
      </div>

      <div className="hero__visual" aria-label="Bastidores reais do trabalho da Adry Faixas">
        <div className="hero__image-main">
          <HeroVideo />
        </div>

        <div className="hero__video-meta">
          <span>Bastidores reais</span>
          <span>Do arquivo ao resultado</span>
        </div>

        <div className="hero__video-caption">
          <span>Produção própria</span>
          <strong>Da tela para a rua.</strong>
        </div>
      </div>
    </section>
  );
}

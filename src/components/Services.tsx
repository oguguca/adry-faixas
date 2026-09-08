import { SERVICES } from "@/lib/content";
import { getWhatsAppLink } from "@/lib/constants";

export default function Services() {
  return (
    <section className="services section-shell" id="servicos" tabIndex={-1}>
      <div className="section-heading">
        <span className="mono-tag">O que produzimos</span>
        <h2>O que sua marca precisa?</h2>
        <p className="section-desc">
          Da faixa de promoção à fachada do seu negócio. Conte onde a peça
          vai ficar; a gente ajuda a escolher material, formato e acabamento.
        </p>
      </div>

      <div className="services-list">
        {SERVICES.map((service) => (
          <article className="service-row" key={service.title}>
            <div className="service-row__heading">
              <h3 className="service-row__title">{service.title}</h3>
              <span className="service-row__material">{service.material}</span>
            </div>
            <p className="service-row__desc">{service.description}</p>
            <a
              className="text-link service-row__link"
              href={getWhatsAppLink(`Olá! Gostaria de um orçamento de ${service.title.toLowerCase()}. Vim pelo site da Adry.`)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Pedir orçamento de ${service.title} no WhatsApp`}
            >
              Pedir orçamento
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

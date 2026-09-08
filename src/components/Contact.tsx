import { CONTACT_LINK, EMAIL, EMAIL_LINK, INSTAGRAM_LINK } from "@/lib/constants";

export default function Contact() {
  return (
    <section className="contact section--dark" id="contato" tabIndex={-1}>
      <div className="section-shell contact__inner">
        <div>
          <span className="mono-tag">
            Vamos conversar
          </span>
          <h2>Vamos tirar sua ideia do papel?</h2>
          <p className="contact__lead">
            Envie uma foto ou referência, as medidas aproximadas e o local
            de aplicação. Ainda não tem tudo isso? Conte a ideia e a equipe
            orienta o próximo passo.
          </p>
          <div className="contact__actions">
            <a
              className="btn btn--solid"
              href={CONTACT_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Chamar no WhatsApp
            </a>
            <a
              className="text-link"
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Ver Instagram
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card__row">
            <span className="contact-card__label">WhatsApp</span>
            <a className="contact-card__value" href={CONTACT_LINK} target="_blank" rel="noreferrer">
              (11) 94039-0256
            </a>
          </div>
          <div className="contact-card__row">
            <span className="contact-card__label">E-mail</span>
            <a className="contact-card__value" href={EMAIL_LINK}>
              {EMAIL}
            </a>
          </div>
          <div className="contact-card__row">
            <span className="contact-card__label">Instagram</span>
            <a className="contact-card__value" href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">
              @adry_faixas
            </a>
          </div>
          <div className="contact-card__row">
            <span className="contact-card__label">Atendimento</span>
            <span className="contact-card__value">São Paulo, SP</span>
          </div>
        </div>
      </div>
    </section>
  );
}

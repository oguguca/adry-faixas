import { PROCESS } from "@/lib/content";
import { CONTACT_LINK } from "@/lib/constants";

export default function Process() {
  return (
    <section className="process section-shell" id="como-funciona" tabIndex={-1}>
      <div className="section-heading">
        <span className="mono-tag">Como funciona</span>
        <h2>Do primeiro WhatsApp à peça instalada.</h2>
        <p className="section-desc">
          Sem formulário, sem orçamento genérico. Você fala com quem vai
          produzir.
        </p>
      </div>

      <div className="process-grid">
        {PROCESS.map((step) => (
          <div className="process-step" key={step.number}>
            <span className="process-step__number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      <div className="process__actions">
        <a
          className="btn btn--solid"
          href={CONTACT_LINK}
          target="_blank"
          rel="noreferrer"
        >
          Começar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

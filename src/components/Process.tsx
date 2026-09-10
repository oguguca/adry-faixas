import { PROCESS } from "@/lib/content";
import { CONTACT_LINK } from "@/lib/constants";
import Image from "next/image";

export default function Process() {
  return (
    <section className="process section-shell" id="como-funciona" tabIndex={-1}>
      <div className="section-heading">
        
        <h2>Do primeiro contato à peça instalada.</h2>
        <p className="section-desc">
          Sem formulário, sem orçamento genérico. Você fala com quem vai
          produzir.
        </p>
      </div>

      <div className="process-grid">
        {PROCESS.map((step) => (
          <div className="process-step" key={step.number}>
  <div className="process-step__art">
    <Image
      src={step.image}
      alt=""
      fill
      sizes="(max-width: 599px) 60vw, (max-width: 999px) 40vw, 20vw"
    />
  </div>
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

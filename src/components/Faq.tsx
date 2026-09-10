import { FAQS } from "@/lib/content";

export default function Faq() {
  return (
    <section className="faq section-shell" id="duvidas" tabIndex={-1}>
      <div className="section-heading">
        
        <h2>Antes de chamar no WhatsApp.</h2>
      </div>

      <div className="faq-list">
        {FAQS.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>
              {item.question}
              <i aria-hidden="true">+</i>
            </summary>
            <p className="faq-item__answer">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

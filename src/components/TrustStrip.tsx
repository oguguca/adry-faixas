import { TRUST_ITEMS } from "@/lib/content";

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Diferenciais da Adry">
      <div className="section-shell trust-strip__inner">
        {TRUST_ITEMS.map((item) => (
          <article className="trust-item" key={item.value}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

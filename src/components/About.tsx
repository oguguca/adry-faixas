import { CONTACT_LINK } from "@/lib/constants";
import ScrollFloat from "@/components/ScrollFloat";

export default function About() {
  return (
    <section className="about" id="sobre" tabIndex={-1}>
      <div className="section-shell about__inner">
        <span className="about__eyebrow">A Adry</span>

        <ScrollFloat
          containerClassName="about__headline"
          textClassName="about__headline-text"
          animationDuration={0.9}
          ease="power2.out"
          stagger={0.012}
        >
          Experiência que aparece no acabamento.
        </ScrollFloat>

        <div className="about__content">
          <div className="about__stat">
            <strong>30+</strong>

            <span>
              anos de
              <br />
              experiência
            </span>
          </div>

          <div className="about__copy">
            <p className="about__lead">
              Há mais de 30 anos, a Adry transforma espaços, fachadas,
              veículos e pontos comerciais por meio da comunicação visual.
            </p>

            <p>
              Cada projeto é acompanhado de perto, da escolha do material ao
              acabamento final, buscando uma solução que funcione para o
              espaço, para o uso e para a marca.
            </p>

            <a
              className="about__cta"
              href={CONTACT_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Conversar sobre meu projeto

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
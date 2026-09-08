import Image from "next/image";
import { CONTACT_LINK } from "@/lib/constants";

export default function About() {
  return (
    <section className="about" id="sobre" tabIndex={-1}>
      <div className="section-shell about__inner">
        <div className="about__visual reg-frame">
          <Image
            src="/images/fachada-adry-real-hq.webp"
            alt="Nossa sede: fachada da Adry Comunicação Visual em São Paulo"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>

        <div>
          <span className="mono-tag">A Adry</span>
          <h2>Experiência que aparece no acabamento.</h2>

          <div className="about__copy">
            <p>
              Há mais de 30 anos, a Adry trabalha com comunicação visual para
              negócios de São Paulo, acompanhando de perto o que sai da
              produção.
            </p>
            <p>
              O objetivo é simples: entender onde sua marca precisa aparecer
              e entregar uma solução que faça sentido para o uso, para o
              espaço e para o resultado que você espera.
            </p>
          </div>

          <a
            className="text-link about__link"
            href={CONTACT_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Conversar sobre meu projeto
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

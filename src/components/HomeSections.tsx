import Image from "next/image";
import { CONTACT_LINK, INSTAGRAM_LINK } from "@/lib/constants";

const SERVICES = [
  {
    number: "01",
    title: "Faixas & banners",
    description:
      "Comunicação promocional em formatos sob medida, com impressão de alto impacto para rua, loja e eventos.",
  },
  {
    number: "02",
    title: "Fachadas",
    description:
      "Projetos que organizam a presença da sua marca e fazem o ponto comercial ser reconhecido de longe.",
  },
  {
    number: "03",
    title: "Adesivos",
    description:
      "Aplicação em vitrines, paredes, veículos, equipamentos e superfícies para transformar ambientes inteiros.",
  },
  {
    number: "04",
    title: "Placas",
    description:
      "Sinalização comercial e informativa com leitura clara, boa resistência e acabamento profissional.",
  },
  {
    number: "05",
    title: "Letreiros",
    description:
      "Letras e elementos de destaque que levam identidade, volume e personalidade à sua fachada.",
  },
];

const PROJECTS = [
  {
    src: "/images/fachada-odontologia.jpg",
    alt: "Fachada verde de clínica odontológica com adesivação de vitrine",
    category: "Fachada + adesivo",
    title: "MAB Odontologia",
    className: "project-card--wide",
  },
  {
    src: "/images/banner-churrasco.jpg",
    alt: "Banner amarelo e vinho com cardápio de churrasco",
    category: "Banner",
    title: "Comunicação promocional",
    className: "project-card--tall",
  },
  {
    src: "/images/adesivo-freezer.webp",
    alt: "Freezer adesivado em preto com ilustrações de cortes de carne",
    category: "Adesivação",
    title: "Palácio Casa de Carnes",
    className: "",
  },
  {
    src: "/images/fachada-mega-beef.webp",
    alt: "Fachada de açougue com painéis e faixas promocionais coloridas",
    category: "Fachada completa",
    title: "Casa de Carnes Mega Beef",
    className: "project-card--wide",
  },
  {
    src: "/images/adesivo-escola.webp",
    alt: "Parede escolar adesivada com palavras coloridas",
    category: "Adesivo de parede",
    title: "Ambientação escolar",
    className: "project-card--tall",
  },
  {
    src: "/images/placa-mecanica.webp",
    alt: "Placa externa preta e laranja para oficina mecânica",
    category: "Placa",
    title: "Oficina Redenção",
    className: "",
  },
];

export default function HomeSections() {
  return (
    <>
      <div className="ticker" aria-label="Produtos oferecidos">
        <div>
          <span>Faixas</span><i>✦</i><span>Fachadas</span><i>✦</i>
          <span>Adesivos</span><i>✦</i><span>Placas</span><i>✦</i>
          <span>Letreiros</span><i>✦</i><span>Feito em São Paulo</span>
        </div>
      </div>

      <section className="services section-shell" id="servicos">
        <div className="section-heading">
          <p className="section-kicker"><span>02</span> O que fazemos</p>
          <h2>Do primeiro olhar ao <em>resultado final.</em></h2>
          <p>
            Soluções de comunicação visual pensadas para apresentar, sinalizar
            e vender — sempre com produção sob medida.
          </p>
        </div>

        <div className="services-list">
          {SERVICES.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-row__number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-row__arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="portfolio__heading section-shell">
          <div className="section-heading section-heading--light">
            <p className="section-kicker"><span>03</span> Trabalhos reais</p>
            <h2>Projetos que já estão <em>nas ruas.</em></h2>
          </div>
          <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">
            Ver mais no Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="project-grid section-shell">
          {PROJECTS.map((project) => (
            <article className={`project-card ${project.className}`} key={project.src}>
              <div className="project-card__image">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
              </div>
              <div className="project-card__caption">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="about__intro section-shell">
          <p className="section-kicker"><span>04</span> Por que a Adry</p>
          <h2>
            A experiência que a sua ideia <em>merece.</em>
          </h2>
          <div className="about__copy">
            <p>
              Há mais de 30 anos, a Adry Faixas ajuda negócios de São Paulo a
              ocuparem espaço com clareza, personalidade e presença.
            </p>
            <p>
              Cada projeto nasce de uma necessidade real: atrair mais olhares,
              organizar uma fachada, sinalizar melhor ou dar vida a um ambiente.
            </p>
          </div>
        </div>

        <div className="process section-shell" aria-label="Como funciona">
          <article>
            <span>01 / Conversa</span>
            <h3>Você conta a ideia.</h3>
            <p>Entendemos o espaço, a aplicação e o resultado que precisa alcançar.</p>
          </article>
          <article>
            <span>02 / Produção</span>
            <h3>A gente dá forma.</h3>
            <p>Preparamos o material com atenção à leitura, cor e acabamento.</p>
          </article>
          <article>
            <span>03 / Entrega</span>
            <h3>Sua marca ganha a rua.</h3>
            <p>Finalizamos o projeto pronto para cumprir sua função no dia a dia.</p>
          </article>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact__texture" aria-hidden="true">
          ADRY ADRY ADRY
        </div>
        <div className="contact__content section-shell">
          <p className="section-kicker"><span>05</span> Vamos conversar?</p>
          <h2>Tem uma ideia em mente?</h2>
          <p>
            Mostre o que você precisa. A gente ajuda a transformar em uma
            comunicação visual que funciona de verdade.
          </p>
          <a
            className="button button--light"
            href={CONTACT_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Pedir um orçamento <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="footer section-shell">
        <div className="footer__brand">
          <Image
            src="/images/logo-adry.jpg"
            alt="Adry Comunicação Visual"
            width={150}
            height={150}
          />
          <p>Comunicação visual há mais de 30 anos.</p>
        </div>
        <div className="footer__meta">
          <span>São Paulo — SP</span>
          <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">
            Instagram ↗
          </a>
        </div>
        <p className="footer__copyright">© 2026 Adry Faixas</p>
      </footer>

      <a
        className="floating-contact"
        href={CONTACT_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Pedir orçamento com a Adry Faixas"
      >
        <span>Falar agora</span>
        <strong aria-hidden="true">↗</strong>
      </a>
    </>
  );
}

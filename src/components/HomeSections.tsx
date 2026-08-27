import Image from "next/image";
import {
  CONTACT_LINK,
  EMAIL,
  EMAIL_LINK,
  INSTAGRAM_LINK,
} from "@/lib/constants";

const SERVICES = [
  {
    number: "01",
    title: "Faixas & banners",
    description:
      "Formatos sob medida para promoções, inaugurações, eventos e comunicação de rua.",
    use: "Lojas, eventos e ofertas",
  },
  {
    number: "02",
    title: "Fachadas",
    description:
      "Projetos que organizam a presença da marca e fazem o ponto comercial ser reconhecido de longe.",
    use: "Comércio e serviços",
  },
  {
    number: "03",
    title: "Adesivos",
    description:
      "Aplicação em vitrines, paredes, veículos e equipamentos, com acabamento pensado para cada superfície.",
    use: "Vitrines e ambientes",
  },
  {
    number: "04",
    title: "Placas",
    description:
      "Sinalização comercial e informativa com leitura rápida, boa resistência e visual profissional.",
    use: "Sinalização e divulgação",
  },
  {
    number: "05",
    title: "Letreiros",
    description:
      "Letras e elementos de destaque que levam identidade, volume e personalidade para a fachada.",
    use: "Presença de marca",
  },
];

const PROJECTS = [
  {
    src: "/images/fachada-odontologia.jpg",
    alt: "Fachada verde de clínica odontológica com adesivação de vitrine",
    category: "Fachada + adesivo",
    title: "MAB Odontologia",
  },
  {
    src: "/images/banner-churrasco.jpg",
    alt: "Banner amarelo e vinho com cardápio de churrasco",
    category: "Banner promocional",
    title: "Oferta que se lê de longe",
  },
  {
    src: "/images/adesivo-freezer.webp",
    alt: "Freezer adesivado em preto com ilustrações de cortes de carne",
    category: "Adesivação",
    title: "Palácio Casa de Carnes",
  },
  {
    src: "/images/fachada-mega-beef.webp",
    alt: "Fachada de açougue com painéis e faixas promocionais coloridas",
    category: "Fachada completa",
    title: "Casa de Carnes Mega Beef",
  },
  {
    src: "/images/adesivo-escola.webp",
    alt: "Parede escolar adesivada com palavras coloridas",
    category: "Adesivo de parede",
    title: "Ambientação escolar",
  },
  {
    src: "/images/placa-mecanica.webp",
    alt: "Placa externa preta e laranja para oficina mecânica",
    category: "Placa externa",
    title: "Oficina Redenção",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Mande a ideia",
    description: "Uma foto, as medidas e o que você precisa comunicar já ajudam a começar.",
  },
  {
    number: "02",
    title: "A gente orienta",
    description: "Indicamos formato, material e acabamento adequados para o seu uso.",
  },
  {
    number: "03",
    title: "Produzimos",
    description: "Cada peça passa pela produção e pelo acabamento com atenção de perto.",
  },
  {
    number: "04",
    title: "Sua marca aparece",
    description: "O projeto segue pronto para instalar, divulgar e trabalhar pelo seu negócio.",
  },
];

const TICKER_ITEMS = ["Faixas", "Fachadas", "Adesivos", "Placas", "Letreiros"];

function TickerGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="ticker__group" aria-hidden={hidden || undefined}>
      {TICKER_ITEMS.map((item) => (
        <span key={item}>{item}<i aria-hidden="true">✦</i></span>
      ))}
    </div>
  );
}

export default function HomeSections() {
  return (
    <>
      <div className="ticker" aria-label="Soluções oferecidas pela Adry Faixas">
        <div className="ticker__track">
          <TickerGroup />
          <TickerGroup hidden />
        </div>
      </div>

      <section className="services section-shell" id="servicos">
        <div className="section-heading">
          <p className="section-kicker"><span>02</span> O que fazemos</p>
          <h2>Uma equipe.<br /><em>Todas as etapas.</em></h2>
          <p>
            Da arte à instalação, você resolve sua comunicação visual com quem
            conhece material, acabamento e o dia a dia de quem vende.
          </p>
        </div>

        <div className="services-list">
          {SERVICES.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-row__number">/{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <span className="service-row__use">{service.use}</span>
              </div>
              <p>{service.description}</p>
              <span className="service-row__arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-bridge">
        <div className="quote-bridge__content section-shell">
          <p>Já sabe o que precisa?</p>
          <h2>Envie uma foto e as medidas. A gente ajuda a fechar o formato certo.</h2>
          <a className="button button--orange" href={CONTACT_LINK} target="_blank" rel="noreferrer">
            Conversar no WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="portfolio__heading section-shell">
          <div className="section-heading section-heading--light">
            <p className="section-kicker"><span>03</span> Trabalhos reais</p>
            <h2>Sem promessa vazia.<br /><em>Trabalho na rua.</em></h2>
          </div>
          <div className="portfolio__intro">
            <p>Projetos produzidos para negócios que precisavam aparecer, informar e vender melhor.</p>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">
              Ver o Instagram <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="project-grid section-shell">
          {PROJECTS.map((project, index) => (
            <article className="project-card" key={project.src}>
              <div className="project-card__image">
                <Image src={project.src} alt={project.alt} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 66vw" />
              </div>
              <span className="project-card__index">0{index + 1}</span>
              <div className="project-card__caption">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="about__media">
          <Image src="/images/producao-artesanal.jpg" alt="Profissional da Adry produzindo manualmente uma faixa promocional" fill sizes="(max-width: 900px) 100vw, 52vw" />
          <div className="about__media-note">
            <span>Bastidor real</span>
            <strong>Produzido de perto.<br />Conferido de perto.</strong>
          </div>
        </div>

        <div className="about__content">
          <p className="section-kicker"><span>04</span> A Adry</p>
          <h2>Tem coisa que só o tempo ensina.</h2>
          <div className="about__copy">
            <p>
              Há mais de 30 anos, a Adry ajuda negócios de São Paulo a ocuparem
              espaço com comunicação visual clara, resistente e bem acabada.
            </p>
            <p>
              Aqui o trabalho não some depois do orçamento: acompanhamos a ideia,
              a produção e o resultado final.
            </p>
          </div>
          <div className="about__facts" aria-label="Diferenciais da Adry">
            <span>Atendimento direto</span>
            <span>Produção sob medida</span>
            <span>Experiência prática</span>
          </div>
        </div>
      </section>

      <section className="method section-shell">
        <div className="section-heading">
          <p className="section-kicker"><span>05</span> Como funciona</p>
          <h2>Do pedido à entrega,<br /><em>sem complicação.</em></h2>
          <p>
            Um processo simples, com conversa direta e decisões que fazem
            sentido para o seu espaço e para o seu orçamento.
          </p>
        </div>

        <div className="process" aria-label="Etapas do atendimento">
          {PROCESS.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact__content section-shell">
          <div>
            <p className="section-kicker"><span>06</span> Vamos começar?</p>
            <h2>Mande uma foto do espaço. A conversa começa por aí.</h2>
          </div>
          <div className="contact__aside">
            <p>
              Conte o que precisa, envie as medidas aproximadas e fale direto
              com a Adry. Sem formulário longo e sem enrolação.
            </p>
            <div className="contact__actions">
              <a className="button button--dark" href={CONTACT_LINK} target="_blank" rel="noreferrer">
                Pedir orçamento <span aria-hidden="true">↗</span>
              </a>
              <a className="contact__email" href={EMAIL_LINK}>{EMAIL} <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer section-shell">
        <div className="footer__brand">
          <Image src="/images/logo-adry.jpg" alt="Adry Comunicação Visual" width={150} height={150} />
          <p>Comunicação visual em São Paulo<br />há mais de 30 anos.</p>
        </div>
        <div className="footer__meta">
          <span>São Paulo — SP</span>
          <a href={EMAIL_LINK}>{EMAIL}</a>
          <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
        <p className="footer__copyright">© 2026 Adry Faixas — Comunicação Visual</p>
      </footer>

      <a className="floating-contact" href={CONTACT_LINK} target="_blank" rel="noreferrer" aria-label="Pedir orçamento pelo WhatsApp">
        <span>Orçamento</span>
        <strong aria-hidden="true">↗</strong>
      </a>
    </>
  );
}

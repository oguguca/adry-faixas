import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import {
  CONTACT_LINK,
  EMAIL,
  EMAIL_LINK,
  INSTAGRAM_LINK,
} from "@/lib/constants";

const SERVICES = [
  {
    title: "Faixas & banners",
    description:
      "Para promoções, inaugurações, eventos e comunicação de rua, no tamanho que o espaço pede.",
    use: "Lojas · eventos · ofertas",
  },
  {
    title: "Fachadas",
    description:
      "Comunicação visual para deixar o ponto comercial mais reconhecível e coerente com a marca.",
    use: "Comércio · serviços",
  },
  {
    title: "Adesivos",
    description:
      "Aplicação em vitrines, paredes, veículos e equipamentos com material adequado para cada superfície.",
    use: "Vitrines · ambientes · veículos",
  },
  {
    title: "Placas & sinalização",
    description:
      "Peças comerciais e informativas pensadas para leitura rápida, resistência e acabamento profissional.",
    use: "Sinalização · divulgação",
  },
  {
    title: "Letreiros",
    description:
      "Letras e elementos de destaque para reforçar identidade, presença e leitura da fachada.",
    use: "Fachadas · presença de marca",
  },
];

const PROJECTS = [
  {
    src: "/images/projeto-envelopamento-caminhao.webp",
    alt: "Caminhão de distribuição envelopado com comunicação visual azul",
    category: "Envelopamento de frota",
    title: "Distribuidora de alimentos",
    layout: "wide",
  },
  {
    src: "/images/projeto-food-truck-dog-luiz.webp",
    alt: "Food truck Dog do Luiz com comunicação visual vermelha e amarela",
    category: "Comunicação sobre veículo",
    title: "Dog do Luiz",
    layout: "tall",
  },
  {
    src: "/images/projeto-vitrine-pao-na-lenha.webp",
    alt: "Vitrine da Padaria Pão na Lenha adesivada com produtos e ofertas",
    category: "Adesivação de vitrine",
    title: "Padaria Pão na Lenha",
    layout: "standard",
  },
  {
    src: "/images/projeto-fachada-brindes-boni.webp",
    alt: "Fachada da Brindes do Boni com painel preto e detalhes coloridos",
    category: "Fachada comercial",
    title: "Brindes do Boni",
    layout: "panorama",
  },
  {
    src: "/images/projeto-fachada-mega-beef.webp",
    alt: "Fachada de açougue com painéis promocionais coloridos",
    category: "Fachada completa",
    title: "Casa de Carnes Mega Beef",
    layout: "panorama",
  },
  {
    src: "/images/projeto-adesivacao-qualita.webp",
    alt: "Veículo branco da Qualitá com identidade visual aplicada nas portas",
    category: "Adesivação de veículo",
    title: "Qualitá",
    layout: "standard",
  },
  {
    src: "/images/projeto-totem-grid.webp",
    alt: "Totem de preços de combustível com acabamento branco, verde e vermelho",
    category: "Totem comercial",
    title: "Grid",
    layout: "tall",
  },
  {
    src: "/images/projeto-palacio-frigobar.webp",
    alt: "Frigobar do Palácio Casa de Carnes adesivado em preto com identidade visual e ilustrações de cortes",
    category: "Adesivação de equipamento",
    title: "Palácio Casa de Carnes",
    layout: "feature",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Você mostra a necessidade",
    description:
      "Envie uma foto ou referência, medidas aproximadas e conte onde a peça será usada.",
  },
  {
    number: "02",
    title: "A gente orienta",
    description:
      "A equipe indica formato, material e acabamento adequados para o uso e para o orçamento.",
  },
  {
    number: "03",
    title: "Produzimos e finalizamos",
    description:
      "O trabalho passa pela produção e segue pronto para entrega ou instalação, conforme o projeto.",
  },
];

const FAQS = [
  {
    question: "O que preciso mandar para pedir um orçamento?",
    answer:
      "Uma foto ou referência, medidas aproximadas, o local onde a peça será usada e o que você precisa comunicar já ajudam bastante. Com isso, a equipe consegue orientar o próximo passo pelo WhatsApp.",
  },
  {
    question: "Preciso ter a arte pronta?",
    answer:
      "Não. Se você já tiver a arte, envie junto. Se ainda não tiver, explique a ideia e mande referências para a equipe avaliar o que será necessário.",
  },
  {
    question: "A Adry também faz instalação?",
    answer:
      "Sim, em diversos tipos de projeto. Como a necessidade depende do serviço e do local, confirme a instalação no momento do orçamento.",
  },
  {
    question: "Quanto tempo leva para ficar pronto?",
    answer:
      "O prazo varia conforme tamanho, material, quantidade e instalação. Depois de entender o projeto, a equipe informa o prazo junto com o orçamento.",
  },
  {
    question: "Vocês atendem quais regiões?",
    answer:
      "A Adry está em São Paulo. Para confirmar entrega ou instalação no seu endereço, envie a localização junto com o pedido de orçamento.",
  },
];

export default function HomeSections() {
  return (
    <>
      <section
        className="services"
        id="servicos"
        aria-labelledby="services-title"
      >
        <ContainerScroll
          titleComponent={
            <header className="services-transition__intro">
              <p className="section-label">Serviços</p>

              <h2 id="services-title">O que a Adry faz.</h2>

              <p>
                Você não precisa chegar sabendo o nome do material. Mostre o
                espaço, explique o objetivo e a equipe ajuda a definir o caminho.
              </p>
            </header>
          }
        >
          <div className="services-transition__panel">
            <div className="services-transition__panel-head">
              <strong>ADRY</strong>
              <span>Comunicação visual · São Paulo</span>
            </div>

            <div className="services-transition__panel-main">
              <p>Do pedido à rua.</p>

              <div className="services-transition__index">
                {SERVICES.map((service, index) => (
                  <div key={service.title}>
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <strong>{service.title}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="services-transition__panel-foot">
              <span>Produção própria</span>
              <span>Desde 1993</span>
            </div>
          </div>
        </ContainerScroll>

        <div className="services__details section-shell">
          <div className="services-list">
            {SERVICES.map((service, index) => (
              <article className="service-row" key={service.title} data-reveal>
                <span className="service-row__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="service-row__title">
                  <h3>{service.title}</h3>
                  <span>{service.use}</span>
                </div>
                <p>{service.description}</p>
              </article>
            ))}
          </div>

          <div className="section-action" data-reveal>
            <p>
              Tem outro formato em mente? Mande uma referência e conte o que
              você precisa.
            </p>

            <a
              className="button button--dark"
              href={CONTACT_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="portfolio section-pad" id="portfolio" aria-labelledby="portfolio-title">
        <div className="section-shell">
          <header className="section-intro section-intro--portfolio" data-reveal>
            <div>
              <p className="section-label">Trabalhos reais</p>
              <h2 id="portfolio-title">O trabalho fala por si.</h2>
            </div>
            <p>
              Fachadas, veículos, vitrines e peças que saíram da produção da Adry e hoje estão na rua.
            </p>
          </header>

          <div className="project-grid">
            {PROJECTS.map((project) => (
              <figure
                className={`project-card project-card--${project.layout}`}
                key={project.src}
                data-reveal
              >
                <div className="project-card__media">
                  <Image src={project.src} alt={project.alt} fill sizes="(max-width: 719px) 100vw, (max-width: 1099px) 50vw, 40vw" />
                </div>
                <figcaption>
                  <span>{project.category}</span>
                  <strong>{project.title}</strong>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="portfolio__footer" data-reveal>
            <p>Mais trabalhos e bastidores são publicados no Instagram da Adry.</p>
            <a className="text-link" href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">
              Ver Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="workshop section-pad" id="producao" aria-labelledby="workshop-title">
        <div className="section-shell workshop__grid">
          <div className="workshop__copy" data-reveal>
            <p className="section-label">Produção própria</p>

            <h2 id="workshop-title">
              Do arquivo à instalação, <span>tudo passa por aqui.</span>
            </h2>

            <p className="workshop__lead">
              A equipe acompanha material, impressão, acabamento e aplicação.
              Menos intermediários e mais controle sobre o resultado final.
            </p>

            <ol className="workshop__steps" aria-label="Etapas da produção">
              <li>
                <span>01</span>
                <div>
                  <strong>Preparação</strong>
                  <p>Arquivo, medidas, material e superfície conferidos antes de produzir.</p>
                </div>
              </li>

              <li>
                <span>02</span>
                <div>
                  <strong>Produção</strong>
                  <p>Impressão, recorte e acabamento acompanhados pela própria equipe.</p>
                </div>
              </li>

              <li>
                <span>03</span>
                <div>
                  <strong>Aplicação</strong>
                  <p>Entrega ou instalação organizada conforme a necessidade do projeto.</p>
                </div>
              </li>
            </ol>
          </div>

          <figure className="workshop__media" data-reveal>
            <HeroVideo />

            <figcaption className="workshop__media-overlay">
              <div>
                <span>Bastidores reais</span>
                <strong>Produção Adry · São Paulo</strong>
              </div>

              <p>
                Um recorte do processo acontecendo de verdade, dentro e fora da oficina.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="case-study section-pad" aria-labelledby="case-title">
        <div className="section-shell">
          <header className="case-study__header" data-reveal>
            <p className="section-label">Projeto em destaque · Liberdade</p>
            <h2 id="case-title">Grande formato, aplicado em altura e sobre superfície ondulada.</h2>
            <p>
              Um trabalho que exigiu alinhamento por etapas para preservar a leitura da ilustração em toda a extensão.
            </p>
          </header>

          <div className="case-study__gallery">
            <figure className="case-study__main" data-reveal>
              <Image
                src="/images/projeto-liberdade-final-dia.webp"
                alt="Mural de grande formato finalizado na Liberdade em São Paulo"
                fill
                sizes="(max-width: 959px) 100vw, 66vw"
              />
            </figure>
            <div className="case-study__side">
              <figure data-reveal>
                <Image
                  src="/images/projeto-liberdade-instalacao.webp"
                  alt="Profissional instalando o mural em altura"
                  fill
                  sizes="(max-width: 719px) 50vw, 28vw"
                />
              </figure>
              <figure data-reveal>
                <Image
                  src="/images/projeto-liberdade-final-noite.webp"
                  alt="Detalhes do mural da Liberdade fotografados durante a noite"
                  fill
                  sizes="(max-width: 719px) 50vw, 28vw"
                />
              </figure>
            </div>
          </div>

          <dl className="case-study__facts" aria-label="Informações do projeto" data-reveal>
            <div><dt>Local</dt><dd>Liberdade · São Paulo</dd></div>
            <div><dt>Execução</dt><dd>Aplicação em altura</dd></div>
            <div><dt>Superfície</dt><dd>Metal ondulado</dd></div>
          </dl>
        </div>
      </section>

      <section className="process-section section-pad" id="como-funciona" aria-labelledby="process-title">
        <div className="section-shell">
          <header className="section-intro" data-reveal>
            <p className="section-label">Como funciona</p>
            <h2 id="process-title">Começa com uma conversa.</h2>
            <p>Não precisa ter tudo resolvido antes de chamar. O orçamento começa pelo que você já sabe.</p>
          </header>

          <ol className="process-list">
            {PROCESS.map((step) => (
              <li key={step.number} data-reveal>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about section-pad" id="sobre" aria-labelledby="about-title">
        <div className="section-shell about__grid">
          <div className="about__media" data-reveal>
            <Image
              src="/images/fachada-adry-real-hq.webp"
              alt="Fachada real da Adry Comunicação Visual em São Paulo"
              fill
              sizes="(max-width: 959px) 100vw, 52vw"
            />
          </div>

          <div className="about__copy" data-reveal>
            <p className="section-label">A Adry</p>
            <h2 id="about-title">Mais de 30 anos fazendo comunicação visual em São Paulo.</h2>
            <p>
              A Adry trabalha com produção sob medida para negócios que precisam divulgar, sinalizar e apresentar melhor a própria marca.
            </p>
            <p>
              O atendimento é direto e o trabalho é acompanhado de perto, da escolha do material ao acabamento final.
            </p>
            <ul className="about__facts" aria-label="Diferenciais da Adry">
              <li>Produção própria</li>
              <li>Projeto sob medida</li>
              <li>Experiência prática</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="faq section-pad" id="duvidas" aria-labelledby="faq-title">
        <div className="section-shell faq__grid">
          <header className="faq__intro" data-reveal>
            <p className="section-label">Dúvidas</p>
            <h2 id="faq-title">Antes de pedir o orçamento.</h2>
            <p>As perguntas que mais aparecem no primeiro contato.</p>
          </header>

          <div className="faq__list">
            {FAQS.map((item, index) => (
              <details className="faq-item" name="faq-adry" key={item.question} data-reveal>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.question}</strong>
                  <span className="faq-item__mark" aria-hidden="true">+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section-pad" id="contato" aria-labelledby="contact-title">
        <div className="section-shell contact__grid">
          <div className="contact__copy" data-reveal>
            <p className="section-label section-label--light">Orçamento</p>
            <h2 id="contact-title">Mande a ideia. A equipe ajuda com o resto.</h2>
            <p>
              Foto, referência e medidas aproximadas já são um bom começo. A conversa acontece direto pelo WhatsApp.
            </p>
          </div>

          <div className="contact__action" data-reveal>
            <p className="contact__action-label">Para começar, envie:</p>
            <ul>
              <li>uma foto ou referência;</li>
              <li>medidas aproximadas, se tiver;</li>
              <li>onde a peça será usada ou instalada.</li>
            </ul>
            <a className="button button--accent button--large" href={CONTACT_LINK} target="_blank" rel="noreferrer">
              Chamar no WhatsApp
            </a>
            <a className="contact__email" href={EMAIL_LINK}>{EMAIL}</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__grid section-shell">
          <div className="footer__brand">
            <Image src="/images/logo-adry-dark.png" alt="Adry Comunicação Visual" width={520} height={146} />
            <p>Comunicação visual em São Paulo desde 1993.</p>
          </div>

          <nav className="footer__nav" aria-label="Links do rodapé">
            <a href="#servicos">Serviços</a>
            <a href="#portfolio">Trabalhos</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#sobre">A Adry</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>

          <div className="footer__contact">
            <a href={EMAIL_LINK}>{EMAIL}</a>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">Instagram</a>
            <span>São Paulo · SP</span>
          </div>

          <p className="footer__copyright">© 2026 Adry Faixas · Comunicação Visual</p>
        </div>
      </footer>
    </>
  );
}

import Image from "next/image";
import type { CSSProperties } from "react";
import {
  CONTACT_LINK,
  EMAIL,
  EMAIL_LINK,
  INSTAGRAM_LINK,
} from "@/lib/constants";

const TRUST_ITEMS = [
  {
    value: "30+",
    label: "anos de experiência",
  },
  {
    value: "Produção própria",
    label: "acompanhamento de perto",
  },
  {
    value: "Sob medida",
    label: "material e formato para cada projeto",
  },
  {
    value: "São Paulo",
    label: "atendimento direto",
  },
];

const SERVICES = [
  {
    number: "01",
    title: "Faixas & banners",
    description:
      "Divulgação para promoções, inaugurações, eventos e comunicação de rua, no tamanho que o seu espaço pede.",
    use: "Lojas, eventos e ofertas",
  },
  {
    number: "02",
    title: "Fachadas",
    description:
      "Comunicação visual para deixar o ponto comercial mais fácil de reconhecer e mais forte na rua.",
    use: "Comércio e serviços",
  },
  {
    number: "03",
    title: "Adesivos",
    description:
      "Aplicação em vitrines, paredes, veículos e equipamentos, com material indicado para cada superfície.",
    use: "Vitrines, ambientes e veículos",
  },
  {
    number: "04",
    title: "Placas & sinalização",
    description:
      "Peças comerciais e informativas para orientar, divulgar e comunicar com leitura rápida e acabamento profissional.",
    use: "Sinalização e divulgação",
  },
  {
    number: "05",
    title: "Letreiros",
    description:
      "Letras e elementos de destaque para dar presença, volume e identidade à fachada da sua empresa.",
    use: "Presença de marca",
  },
];

const PROJECTS = [
  {
    src: "/images/projeto-envelopamento-caminhao.webp",
    alt: "Caminhão de distribuição envelopado com comunicação visual azul",
    category: "Envelopamento de frota",
    title: "Marca que viaja pela cidade",
  },
  {
    src: "/images/projeto-food-truck-dog-luiz.webp",
    alt: "Food truck Dog do Luiz com envelopamento vermelho e amarelo",
    category: "Comunicação sobre veículo",
    title: "Dog do Luiz",
  },
  {
    src: "/images/projeto-vitrine-pao-na-lenha.webp",
    alt: "Vitrine da Padaria Pão na Lenha adesivada com produtos e ofertas",
    category: "Adesivação de vitrine",
    title: "Padaria Pão na Lenha",
  },
  {
    src: "/images/projeto-liberdade-final-dia.webp",
    alt: "Mural de grande formato instalado na Liberdade em São Paulo",
    category: "Aplicação de grande formato",
    title: "Projeto Liberdade",
  },
  {
    src: "/images/projeto-fachada-brindes-boni.webp",
    alt: "Fachada da Brindes do Boni com painel preto e detalhes em amarelo e vermelho",
    category: "Fachada comercial",
    title: "Brindes do Boni",
  },
  {
    src: "/images/projeto-adesivacao-qualita.webp",
    alt: "Veículo branco da Qualitá com aplicação de identidade visual nas portas",
    category: "Adesivação de veículo",
    title: "Qualitá",
  },
  {
    src: "/images/projeto-totem-grid.webp",
    alt: "Totem de preços de combustível com acabamento branco e verde",
    category: "Totem comercial",
    title: "Preço claro, leitura rápida",
  },
  {
    src: "/images/projeto-fachada-mega-beef.webp",
    alt: "Fachada de açougue com painéis e faixas promocionais coloridas",
    category: "Fachada completa",
    title: "Casa de Carnes Mega Beef",
  },
  {
    src: "/images/projeto-adesivo-freezer-palacio.webp",
    alt: "Freezer adesivado em preto com ilustrações de cortes de carne",
    category: "Adesivação de equipamento",
    title: "Palácio Casa de Carnes",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Mande sua ideia",
    description:
      "Envie uma foto, referência, medidas aproximadas e explique onde a comunicação será usada.",
  },
  {
    number: "02",
    title: "A gente orienta",
    description:
      "A equipe ajuda a definir formato, material e acabamento de acordo com o espaço e a necessidade.",
  },
  {
    number: "03",
    title: "Produzimos",
    description:
      "O projeto entra em produção com acompanhamento de perto e atenção ao acabamento.",
  },
  {
    number: "04",
    title: "Entregamos ou instalamos",
    description:
      "A peça segue pronta para ocupar o espaço, divulgar seu negócio e trabalhar pela sua marca.",
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
      "Não necessariamente. Se você já tiver a arte, envie junto. Se ainda não tiver, explique a ideia e mande referências para a equipe avaliar o material e orientar o que será necessário.",
  },
  {
    question: "A Adry também faz instalação?",
    answer:
      "A instalação faz parte de diversos tipos de projeto. Como isso depende do serviço e do local, confirme essa necessidade no momento do orçamento.",
  },
  {
    question: "Quanto tempo leva para ficar pronto?",
    answer:
      "O prazo varia conforme tamanho, material, quantidade e tipo de instalação. Depois de entender o projeto, a equipe informa o prazo junto com o orçamento.",
  },
  {
    question: "Vocês atendem quais regiões?",
    answer:
      "O atendimento é feito em São Paulo. Para confirmar entrega ou instalação no seu endereço, envie a localização pelo WhatsApp junto com o pedido de orçamento.",
  },
];

function ProjectMarqueeGroup({
  hidden = false,
}: {
  hidden?: boolean;
}) {
  return (
    <div className="project-marquee__group" aria-hidden={hidden || undefined}>
      {PROJECTS.map((project, index) => (
        <article
          className="project-marquee__card"
          key={`${project.src}-${hidden ? "copy" : "original"}`}
        >
          <Image
            src={project.src}
            alt={hidden ? "" : project.alt}
            fill
            sizes="(max-width: 720px) 80vw, 340px"
          />

          <div className="project-marquee__overlay" aria-hidden="true" />

          <span className="project-marquee__number">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="project-marquee__caption">
            <span>{project.category}</span>
            <h3>{project.title}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function HomeSections() {
  return (
    <>
      <section className="trust-strip" aria-label="Diferenciais da Adry">
        <div className="trust-strip__inner section-shell">
          {TRUST_ITEMS.map((item, index) => (
            <article
              className="trust-item"
              data-reveal="up"
              key={item.value}
              style={
                {
                  "--reveal-delay": `${index * 55}ms`,
                } as CSSProperties
              }
            >
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="services section-shell" id="servicos">
        <div className="section-heading" data-reveal="up">
          <p className="section-kicker">
            <span>01</span> Serviços
          </p>

          <h2>
            O que sua marca precisa
            <br />
            <em>para aparecer?</em>
          </h2>

          <p>
            Você não precisa chegar sabendo qual material usar. Conte onde a
            comunicação vai ficar e o que precisa mostrar. A gente indica o
            caminho.
          </p>
        </div>

        <div className="services-list">
          {SERVICES.map((service, index) => (
            <article
              className="service-row"
              data-spotlight
              data-reveal="up"
              key={service.number}
              style={
                {
                  "--reveal-delay": `${index * 55}ms`,
                } as CSSProperties
              }
            >
              <span className="service-row__number">/{service.number}</span>

              <div className="service-row__title">
                <h3>{service.title}</h3>
                <span className="service-row__use">{service.use}</span>
              </div>

              <p>{service.description}</p>

              <a
                className="service-row__cta"
                href={CONTACT_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label={`Pedir orçamento para ${service.title}`}
              >
                Orçar <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <div className="services__footer" data-reveal="up">
          <p>
            Tem outro tipo de comunicação visual em mente? Mande uma foto ou
            referência e explique o que você precisa.
          </p>

          <a
            className="button button--dark"
            data-magnet
            href={CONTACT_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Falar com a Adry <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="portfolio__heading section-shell">
          <div
            className="section-heading section-heading--light"
            data-reveal="up"
          >
            <p className="section-kicker">
              <span>02</span> Projetos reais
            </p>

            <h2>
              Olhe o resultado.
              <br />
              <em>Imagine o seu.</em>
            </h2>
          </div>

          <div className="portfolio__intro" data-reveal="up">
            <span className="portfolio__intro-label">
              <i aria-hidden="true" />
              Feito pela Adry
            </span>

            <p>
              Cada imagem abaixo é um trabalho que saiu da nossa produção e foi
              para a rua. Veja de perto o acabamento, a presença e o cuidado em
              cada aplicação.
            </p>

            <div
              className="portfolio__proof-grid"
              aria-label="Diferenciais dos projetos apresentados"
            >
              <div>
                <strong>{String(PROJECTS.length).padStart(2, "0")}</strong>
                <span>projetos em destaque</span>
              </div>

              <div>
                <strong>Própria</strong>
                <span>produção acompanhada de perto</span>
              </div>

              <div>
                <strong>SP</strong>
                <span>trabalhos para negócios reais</span>
              </div>
            </div>

            <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">
              Ver mais trabalhos no Instagram <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="portfolio__showcase-meta section-shell" data-reveal="up">
          <span>
            <i aria-hidden="true" />
            Fotos reais. Projetos entregues.
          </span>

          <span>Fachadas • veículos • vitrines • grandes formatos</span>
        </div>

        <div
          className="project-marquee"
          aria-label="Projetos realizados pela Adry Faixas"
        >
          <div className="project-marquee__track">
            <ProjectMarqueeGroup />
            <ProjectMarqueeGroup hidden />
          </div>
        </div>

        <div className="portfolio__after section-shell" data-reveal="up">
          <p className="portfolio__hint">
            Passe o mouse sobre os projetos para observar os detalhes com calma.
          </p>

          <div className="portfolio-cta">
            <div className="portfolio-cta__copy">
              <span>Gostou do que viu?</span>
              <strong>Seu projeto pode ser o próximo.</strong>
              <p>
                Mande uma foto, medida ou referência. A gente te ajuda a
                transformar a ideia em comunicação visual pronta para aparecer.
              </p>
            </div>

            <a
              className="button button--dark"
              data-magnet
              href={CONTACT_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Quero fazer o meu <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="method section-shell" id="como-funciona">
        <div className="section-heading" data-reveal="up">
          <p className="section-kicker">
            <span>03</span> Como funciona
          </p>

          <h2>
            Do primeiro WhatsApp
            <br />
            <em>à peça pronta.</em>
          </h2>

          <p>
            O processo é simples: você mostra o que precisa, a equipe orienta e
            o projeto avança sem complicação.
          </p>
        </div>

        <div className="process" aria-label="Etapas do atendimento">
          {PROCESS.map((step, index) => (
            <article
              data-reveal="up"
              key={step.number}
              style={
                {
                  "--reveal-delay": `${index * 75}ms`,
                } as CSSProperties
              }
            >
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="method__cta" data-reveal="up">
          <p>
            Não sabe a medida exata ou o material certo? Comece pela ideia. A
            equipe ajuda a organizar o restante.
          </p>

          <a
            className="button button--dark"
            data-magnet
            href={CONTACT_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Começar pelo WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="about__media" data-reveal="left">
          <Image
            src="/images/fachada-adry-real-hq.webp"
            alt="Fachada real da Adry Comunicação Visual em São Paulo"
            fill
            sizes="(max-width: 900px) 100vw, 52vw"
          />

          <div className="about__media-note">
            <span>Nossa fachada • São Paulo</span>

            <strong>
              É daqui que sua marca
              <br />
              ganha a rua.
            </strong>
          </div>
        </div>

        <div className="about__content" data-reveal="right">
          <p className="section-kicker">
            <span>04</span> A Adry
          </p>

          <h2>Experiência que aparece no acabamento.</h2>

          <div className="about__copy">
            <p>
              Há mais de 30 anos, a Adry trabalha com comunicação visual para
              negócios de São Paulo, acompanhando de perto o que sai da
              produção.
            </p>

            <p>
              O objetivo é simples: entender onde sua marca precisa aparecer e
              entregar uma solução que faça sentido para o uso, para o espaço e
              para o resultado que você espera.
            </p>
          </div>

          <div className="about__facts" aria-label="Diferenciais da Adry">
            <span>Atendimento direto</span>
            <span>Produção própria</span>
            <span>Projeto sob medida</span>
            <span>Experiência prática</span>
          </div>

          <a
            className="about__link"
            href={CONTACT_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Conversar sobre meu projeto <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="faq section-shell" id="duvidas">
        <div className="faq__heading" data-reveal="up">
          <p className="section-kicker">
            <span>05</span> Dúvidas
          </p>

          <h2>
            Antes de pedir
            <br />
            <em>seu orçamento.</em>
          </h2>

          <p>As dúvidas mais comuns antes de começar um projeto com a Adry.</p>

          <div className="faq__heading-note" aria-hidden="true">
            <span>Resposta rápida</span>
            <span>Atendimento direto</span>
          </div>
        </div>

        <div className="faq__content">
          <div className="faq__list">
            {FAQS.map((item, index) => (
              <details
  className="faq-item"
  name="faq-adry"
  data-reveal="up"
  key={item.question}
  style={
    {
      "--reveal-delay": `${index * 45}ms`,
    } as CSSProperties
  }
>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.question}</strong>
                  <i aria-hidden="true">+</i>
                </summary>

                <div className="faq-item__answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="faq__cta" data-reveal="up">
            <div>
              <span>Ainda ficou com alguma dúvida?</span>
              <strong>Fale direto com a equipe.</strong>
            </div>

            <a
              className="faq__cta-link"
              href={CONTACT_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Tirar uma dúvida <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact__content section-shell">
          <div className="contact__lead" data-reveal="up">
            <p className="section-kicker">
              <span>06</span> Orçamento
            </p>

            <p className="contact__eyebrow">
              Seu próximo projeto começa aqui.
            </p>

            <h2>
              Mostre a ideia.
              <br />
              <em>A gente coloca na rua.</em>
            </h2>

            <p className="contact__lead-text">
              Não precisa saber o material certo, ter a arte pronta ou chegar
              com tudo resolvido. Mande o que você já tem e a Adry te orienta
              no próximo passo.
            </p>

            <div
              className="contact__flow"
              aria-label="O que enviar para começar um orçamento"
            >
              <div>
                <span>01</span>
                <strong>Foto ou referência</strong>
              </div>

              <i aria-hidden="true">→</i>

              <div>
                <span>02</span>
                <strong>Medidas aproximadas</strong>
              </div>

              <i aria-hidden="true">→</i>

              <div>
                <span>03</span>
                <strong>Orçamento orientado</strong>
              </div>
            </div>

            <div className="contact__proof" aria-label="Diferenciais da Adry">
              <span>
                <strong>30+</strong> anos de experiência
              </span>
              <span>Produção própria</span>
              <span>Atendimento direto</span>
            </div>
          </div>

          <div
            className="contact__aside"
            data-reveal="up"
            style={
              {
                "--reveal-delay": "90ms",
              } as CSSProperties
            }
          >
            <div className="contact__aside-top">
              <span className="contact__status">
                <i aria-hidden="true" />
                Atendimento direto
              </span>
              <span>São Paulo — SP</span>
            </div>

            <p className="contact__aside-kicker">Pronto para começar?</p>

            <h3>Conte o que você precisa.</h3>

            <p className="contact__aside-copy">
              Envie uma mensagem pelo WhatsApp com o que tiver em mãos. A
              conversa começa pela sua necessidade — não por um formulário.
            </p>

            <ul className="contact__checklist">
              <li>
                <span>01</span>
                <strong>Uma foto ou referência do que você quer</strong>
              </li>
              <li>
                <span>02</span>
                <strong>Medidas aproximadas, se já tiver</strong>
              </li>
              <li>
                <span>03</span>
                <strong>Onde a peça será usada ou instalada</strong>
              </li>
            </ul>

            <div className="contact__actions">
              <a
                className="button button--orange contact__whatsapp"
                data-magnet
                href={CONTACT_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Chamar no WhatsApp <span aria-hidden="true">↗</span>
              </a>

              <div className="contact__aside-footer">
                <span>Não precisa ter a arte pronta.</span>

                <a className="contact__email" href={EMAIL_LINK}>
                  {EMAIL} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer section-shell">
        <div className="footer__brand">
          <Image
            src="/images/logo-adry-dark.png"
            alt="Adry Comunicação Visual"
            width={520}
            height={146}
          />

          <p>
            Comunicação visual em São Paulo
            <br />
            há mais de 30 anos.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Links do rodapé">
          <a href="#servicos">Serviços</a>
          <a href="#portfolio">Projetos</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#sobre">A Adry</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>

        <div className="footer__meta">
          <span>São Paulo — SP</span>

          <a href={EMAIL_LINK}>{EMAIL}</a>

          <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">
            Instagram ↗
          </a>
        </div>

        <p className="footer__copyright">
          © 2026 Adry Faixas — Comunicação Visual
        </p>
      </footer>

      <a
        className="floating-contact"
        data-magnet
        href={CONTACT_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Pedir orçamento pelo WhatsApp"
      >
        <span>Orçamento</span>
        <strong aria-hidden="true">↗</strong>
      </a>
    </>
  );
}

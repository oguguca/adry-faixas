import Header from "@/components/Header";

import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo" tabIndex={-1}>
        {/* TELA 01 — Início */}
        <div className="page-screen page-screen--hero">
          <Hero />
          <TrustStrip />
        </div>

        {/* TELA 02 — Projetos */}
        <div className="page-screen">
          <Portfolio />
        </div>

        {/* TELA 03 — Serviços */}
        <div className="page-screen">
          <Services />
        </div>

        {/* TELA 04 — Como funciona */}
        <div className="page-screen">
          <Process />
        </div>

        {/* TELA 05 — Sobre a Adry */}
        <div className="page-screen">
          <About />
        </div>

        {/* TELA 06 — Dúvidas */}
        <div className="page-screen">
          <Faq />
        </div>

        {/* TELA 07 — Contato */}
        <div className="page-screen">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
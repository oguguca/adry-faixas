import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeSections from "@/components/HomeSections";
import ScrollEffects from "@/components/ScrollEffects";

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />

      <main id="conteudo">
        <Hero />
        <HomeSections />
      </main>
    </>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeSections from "@/components/HomeSections";
import ScrollEffects from "@/components/ScrollEffects";

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <Header />
      <main>
        <Hero />
        <HomeSections />
      </main>
    </>
  );
}

import HeroLogo3D from "@/components/HeroLogo3D";
import styles from "./HeroLogo3D.module.css";

export default function Hero() {
  return (
    <section
      className={styles.hero}
      id="inicio"
      aria-labelledby="hero-title"
    >
      <div className={styles.heroInner}>
        <HeroLogo3D />

        <div className={styles.copy}>
          <h1 id="hero-title">
            Mais de <strong>30 anos</strong> de experiência em comunicação visual.
          </h1>

          <p>
            Produção própria em São Paulo para fachadas, faixas, adesivos,
            placas, letreiros e envelopamento.
          </p>
        </div>
      </div>
    </section>
  );
}

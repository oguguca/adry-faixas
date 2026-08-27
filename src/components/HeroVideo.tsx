export default function HeroVideo() {
  return (
    <video
      className="hero__video"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/images/hero-bastidores-poster.jpg"
      aria-label="Bastidores da Adry: impressão, produção manual e instalação"
    >
      <source src="/videos/adry-bastidores.mp4" type="video/mp4" />
    </video>
  );
}

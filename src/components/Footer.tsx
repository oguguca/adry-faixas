import { INSTAGRAM_LINK } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell site-footer__inner">
        <span>© {new Date().getFullYear()} Adry Comunicação Visual — São Paulo, SP</span>
        <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">
          @adry_faixas
        </a>
      </div>
    </footer>
  );
}

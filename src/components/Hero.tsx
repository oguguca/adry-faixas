import { WHATSAPP_LINK } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:items-center md:py-20">
        {/* Texto */}
        <div className="order-2 md:order-1">
          <h1 className="text-3xl font-bold leading-tight text-black md:text-5xl">
            Comunicação visual em São Paulo há{" "}
            <span className="text-orange-500">mais de 30 anos</span>
          </h1>

          <p className="mt-4 text-base text-black/70 md:text-lg">
            Banners, faixas, placas, adesivos e letreiros.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 px-6 py-3 text-center text-sm font-semibold text-black hover:bg-orange-400"
            >
              Pedir orçamento no WhatsApp
            </a>
            <a
              href="#portfolio"
              className="border border-black px-6 py-3 text-center text-sm font-semibold text-black hover:bg-black hover:text-white"
            >
              Ver trabalhos
            </a>
          </div>
        </div>

        {/* Espaço para foto real */}
        <div className="order-1 md:order-2">
          {/*
            SUBSTITUIR este bloco por:
            <img
              src="/images/hero-fachada.jpg"
              alt="Fachada com comunicação visual produzida pela Adry Faixas"
              className="h-full w-full object-cover"
            />
          */}
          <div className="flex aspect-[4/3] w-full items-center justify-center border border-dashed border-black/30 bg-black/5 text-center text-sm text-black/50 md:aspect-square">
            Espaço reservado para foto real
            <br />
            (fachada / faixa / trabalho da Adry Faixas)
          </div>
        </div>
      </div>
    </section>
  );
}

import { Calendar, MapPin, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden hero-grid"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-card pointer-events-none" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-accent/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/4 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/4" />

      {/* Decorative corner lines */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-accent/30 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-accent/30 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* LEFT — texto */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-4 py-1.5 mb-8">
              <Star size={11} className="text-accent fill-accent" />
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                Apoio Oficial Enjoy · Vitória 2026
              </span>
              <Star size={11} className="text-accent fill-accent" />
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.08] tracking-tight text-white mb-6">
              <span className="gold-text">Enjoy</span> e Protagonistas
              <br />de Resultados:
              <span className="block mt-2 text-white/95">
                Sua Liderança
              </span>
              <span className="block gold-text">Transforma em Vitória.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-white/60 text-base sm:text-lg max-w-lg leading-relaxed mb-8">
              Desbloqueie seu potencial máximo na{" "}
              <span className="text-white font-semibold">
                Imersão Protagonistas de Resultados — Vitória 2026
              </span>
              , evento da{" "}
              <span className="text-accent font-semibold">Marcela Zaidem</span>{" "}
              com o apoio estratégico da{" "}
              <span className="text-accent font-semibold">Enjoy</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10 w-full sm:w-auto items-center lg:items-start">
              <a
                href="#inscricao"
                className="btn-pulse inline-flex items-center justify-center bg-accent hover:bg-accent-light text-primary font-black text-sm px-7 py-4 tracking-wider uppercase transition-all duration-200 hover:scale-105"
              >
                Garantir Minha Vaga pela Enjoy
              </a>
              <a
                href="#problema"
                className="inline-flex items-center justify-center border border-white/20 hover:border-accent/60 text-white/80 hover:text-accent font-semibold text-sm px-7 py-4 tracking-wide uppercase transition-all duration-200"
              >
                Saiba Mais
              </a>
            </div>

            {/* Event info */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2">
                <Calendar size={13} className="text-accent flex-shrink-0" />
                <span className="text-white/75 text-xs font-medium">
                  24 e 25 de Março de 2026
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2">
                <MapPin size={13} className="text-accent flex-shrink-0" />
                <span className="text-white/75 text-xs font-medium">
                  Vitória / ES
                </span>
              </div>
              <div className="flex items-center gap-2 bg-accent/10 border border-accent/30 px-3 py-2">
                <Star size={13} className="text-accent fill-accent flex-shrink-0" />
                <span className="text-accent text-xs font-semibold">
                  Presencial · All Inclusive
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — colagem (visível em todos os tamanhos, acima do texto no mobile) */}
          <div className="flex items-center justify-center order-first lg:order-last">
            <Image
              src="/images/logos/colagem.png"
              alt="Enjoy × Protagonistas de Resultados"
              width={560}
              height={420}
              className="object-contain w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] h-auto [mix-blend-mode:lighten]"
              priority
            />
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-35">
        <span className="text-white/50 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}

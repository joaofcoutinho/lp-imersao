import { ShieldCheck, Network, BookOpen } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Acesso Prioritário",
    description:
      "Vaga garantida em turma limitada. Você entra antes que as vagas se esgotem, com suporte direto da equipe Enjoy.",
  },
  {
    icon: Network,
    title: "Networking Qualificado",
    description:
      "Conecte-se com líderes e empreendedores de alto nível. O círculo que você vai construir aqui vale tanto quanto o conteúdo.",
  },
  {
    icon: BookOpen,
    title: "Suporte Pós-Imersão",
    description:
      "Mentorias e comunidade exclusiva para aplicação do aprendizado. O evento termina, a transformação continua.",
  },
];

export default function EnjoyPartnership() {
  return (
    <section id="parceria" className="py-24 relative overflow-hidden">
      {/* background accent stripe */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light/20 to-primary pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-accent/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Diferencial Exclusivo
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              A Força da <span className="gold-text">Enjoy</span>
              <br />
              Impulsionando Seus
              <br />
              Resultados.
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              A{" "}
              <span className="text-accent font-semibold">Enjoy</span> é
              apoiadora oficial da{" "}
              <span className="text-white font-semibold">
                Imersão Protagonistas de Resultados — Vitória 2026
              </span>
              . Nossa parceria visa fortalecer a liderança e a gestão eficaz.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Ao participar através da Enjoy, você acessa conteúdo de ponta e
              uma rede de valor exclusiva que vai muito além do evento.
            </p>

            <a
              href="#inscricao"
              className="inline-flex items-center bg-accent hover:bg-accent-light text-primary font-black text-sm px-7 py-3.5 tracking-wider uppercase transition-all duration-200 hover:scale-105"
            >
              Quero participar pela Enjoy
            </a>
          </div>

          {/* Right: benefit cards */}
          <div className="flex flex-col gap-5">
            {benefits.map(({ icon: Icon, title, description }, i) => (
              <div
                key={i}
                className="card-hover flex items-start gap-5 bg-primary-card border border-white/8 p-6"
              >
                <div className="flex-shrink-0 w-11 h-11 bg-accent/10 border border-accent/25 flex items-center justify-center">
                  <Icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1.5">
                    {title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Users, Target, TrendingUp } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Engajar Equipes",
    description: "Transforme esforço em resultados reais. Construa times que executam com propósito e consistência.",
  },
  {
    icon: Target,
    title: "Alinhar Estratégias",
    description: "Conecte visão e execução diária. Elimine o gap entre onde você quer chegar e o que acontece no dia a dia.",
  },
  {
    icon: TrendingUp,
    title: "Decisões Estratégicas",
    description: "Impulsione o crescimento sustentável. Tome decisões com clareza, dados e visão de longo prazo.",
  },
];

export default function ProblemSolution() {
  return (
    <section id="problema" className="py-24 relative overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-primary pointer-events-none" />
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Por que participar?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            Sua empresa merece mais!
            <br />
            <span className="gold-text">Seja o Protagonista.</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Empresas de sucesso são lideradas por quem{" "}
            <span className="text-white font-semibold">protagoniza</span> o
            futuro. Se você busca ir além da gestão tradicional e transformar
            desafios em crescimento, esta imersão é para você.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {items.map(({ icon: Icon, title, description }, i) => (
            <div
              key={i}
              className="card-hover bg-primary-card border border-white/8 p-8 flex flex-col"
            >
              <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                <Icon size={22} className="text-accent" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight block */}
        <div className="border border-accent/25 bg-accent/5 p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="flex-shrink-0 w-16 h-16 bg-accent flex items-center justify-center">
            <span className="text-primary font-black text-xl">!</span>
          </div>
          <div>
            <p className="text-white font-semibold text-base sm:text-lg leading-relaxed">
              A{" "}
              <span className="text-accent font-bold">
                Imersão Protagonistas de Resultados
              </span>
              , com o apoio da{" "}
              <span className="text-accent font-bold">Enjoy</span>, oferece um
              caminho claro para líderes que querem ir além e construir
              empresas que geram resultados consistentes e sustentáveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

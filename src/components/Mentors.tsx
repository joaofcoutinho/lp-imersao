import Image from "next/image";

const mentors = [
  {
    name: "Marcela Zaidem",
    role: "Cultura Organizacional e Gestão de Pessoas",
    highlight:
      "Transforma ambientes corporativos em máquinas de resultados. Especialista em cultura como alavanca estratégica.",
    photo: "/images/mentors/marcela.png",
  },
  {
    name: "Wander Miranda",
    role: "Crescimento em Vendas",
    highlight:
      "3 Pilares para transformar seu setor de vendas em uma máquina de crescimento previsível e escalável.",
    photo: "/images/mentors/wander.png",
  },
  {
    name: "Gustavo Fonseca",
    role: "Estratégia Empresarial",
    highlight:
      "Ajuste a sua visão e a rota estratégica da sua empresa. Especialista em posicionamento e crescimento sustentável.",
    photo: "/images/mentors/gustavo-fonseca.png",
  },
  {
    name: "Vitor Escocard",
    role: "Operação Milionária",
    highlight:
      "Como ele escalou a operação da Prudential no ES, atingindo uma receita de R$ 30 milhões.",
    photo: "/images/mentors/vitor-escocard.png",
  },
  {
    name: "Felipe Lomeu",
    role: "Growth Marketing",
    highlight:
      "Como estruturar um growth marketing previsível para acelerar receita com estratégia, dados e execução inteligente.",
    photo: "/images/mentors/felipe-lomeu.png",
  },
];

function MentorCard({ mentor: m }: { mentor: typeof mentors[0] }) {
  return (
    <div className="card-hover bg-primary-card border border-white/8 overflow-hidden flex flex-col">
      {/* Foto */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-primary-light">
        <Image
          src={m.photo}
          alt={m.name}
          fill
          className="object-cover object-top transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary-card to-transparent" />
      </div>
      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-white font-black text-lg mb-1">{m.name}</h3>
        <p className="text-accent text-xs font-bold tracking-wider uppercase mb-4">
          {m.role}
        </p>
        <div className="w-8 h-px bg-accent/40 mb-4" />
        <p className="text-white/55 text-sm leading-relaxed flex-1">{m.highlight}</p>
      </div>
    </div>
  );
}

export default function Mentors() {
  return (
    <section id="mentores" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-dark pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Quem vai te guiar
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            Aprenda com os Maiores
            <br />
            <span className="gold-text">Nomes do Mercado.</span>
          </h2>
          <p className="text-white/55 text-base sm:text-lg max-w-xl mx-auto">
            Mentores que vivem a realidade do mercado, trazendo insights
            práticos e estratégias comprovadas.
          </p>
        </div>

        {/* Linha 1 — 3 mentores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {mentors.slice(0, 3).map((m, i) => (
            <MentorCard key={i} mentor={m} />
          ))}
        </div>

        {/* Linha 2 — 2 mentores centralizados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-2/3 lg:mx-auto">
          {mentors.slice(3).map((m, i) => (
            <MentorCard key={i} mentor={m} />
          ))}
        </div>

        {/* CTA beneath mentors */}
        <div className="text-center mt-12">
          <a
            href="#inscricao"
            className="inline-flex items-center bg-transparent border border-accent/50 hover:bg-accent hover:border-accent text-accent hover:text-primary font-bold text-sm px-8 py-3.5 tracking-wider uppercase transition-all duration-200"
          >
            Aprender com esses mentores
          </a>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const mentors = [
  {
    name: "Maurilio Nunes",
    role: "Ex-Comandante do BOPE",
    highlight:
      "Formado em Direito pela Universidade Gama Filho, tem MBA em Gerenciamento de Projetos e Mestrado Executivo em Gestão Empresarial, ambos pela FGV.",
    photo: "/images/mentors/maurilio-nunes.png",
  },
  {
    name: "Julian Tonioli",
    role: "Partner Auddas",
    highlight:
      "Sócio da Auddas, Operating Partnership Company. Atua em modelo de cogestão focado em execução, com atuação baseada nos pilares de Governança, Gestão e Capital.",
    photo: "/images/mentors/julian-tonioli.png",
  },
  {
    name: "Yago Martins",
    role: "Viver de IA",
    highlight:
      "CEO e Co-founder do Viver de IA, Mentor no G4 Educação. Ganhou o Prêmio Growth Awards de Founder do ano em 2024. Construindo o maior ecossistema de IA para empresários do Brasil.",
    photo: "/images/mentors/yagomartins.jpg",
    photoPosition: "center 20%",
  },
  {
    name: "Marcela Zaidem",
    role: "Founder CNP People Solutions",
    highlight:
      "Especialista em Gestão de Pessoas, cultura e liderança. Fundadora da Cultura na Prática e ex-sócia do G4 Educação, onde atuou na geração de mais de 600 mil empregos.",
    photo: "/images/mentors/marcelazaidem.jpg",
    photoPosition: "center 20%",
  },
  {
    name: "Alan Wilckay Jr.",
    role: "Founder Skeps",
    highlight:
      "Referência em estratégias conversacionais que conectam marcas e clientes. Lidera projetos que impactam mais de 20 milhões de usuários por mês.",
    photo: "/images/mentors/alan.jpg",
    photoPosition: "center 20%",
  },
  {
    name: "Rafael Milagre",
    role: "Viver de IA",
    highlight:
      "CEO e Co-founder do Viver de IA, Mentor no G4 Educação. Ganhou o Prêmio Growth Awards de Founder do ano em 2024. Construindo o maior ecossistema de IA para empresários do Brasil.",
    photo: "/images/mentors/rafaelmialgre.jpg",
  },
  {
    name: "Daniel Moreira",
    role: "Founder & CEO Hub4Pay",
    highlight:
      "Fundador e CEO da Hub4pay, fintech especializada em marketing de incentivo e premiações digitais. Sob sua liderança, a Hub4pay já distribuiu mais de R$ 1 bilhão em recompensas.",
    photo: "/images/mentors/daniel-moreira.png",
  },
  {
    name: "Marcela Bello",
    role: "Founder 4C Digital",
    highlight:
      "Especialista em Crédito, Cobrança e automação de operações. Cofundadora da 4C Digital, com faturamento anual de R$ 10 milhões e mais de 30 milhões de disparos mensais.",
    photo: "/images/mentors/marcelabella.jpg",
  },
  {
    name: "Lucas Ferraz",
    role: "CEO e cofundador da Faz Capital",
    highlight:
      "CEO e cofundador da Faz Capital, credenciado à XP Investimentos. A empresa administra mais de R$ 8 bilhões sob custódia e atende mais de 13 mil clientes.",
    photo: "/images/mentors/lucas-ferraz.png",
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

function getInitials(name: string) {
  return name
    .split(" ")
    .filter((_, i, arr) => i === 0 || i === arr.length - 1)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function MentorCard({ mentor: m }: { mentor: (typeof mentors)[0] }) {
  return (
    <div className="card-hover bg-primary-card border border-white/8 overflow-hidden flex flex-col">
      {/* Foto */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-primary-light">
        {m.photo ? (
          <Image
            src={m.photo}
            alt={m.name}
            fill
            style={{ objectPosition: m.photoPosition || "center top" }}
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-light to-primary-card">
            <span className="text-4xl font-black gold-text">
              {getInitials(m.name)}
            </span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary-card to-transparent" />
      </div>
      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-white font-black text-lg mb-1">{m.name}</h3>
        <p className="text-accent text-xs font-bold tracking-wider uppercase mb-4">
          {m.role}
        </p>
        <div className="w-8 h-px bg-accent/40 mb-4" />
        <p className="text-white/55 text-sm leading-relaxed flex-1">
          {m.highlight}
        </p>
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

        {/* Grid de mentores — 3 por linha */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((m, i) => (
            <MentorCard key={i} mentor={m} />
          ))}
        </div>

        {/* CTA beneath mentors */}
        <div className="text-center mt-10">
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

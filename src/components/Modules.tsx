"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Coffee, Building2, Lightbulb, Crosshair, Bot, TrendingUp,
  Settings2, FileText, Gift, Users, Trophy, Rocket, Wallet,
  ChevronLeft, ChevronRight,
} from "lucide-react";

const modules = [
  { icon: Coffee,    title: "Cultura como Estratégia no Café da Manhã",          description: "Aplicação prática da cultura como direcionador das decisões diárias e da execução estratégica do negócio.",                                              photo: "/images/modules/cultura-cafe.png" },
  { icon: Building2, title: "Consciência Patrimonial",                            description: "Educação e alinhamento entre pessoas e negócio para decisões responsáveis e sustentáveis no longo prazo.",                                                 photo: "/images/modules/consciencia-patrimonial.png" },
  { icon: Lightbulb, title: "Cultura de Inovação",                                description: "Ambientes, rituais e processos que estimulam inovação contínua sem comprometer eficiência operacional.",                                                    photo: "/images/modules/cultura-inovacao.png" },
  { icon: Crosshair, title: "Liderança Extrema",                                  description: "Assumir responsabilidade total por decisões, pessoas e resultados com clareza, disciplina e execução consistente.",                                         photo: "/images/modules/lideranca-extrema.png" },
  { icon: Bot,       title: "A Nova Jornada do Cliente com IA",                   description: "Uso estratégico da IA para entender comportamentos, personalizar experiências e orientar decisões por dados.",                                               photo: "/images/modules/jornada-ia.png" },
  { icon: TrendingUp,title: "Finanças",                                            description: "Gestão financeira estratégica para sustentar crescimento, proteger margens e decidir com clareza.",                                                          photo: "/images/modules/financas.png" },
  { icon: Settings2, title: "Processos",                                           description: "Estruturação operacional para gerar eficiência, previsibilidade e escala no dia a dia da empresa.",                                                          photo: "/images/modules/processos.png" },
  { icon: FileText,  title: "Modelos de Contratação (CLT ou PJ)",                 description: "Critérios estratégicos para definir o modelo ideal de contratação conforme o momento do negócio.",                                                          photo: "/images/modules/contratacao.png" },
  { icon: Gift,      title: "Mecanismos de Incentivos para o Time",               description: "Estratégias de remuneração e incentivo alinhadas à performance e aos objetivos da empresa.",                                                                  photo: "/images/modules/incentivo-time.png" },
  { icon: Users,     title: "EVP + Founder Led Growth",                           description: "Construção de proposta de valor ao colaborador com liderança ativa e presença do fundador no crescimento.",                                                   photo: "/images/modules/growth.png" },
  { icon: Trophy,    title: "Construção de Times e Líderes de Alta Performance",  description: "Desenvolvimento de equipes e lideranças orientadas a resultados consistentes e sustentáveis.",                                                                photo: "/images/modules/times-lideres.png" },
  { icon: Rocket,    title: "Cultura como Alavanca",                              description: "Uso intencional da cultura como ferramenta estratégica para gerar alinhamento, performance e execução.",                                                      photo: "/images/modules/cultura-alavanca.png" },
  { icon: Wallet,    title: "Remuneração",                                        description: "Construção de modelos de remuneração alinhados à estratégia do negócio e à performance do time.",                                                             photo: "/images/modules/remuneracao.png" },
];

function getVisible(w: number) {
  if (w < 640) return 1;
  if (w < 1024) return 2;
  return 3;
}

export default function Modules() {
  const [visible, setVisible] = useState(3);
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = modules.length;

  useEffect(() => {
    const update = () => {
      const v = getVisible(window.innerWidth);
      setVisible(v);
      setCurrent((c) => Math.min(c, total - v));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [total]);

  const maxIndex = Math.max(total - visible, 0);
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  const gap = 20;
  const cardWidth = `calc((100% - ${(visible - 1) * gap}px) / ${visible})`;
  const translateX = `calc(-${current} * (100% / ${visible} + ${gap / visible}px))`;

  return (
    <section id="modulos" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-primary pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4">
            O que você vai aprender
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            Conteúdo Programático:
            <br />
            <span className="gold-text">Conhecimento em Ação.</span>
          </h2>
          <p className="text-white/55 text-sm sm:text-lg max-w-2xl mx-auto">
            Durante dois dias intensos, você mergulhará em{" "}
            <span className="text-white font-semibold">{total} módulos práticos e interativos</span>,
            projetados para oferecer soluções reais para os desafios da sua empresa.
          </p>
        </div>

        {/* Slider */}
        <div className="relative px-6 sm:px-8">
          {/* Seta esquerda */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 bg-primary-card border border-white/15 hover:border-accent/60 hover:bg-accent/10 flex items-center justify-center text-white/60 hover:text-accent transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Seta direita */}
          <button
            onClick={next}
            disabled={current === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 bg-primary-card border border-white/15 hover:border-accent/60 hover:bg-accent/10 flex items-center justify-center text-white/60 hover:text-accent transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronRight size={18} />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ gap: `${gap}px`, transform: `translateX(${translateX})` }}
            >
              {modules.map(({ icon: Icon, title, description, photo }, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-primary-card border border-white/8 overflow-hidden flex flex-col hover:border-accent/30 transition-colors duration-300"
                  style={{ width: cardWidth }}
                >
                  {/* Foto */}
                  <div className="relative w-full aspect-video overflow-hidden group">
                    <Image
                      src={photo}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#021929] via-[#021929]/60 to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 w-7 h-7 bg-accent flex items-center justify-center z-10">
                      <span className="text-primary font-black text-xs leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-accent/10 border border-accent/20 flex items-center justify-center mt-0.5">
                        <Icon size={15} className="text-accent" />
                      </div>
                      <h3 className="text-white font-bold text-sm leading-snug">{title}</h3>
                    </div>
                    <p className="text-white/45 text-xs leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-none ${
                i === current ? "w-6 h-1.5 bg-accent" : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-2">
          {current + 1}–{Math.min(current + visible, total)} de {total} módulos
        </p>

        {/* Stats bar */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/8">
          {[
            { value: "13", label: "Módulos" },
            { value: "2",  label: "Dias intensos" },
            { value: "100%", label: "Presencial" },
          ].map((s, i) => (
            <div key={i} className="bg-primary-card p-5 sm:p-6 text-center">
              <p className="text-2xl sm:text-3xl font-black gold-text mb-1">{s.value}</p>
              <p className="text-white/50 text-xs tracking-wider uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

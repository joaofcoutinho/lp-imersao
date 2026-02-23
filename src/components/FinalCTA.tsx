"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Clock } from "lucide-react";

const EVENT_DATE = new Date("2026-03-24T08:00:00-03:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-primary-card border border-accent/25 w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center">
        <span className="text-2xl sm:text-3xl font-black gold-text tabular-nums">
          {pad(value)}
        </span>
      </div>
      <span className="text-white/40 text-xs tracking-wider uppercase mt-2">
        {label}
      </span>
    </div>
  );
}

export default function FinalCTA() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inscricao"
      className="py-28 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-card pointer-events-none" />
      <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute top-10 left-10 w-24 h-24 border-l-2 border-t-2 border-accent/20 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border-r-2 border-b-2 border-accent/20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-8">
          <Clock size={12} className="flex-shrink-0" />
          Vagas Limitadas · Garante a sua agora
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
          Não Deixe o Futuro da
          <br />
          <span className="gold-text">Sua Liderança</span>
          <br />
          para Depois.
        </h2>

        {/* Sub */}
        <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          A oportunidade de transformar sua gestão com o apoio da{" "}
          <span className="text-accent font-semibold">Enjoy</span> e dos{" "}
          <span className="text-white font-semibold">
            Protagonistas de Resultados
          </span>{" "}
          é única. Garanta seu lugar em Vitória e construa o legado que sua
          empresa merece.
        </p>

        {/* Countdown */}
        <div className="flex items-start justify-center gap-3 sm:gap-5 mb-14">
          <CountdownUnit value={timeLeft.days} label="Dias" />
          <span className="text-accent/60 text-2xl font-light mt-4">:</span>
          <CountdownUnit value={timeLeft.hours} label="Horas" />
          <span className="text-accent/60 text-2xl font-light mt-4">:</span>
          <CountdownUnit value={timeLeft.minutes} label="Min" />
          <span className="text-accent/60 text-2xl font-light mt-4">:</span>
          <CountdownUnit value={timeLeft.seconds} label="Seg" />
        </div>

        {/* Event date reminder */}
        <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold mb-10">
          <span>24 e 25 de Março de 2026</span>
          <span className="text-accent/40">·</span>
          <span>Vitória / ES</span>
          <span className="text-accent/40">·</span>
          <span>Presencial · All Inclusive</span>
        </div>

        {/* Main CTA */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://culturanapratica.com.br/imersao-vitoria-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pulse w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-light text-primary font-black text-sm sm:text-base px-10 py-5 tracking-wider uppercase transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-accent/25"
          >
            Quero Ser um Protagonista de Resultados com a Enjoy!
            <ArrowRight size={18} className="flex-shrink-0" />
          </a>

          <p className="text-white/30 text-xs tracking-wide">
            Ao clicar, você será direcionado para o site oficial do evento.
          </p>
        </div>
      </div>
    </section>
  );
}

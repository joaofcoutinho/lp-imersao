import { Flame, ArrowRight } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-accent text-primary overflow-hidden">
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3">
        <Flame size={14} className="flex-shrink-0 fill-primary/40" />
        <p className="text-xs sm:text-sm font-bold tracking-wide text-center">
          <span className="font-black uppercase">Vagas Limitadas</span>
          <span className="mx-2 opacity-50">·</span>
          <span>24 e 25 de Março de 2026 · Vitória/ES</span>
          <span className="mx-2 opacity-50">·</span>
          <span className="hidden sm:inline">Presencial e All Inclusive</span>
        </p>
        <a
          href="#inscricao"
          className="hidden sm:inline-flex items-center gap-1 bg-primary/15 hover:bg-primary/25 text-primary font-black text-xs px-3 py-1 tracking-wider uppercase transition-colors flex-shrink-0"
        >
          Garantir vaga <ArrowRight size={11} />
        </a>
        <Flame size={14} className="flex-shrink-0 fill-primary/40" />
      </div>
    </div>
  );
}

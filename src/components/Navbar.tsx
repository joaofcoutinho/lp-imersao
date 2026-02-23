"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Por que participar?", href: "#problema" },
    { label: "Mentores", href: "#mentores" },
    { label: "Conteúdo", href: "#modulos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-sm shadow-lg border-b border-accent/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logos */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 bg-accent flex items-center justify-center">
                <span className="text-primary font-black text-xs leading-none">E</span>
              </div>
              <span className="text-white font-bold text-base tracking-widest uppercase">Enjoy</span>
            </div>
            <span className="text-accent/40 font-light text-lg">×</span>
            <span className="text-white/80 font-medium text-xs sm:text-sm tracking-wider uppercase">
              Protagonistas
            </span>
          </div>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/70 hover:text-accent text-sm font-medium transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#inscricao"
              className="hidden sm:inline-flex items-center bg-accent hover:bg-accent-light text-primary font-bold text-sm px-5 py-2.5 transition-all duration-200 tracking-wider uppercase"
            >
              Garantir Vaga
            </a>
            <button
              className="lg:hidden text-white/80 hover:text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary-dark/98 backdrop-blur-sm border-t border-accent/20">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/80 hover:text-accent text-sm font-medium py-3 border-b border-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#inscricao"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex justify-center bg-accent text-primary font-bold text-sm px-5 py-3 tracking-wider uppercase"
            >
              Garantir Vaga
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

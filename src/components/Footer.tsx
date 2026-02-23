import { Instagram, Linkedin, Youtube } from "lucide-react";

const links = {
  enjoy: [
    { label: "Site Enjoy", href: "https://enjoywork.com.br" },
    { label: "Instagram Enjoy", href: "#" },
    { label: "LinkedIn Enjoy", href: "#" },
  ],
  imersao: [
    { label: "Site do Evento", href: "https://culturanapratica.com.br/imersao-vitoria-2026/" },
    { label: "Instagram Protagonistas", href: "#" },
    { label: "Canal YouTube", href: "#" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "Contato", href: "#" },
  ],
};

const socials = [
  { icon: Instagram, label: "Instagram Enjoy", href: "#" },
  { icon: Linkedin, label: "LinkedIn Enjoy", href: "#" },
  { icon: Youtube, label: "YouTube Protagonistas", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute inset-0 bg-primary-dark pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Branding */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-3 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-accent flex items-center justify-center">
                  <span className="text-primary font-black text-xs">E</span>
                </div>
                <span className="text-white font-black text-base tracking-widest uppercase">Enjoy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 border border-accent/50 flex items-center justify-center">
                  <span className="text-accent font-black text-xs">P</span>
                </div>
                <span className="text-white/70 font-semibold text-sm tracking-wider uppercase">Protagonistas</span>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed mb-5">
              Parceria oficial para a{" "}
              <span className="text-white/60">Imersão Protagonistas de Resultados</span>{" "}
              — Vitória 2026.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 border border-white/15 hover:border-accent/50 flex items-center justify-center text-white/40 hover:text-accent transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Enjoy */}
          <div>
            <h4 className="text-accent text-xs font-bold tracking-[0.25em] uppercase mb-5">Enjoy</h4>
            <ul className="flex flex-col gap-3">
              {links.enjoy.map((l, i) => (
                <li key={i}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer"
                    className="text-white/45 hover:text-accent text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Imersão */}
          <div>
            <h4 className="text-accent text-xs font-bold tracking-[0.25em] uppercase mb-5">Imersão</h4>
            <ul className="flex flex-col gap-3">
              {links.imersao.map((l, i) => (
                <li key={i}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer"
                    className="text-white/45 hover:text-accent text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-accent text-xs font-bold tracking-[0.25em] uppercase mb-5">Legal</h4>
            <ul className="flex flex-col gap-3">
              {links.legal.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-white/45 hover:text-accent text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-accent" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Enjoy Work · Imersão Protagonistas de Resultados — Vitória 2026. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">24 e 25 de Março de 2026 · Vitória/ES</p>
        </div>
      </div>
    </footer>
  );
}

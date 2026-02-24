const videos = [
  {
    title: "Eles Fizeram a Imersão e Viraram Protagonistas de Resultados",
    channel: "CNP in House",
    embedId: "ZdZNZTXi5L0",
  },
  {
    title: "Depoimentos Reais: Mentorados da Imersão Protagonistas de Resultados",
    channel: "CNP in House",
    embedId: "iBzldPDULTY",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-dark pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Casos de sucesso
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            Quem Já Viveu Essa
            <br />
            <span className="gold-text">Transformação Recomenda.</span>
          </h2>
          <p className="text-white/55 text-base max-w-xl mx-auto">
            Veja o impacto da Imersão Protagonistas de Resultados nos negócios
            e carreiras de outros líderes.
          </p>
        </div>

        {/* Videos embeds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {videos.map((v, i) => (
            <div
              key={i}
              className="bg-primary-card border border-white/8 overflow-hidden"
            >
              {/* YouTube embed */}
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${v.embedId}?rel=0&modestbranding=1`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              {/* Info */}
              <div className="px-5 py-4 border-t border-white/8">
                <p className="text-accent text-xs font-bold tracking-wider uppercase mb-1">
                  {v.channel}
                </p>
                <h3 className="text-white font-semibold text-sm leading-snug">
                  {v.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import heroOriginal from "../assets/images/hero-original.svg";

export default function OriginalHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[440px] sm:h-[500px] md:h-[560px] lg:h-[620px] bg-neutral-900">
        <img
          src={heroOriginal}
          alt="Grand Theft Auto Online San Andreas Mercenárias"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-10 pb-20 lg:py-0">
          <div className="max-w-xl">
            <p className="text-amber-300 text-[11px] sm:text-sm font-extrabold tracking-[0.25em] uppercase mb-3">
              Grand Theft Auto Online
            </p>
            <h1 className="font-anton text-4xl sm:text-6xl lg:text-7xl leading-[0.92] uppercase text-white drop-shadow-lg">
              Grand Theft<br />Auto Online<br />
              <span className="text-amber-400">San Andreas</span><br />Mercenárias
            </h1>
          </div>
          <div className="lg:max-w-xs w-full bg-black/45 backdrop-blur-sm p-4 sm:p-6 rounded">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-300 mb-2">
              Grand Theft Auto Online
            </p>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-5 leading-snug">
              San Andreas Mercenárias já disponível
            </h2>
            <button className="border border-white text-white text-xs sm:text-sm font-extrabold px-5 py-2.5 tracking-wide hover:bg-white hover:text-black transition w-full sm:w-auto">
              ASSISTA AGORA
            </button>
          </div>
        </div>
        <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="w-7 h-1 bg-amber-400 rounded-full" />
          <span className="w-7 h-1 bg-white/30 rounded-full" />
          <span className="w-7 h-1 bg-white/30 rounded-full" />
          <span className="w-7 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
    </section>
  );
}

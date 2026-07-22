import heroRedesign from "../assets/images/hero-redesign.svg";

export default function RedesignHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[500px] sm:h-[600px] md:h-[680px] lg:h-[760px] bg-neutral-900">
        <img
          src={heroRedesign}
          alt="Grand Theft Auto VI"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="relative h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-end pb-10 sm:pb-16">
          <h1 className="font-anton text-5xl sm:text-7xl lg:text-8xl text-white leading-[0.88] uppercase drop-shadow-2xl lowercase">
            grand theft<br />auto <span className="uppercase">VI</span>
          </h1>
          <p className="text-white/85 text-xs sm:text-sm font-extrabold tracking-[0.35em] mt-3">COMING 2025</p>
        </div>
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-amber-400 rounded flex items-center justify-center font-black italic text-black text-sm shadow-lg">
          R★
        </div>
      </div>
    </section>
  );
}

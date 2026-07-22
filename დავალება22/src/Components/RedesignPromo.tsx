import promoRdr2 from "../assets/images/promo-rdr2-buynow.svg";

export default function RedesignPromo() {
  return (
    <section className="px-3 sm:px-6 lg:px-10 pb-10 sm:pb-16 max-w-[1400px] mx-auto">
      <div className="flex gap-3 sm:gap-4">
        <div
          className="flex-1 rounded-lg sm:rounded-xl p-4 sm:p-10 flex flex-col justify-center"
          style={{ backgroundImage: "linear-gradient(120deg, #ff7a3d 0%, #e6432f 55%, #a8231f 100%)" }}
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
            <div className="w-7 h-7 sm:w-10 sm:h-10 bg-black rounded flex items-center justify-center text-amber-400 font-black italic text-xs sm:text-sm shrink-0">
              R★
            </div>
            <h3 className="text-white font-anton text-sm sm:text-2xl uppercase leading-tight">Games Launcher</h3>
          </div>
          <p className="text-white/90 text-[10px] sm:text-base mb-3 sm:mb-6">Todos os seus jogos em um só lugar.</p>
          <button className="bg-amber-400 hover:bg-amber-300 transition text-black text-[10px] sm:text-sm font-extrabold px-3 sm:px-6 py-1.5 sm:py-2.5 rounded w-fit">
            Download
          </button>
        </div>
        <div
          className="flex-1 rounded-lg sm:rounded-xl overflow-hidden border border-neutral-800"
          style={{ aspectRatio: "660/471" }}
        >
          <img src={promoRdr2} alt="Rockstar Games Launcher" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

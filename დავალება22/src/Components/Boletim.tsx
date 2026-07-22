import { newsItems } from "../data";

export default function Boletim() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
      <h2 className="font-anton text-2xl sm:text-3xl uppercase text-white mb-6">Boletim</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {newsItems.map((item) => (
          <article key={item.id} className="group cursor-pointer">
            <div
              className="rounded-[3px] overflow-hidden bg-neutral-900"
              style={{ aspectRatio: item.aspect }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <p className="text-[11px] text-neutral-500 mt-3">{item.date}</p>
            <h3 className="text-sm sm:text-[15px] font-bold text-white mt-1 group-hover:text-amber-400 transition">
              {item.title}
            </h3>
          </article>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="text-xs sm:text-sm font-bold text-white underline underline-offset-4 hover:text-amber-400 transition">
          View More
        </button>
      </div>
    </section>
  );
}

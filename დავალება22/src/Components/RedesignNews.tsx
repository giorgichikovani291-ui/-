import { newsItems } from "../data";

export default function RedesignNews() {
  const [featured, ...rest] = newsItems;
  const small = rest.slice(0, 2);

  return (
    <section className="px-3 sm:px-6 lg:px-10 py-8 sm:py-14 max-w-[1400px] mx-auto">
      <h2 className="font-anton text-lg sm:text-3xl uppercase text-white mb-4 sm:mb-6">Últimas Notícias</h2>
      <div className="flex gap-3 sm:gap-6">
        <article className="flex-[2] group cursor-pointer min-w-0">
          <div
            className="rounded-md sm:rounded-lg overflow-hidden relative bg-neutral-900"
            style={{ aspectRatio: featured.aspect }}
          >
            <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
          </div>
          <p className="text-[9px] sm:text-[11px] text-neutral-500 mt-2 sm:mt-3">Rockstar Games · {featured.date}</p>
          <h3 className="text-[11px] sm:text-lg font-bold text-white mt-1 group-hover:text-amber-400 transition leading-snug">
            {featured.title}
          </h3>
        </article>
        <div className="flex-1 flex flex-col gap-2 sm:gap-5 min-w-0">
          {small.map((item) => (
            <article key={item.id} className="cursor-pointer group">
              <div
                className="rounded-md overflow-hidden bg-neutral-900"
                style={{ aspectRatio: item.aspect }}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-[8px] sm:text-[10px] text-neutral-500 mt-1">{item.date}</p>
              <h4 className="text-[9px] sm:text-sm font-bold text-white group-hover:text-amber-400 transition leading-snug line-clamp-2">
                {item.title}
              </h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

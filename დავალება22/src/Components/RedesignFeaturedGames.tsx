import { useState } from "react";
import GameCard from "./GameCard";
import { games } from "../data";

const filters = ["PC", "Console", "Dispositivos Portáteis"];

export default function RedesignFeaturedGames() {
  const [activeFilter, setActiveFilter] = useState("PC");

  return (
    <section className="px-3 sm:px-6 lg:px-10 py-8 sm:py-14 max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between gap-2 mb-4 sm:mb-6">
        <h2 className="font-anton text-lg sm:text-3xl uppercase text-white">Jogos em Destaque</h2>
        <div className="flex gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? "px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-[8px] sm:text-xs font-bold whitespace-nowrap shrink-0 transition bg-white text-black"
                  : "px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-[8px] sm:text-xs font-bold whitespace-nowrap shrink-0 transition border border-neutral-700 text-neutral-300 hover:border-neutral-500"
              }
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} rounded="rounded-md sm:rounded-lg" />
        ))}
      </div>
      <div className="mt-5 sm:mt-8 text-center">
        <button className="bg-amber-400 hover:bg-amber-300 transition text-black text-[11px] sm:text-sm font-extrabold px-4 sm:px-6 py-2 sm:py-2.5 rounded">
          Ver todos os jogos
        </button>
      </div>
    </section>
  );
}

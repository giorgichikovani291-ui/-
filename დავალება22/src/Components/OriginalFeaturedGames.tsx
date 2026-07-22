import GameCard from "./GameCard";
import { games } from "../data";

export default function OriginalFeaturedGames() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-14 sm:pb-20">
      <h2 className="font-anton text-2xl sm:text-3xl uppercase text-white mb-6">Jogos em destaque</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} rounded="rounded-[3px]" />
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

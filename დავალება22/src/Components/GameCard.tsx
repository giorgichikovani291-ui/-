import type { GameCardProps } from "../types";

export default function GameCard({ game, rounded = "rounded-[3px]" }: GameCardProps) {
  return (
    <div className={`${rounded} overflow-hidden bg-neutral-900`} style={{ aspectRatio: game.aspect }}>
      <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
    </div>
  );
}

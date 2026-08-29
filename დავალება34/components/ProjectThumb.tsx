export default function ProjectThumb({
  colorFrom,
  colorTo,
  title,
}: {
  colorFrom: string;
  colorTo: string;
  title: string;
}) {
  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-sm"
      style={{ backgroundImage: `linear-gradient(135deg, ${colorFrom}, ${colorTo})` }}
    >
      <div className="absolute left-3 top-3 flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-white/40" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
      </div>
      <span className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-wide text-white/70">
        {title}
      </span>
    </div>
  );
}

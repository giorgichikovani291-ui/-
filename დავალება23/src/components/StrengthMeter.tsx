import type { StrengthMeterProps } from "../types";

const levels = [
  { label: "TOO WEAK!", color: "bg-red", border: "border-red" },
  { label: "WEAK", color: "bg-orange", border: "border-orange" },
  { label: "MEDIUM", color: "bg-yellow", border: "border-yellow" },
  { label: "STRONG", color: "bg-green", border: "border-green" },
];

export default function StrengthMeter({ level }: StrengthMeterProps) {
  const current = level >= 0 ? levels[level] : null;

  return (
    <div className="flex items-center justify-between bg-bg px-4 py-4">
      <span className="text-muted text-sm md:text-base uppercase">Strength</span>
      <div className="flex items-center gap-3">
        {current && (
          <span className="text-light text-lg md:text-xl font-bold uppercase">
            {current.label}
          </span>
        )}
        <div className="flex items-center gap-1">
          {[0, 1, 2, 3].map((bar) => (
            <span
              key={bar}
              className={`w-2 h-6 border-2 ${
                current && bar <= level ? `${current.color} ${current.border}` : "border-light"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import type { LengthSliderProps } from "../types";

export default function LengthSlider({ length, onChange }: LengthSliderProps) {
  const percent = (length / 20) * 100;

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-light text-sm md:text-base">Character Length</span>
        <span className="text-green text-xl md:text-2xl font-bold">{length}</span>
      </div>
      <input
        type="range"
        min={0}
        max={20}
        value={length}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full mt-2"
        style={{
          background: `linear-gradient(to right, #A4FFAF ${percent}%, #18171F ${percent}%)`,
        }}
      />
    </div>
  );
}

import type { CheckboxProps } from "../types";

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <label className="flex items-center gap-4 cursor-pointer select-none">
      <span
        onClick={onChange}
        className={`w-5 h-5 flex items-center justify-center border-2 ${
          checked ? "bg-green border-green" : "border-light"
        }`}
      >
        {checked && (
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <path d="M1 5L4.5 8.5L11 1" stroke="#18171F" strokeWidth="2" />
          </svg>
        )}
      </span>
      <span className="text-light text-sm md:text-base">{label}</span>
    </label>
  );
}

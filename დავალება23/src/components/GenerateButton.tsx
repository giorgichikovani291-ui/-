import type { GenerateButtonProps } from "../types";

export default function GenerateButton({ onClick }: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 bg-green text-bg font-bold uppercase tracking-widest py-4 border-2 border-green hover:bg-transparent hover:text-green"
    >
      Generate
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" />
      </svg>
    </button>
  );
}

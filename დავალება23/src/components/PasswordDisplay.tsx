import type { PasswordDisplayProps } from "../types";

export default function PasswordDisplay({ password, copied, onCopy }: PasswordDisplayProps) {
  return (
    <div className="flex items-center justify-between bg-panel px-6 py-4">
      <span
        className={`text-2xl md:text-3xl font-bold tracking-wide truncate ${
          password ? "text-light" : "text-muted"
        }`}
      >
        {password || "P4$5W0rD!"}
      </span>
      <div className="flex items-center gap-3 shrink-0">
        {copied && (
          <span className="text-green text-sm md:text-base tracking-widest">COPIED</span>
        )}
        <button
          onClick={onCopy}
          disabled={!password}
          className="text-light hover:text-green disabled:opacity-40"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M8 8V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3M8 8H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3M8 8h8v8H8V8Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

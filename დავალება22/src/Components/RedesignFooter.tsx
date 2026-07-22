import type { RedesignFooterProps } from "../types";

export default function RedesignFooter({ onBackToOriginal }: RedesignFooterProps) {
  return (
    <footer className="border-t border-neutral-900 px-4 sm:px-6 lg:px-10 py-8">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <button onClick={onBackToOriginal} className="font-black italic text-lg text-left">
            R★
          </button>
          <div className="flex flex-wrap gap-4 text-[11px] font-semibold text-neutral-400">
            <span>CONTATO</span>
            <span>SOBRE</span>
            <span>SUPORTE</span>
            <span>EMPREGOS</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-neutral-400">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
            </svg>
          ))}
        </div>
      </div>
      <p className="max-w-[1400px] mx-auto text-[10px] text-neutral-600 mt-5">
        © 2023 Rockstar Games, Inc. Todos os direitos reservados. VVI Studio.
      </p>
    </footer>
  );
}

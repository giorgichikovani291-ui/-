import type { RedesignNavProps } from "../types";
import { SearchIcon, UserIcon } from "./Icons";

export default function RedesignNav({ onBackToOriginal }: RedesignNavProps) {
  return (
    <header className="bg-black/95 backdrop-blur sticky top-0 z-50 border-b border-neutral-900">
      <nav className="flex items-center justify-between px-3 sm:px-6 lg:px-10 py-2.5 sm:py-3.5 gap-2">
        <div className="flex items-center gap-2 sm:gap-8 min-w-0">
          <button
            onClick={onBackToOriginal}
            className="w-7 h-7 sm:w-8 sm:h-8 border-2 border-white flex items-center justify-center font-black italic text-[10px] sm:text-xs shrink-0"
          >
            R
          </button>
          <ul className="flex items-center gap-2 sm:gap-6 text-[10px] sm:text-[13px] font-semibold text-neutral-300 whitespace-nowrap">
            <li>
              <a href="#" className="hover:text-white transition flex items-center gap-0.5">
                Jogos
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
            </li>
            <li><a href="#" className="hover:text-white transition">Loja</a></li>
            <li><a href="#" className="hover:text-white transition">Ajuda</a></li>
          </ul>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-4 shrink-0">
          <button className="bg-amber-400 hover:bg-amber-300 transition text-black text-[9px] sm:text-xs font-extrabold tracking-wide px-2.5 sm:px-4 py-1.5 sm:py-2 rounded whitespace-nowrap">
            Baixe o Launcher
          </button>
          <button
            className="text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-neutral-700 flex items-center justify-center shrink-0"
            aria-label="Buscar"
          >
            <SearchIcon />
          </button>
          <button
            className="text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-neutral-700 flex items-center justify-center shrink-0"
            aria-label="Conta"
          >
            <UserIcon />
          </button>
        </div>
      </nav>
    </header>
  );
}

import { useState } from "react";
import type { OriginalNavProps } from "../types";
import { MenuIcon, SearchIcon, UserIcon } from "./Icons";

export default function OriginalNav({ onGetLauncher }: OriginalNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black sticky top-0 z-50">
      <div className="bg-gradient-to-r from-fuchsia-400 via-orange-300 to-purple-500 py-1.5 px-4 text-center">
        <p className="text-[10px] sm:text-xs font-bold tracking-wide uppercase text-black">
          Veja o 1º trailer de Grand Theft Auto VI agora
        </p>
      </div>
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 border-b border-neutral-900">
        <div className="flex items-center gap-3">
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white" aria-label="Menu">
            <MenuIcon />
          </button>
          <div className="w-8 h-8 border-2 border-white flex items-center justify-center font-black italic text-xs">R</div>
        </div>
        <ul className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-neutral-300">
          <li><a href="#" className="hover:text-white transition">Jogos</a></li>
          <li><a href="#" className="hover:text-white transition">Boletim</a></li>
          <li><a href="#" className="hover:text-white transition">Vídeos</a></li>
          <li><a href="#" className="hover:text-white transition">Downloads</a></li>
          <li><a href="#" className="hover:text-white transition">Loja</a></li>
          <li><a href="#" className="hover:text-white transition">Suporte</a></li>
        </ul>
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="text-white" aria-label="Buscar">
            <SearchIcon />
          </button>
          <button className="hidden sm:block text-white" aria-label="Conta">
            <UserIcon />
          </button>
          <button
            onClick={onGetLauncher}
            className="bg-amber-400 hover:bg-amber-300 transition text-black text-[11px] sm:text-xs font-extrabold tracking-wide px-3 sm:px-5 py-2 rounded-[2px]"
          >
            OBTER LAUNCHER
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-neutral-900 px-4 py-4">
          <ul className="flex flex-col gap-4 text-sm font-semibold text-neutral-300">
            <li><a href="#" className="hover:text-white">Jogos</a></li>
            <li><a href="#" className="hover:text-white">Boletim</a></li>
            <li><a href="#" className="hover:text-white">Vídeos</a></li>
            <li><a href="#" className="hover:text-white">Downloads</a></li>
            <li><a href="#" className="hover:text-white">Loja</a></li>
            <li><a href="#" className="hover:text-white">Suporte</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

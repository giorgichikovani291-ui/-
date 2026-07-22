export default function OriginalFooter() {
  return (
    <footer className="border-t border-neutral-900 px-4 sm:px-6 lg:px-10 pt-8 pb-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-neutral-900 text-xs text-neutral-400">
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Empregos ↗</a>
            <a href="#" className="hover:text-white">Inscreva-se ↗</a>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Selecione um idioma</span>
            <span>▾</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6 text-[10px] sm:text-[11px] text-neutral-500">
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <span>Corporativo</span>
            <span>Privacidade</span>
            <span>Cookies</span>
            <span>Política de Cookies</span>
            <span>Aviso Legal</span>
            <span>Não vender minha informação</span>
          </div>
          <div className="flex items-center gap-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" />
              </svg>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-4 text-[10px] text-neutral-600">
          <div className="font-black italic text-lg text-neutral-700">R★ ROCKSTAR GAMES</div>
          <p>New York · London · Paris · Bogotá</p>
        </div>
      </div>
    </footer>
  );
}

import type { HeaderProps } from "./types";

export default function Header({ isDark, onToggleTheme }: HeaderProps) {
  return (
    <div className="header">
      <span className="header-logo">devfinder</span>
      <button className="header-theme-btn" onClick={onToggleTheme}>
        {isDark ? "LIGHT" : "DARK"}
        <span className="header-theme-icon">{isDark ? "☀️" : "🌙"}</span>
      </button>
    </div>
  );
}

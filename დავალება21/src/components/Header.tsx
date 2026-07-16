import { useState } from "react";
import type { Planet } from "../types";
import "./Header.css";

interface HeaderProps {
  planets: Planet[];
  selectedPlanet: number;
  onSelectPlanet: (index: number) => void;
}

export default function Header({
  planets,
  selectedPlanet,
  onSelectPlanet,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSelect(index: number) {
    onSelectPlanet(index);
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="header-top">
        <h1 className="logo">the planets</h1>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "close" : "menu"}
        </button>
      </div>

      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        <ul className="nav-list">
          {planets.map((planet, index) => (
            <li key={planet.name} className="nav-item">
              <button
                className={
                  index === selectedPlanet ? "nav-button active" : "nav-button"
                }
                onClick={() => handleSelect(index)}
              >
                {planet.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

import { CloseIcon } from "./Icons";
import type { MenuProps } from "./type";

export default function Menu({ setMenuOpen }: MenuProps) {
  return (
    // ბნელი ფონი - მასზე დაჭერით მენიუ იხურება
    <div className="menu-backdrop" onClick={() => setMenuOpen(false)}>
      <div className="menu-panel" onClick={(e) => e.stopPropagation()}>
        <button
          className="menu-close"
          onClick={() => setMenuOpen(false)}
          aria-label="მენიუს დახურვა"
        >
          <CloseIcon />
        </button>

        <nav className="nav-mobile">
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </div>
  );
}

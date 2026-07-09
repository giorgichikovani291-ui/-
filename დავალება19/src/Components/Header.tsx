import { CartIcon, MenuIcon } from "./Icons";
import avatar from "../assets/ProfilePicture.png";
import type { HeaderProps } from "./type";

export default function Header({
  menuOpen,
  setMenuOpen,
  cartOpen,
  setCartOpen,
  cartQuantity,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="header-left">
        {/* ეს ღილაკი მხოლოდ მობილურზე ჩანს, CSS მართავს */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="მენიუს გახსნა"
        >
          <MenuIcon />
        </button>

        <p className="logo">sneakers.</p>

        {/* ეს ნავიგაცია მხოლოდ დესქტოპზე ჩანს */}
        <nav className="nav-desktop">
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>

      <div className="header-right">
        <button
          className="cart-btn"
          onClick={() => setCartOpen(!cartOpen)}
          aria-label="კალათის გახსნა"
        >
          <CartIcon color="#69707D" />
          {cartQuantity > 0 && (
            <span className="cart-count">{cartQuantity}</span>
          )}
        </button>

        {/* შენი ავატარის ფოტო assets-იდან */}
        <img src={avatar} alt="ავატარი" className="avatar" />
      </div>
    </header>
  );
}

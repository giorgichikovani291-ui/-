import { NavLink, Link } from "react-router-dom"
import type { NavLinkItem } from "../types"
import Button from "./Button"

const navLinks: NavLinkItem[] = [
  { label: "About", path: "/about" },
  { label: "Location", path: "/locations" },
  { label: "Careers", path: "/careers" },
]

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-6 bg-white relative z-20">
      <Link to="/" className="font-heading font-bold text-xl text-dark-navy">
        scoot
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `font-heading text-[13px] px-3 py-1.5 border rounded-sm transition-colors ${
                isActive
                  ? "border-yellow text-yellow"
                  : "border-transparent text-dark-navy hover:border-yellow hover:text-yellow"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <Button href="#">Get Scootin</Button>
    </header>
  )
}

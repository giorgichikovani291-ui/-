import { Link } from "react-router-dom"
import type { NavLinkItem } from "../types"
import CTABanner from "./CTABanner"
import SocialLinks from "./SocialLinks"

const footerLinks: NavLinkItem[] = [
  { label: "About", path: "/about" },
  { label: "Location", path: "/locations" },
  { label: "Careers", path: "/careers" },
]

export default function Footer() {
  return (
    <footer>
      <CTABanner />
      <div className="bg-dark-navy border-t border-white/10 px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="font-heading font-bold text-white text-lg">
          scoot
        </Link>
        <nav className="flex gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white/70 text-[13px] font-heading hover:text-yellow"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <SocialLinks />
      </div>
    </footer>
  )
}

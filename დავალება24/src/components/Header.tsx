import bgMobile from '../assets/bg-header-mobile.svg'
import bgDesktop from '../assets/bg-header-desktop.svg'

export default function Header() {
  return (
    <header className="relative h-[156px] bg-[#5ba4a4]">
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat block md:hidden"
        style={{ backgroundImage: `url(${bgMobile})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${bgDesktop})` }}
      />
    </header>
  )
}

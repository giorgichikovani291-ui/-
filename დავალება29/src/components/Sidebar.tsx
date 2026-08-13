import { NavLink } from 'react-router-dom'
import { LogoIcon, HomeIcon, MoviesIcon, SeriesIcon, BookmarkIcon } from './icons/Icons'
import type { NavLink as NavLinkType } from '../types'

const links: NavLinkType[] = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/movies', label: 'Movies', icon: 'movies' },
  { to: '/tv-series', label: 'TV Series', icon: 'series' },
  { to: '/bookmarked', label: 'Bookmarked', icon: 'bookmark' },
]

function renderIcon(icon: NavLinkType['icon'], className: string) {
  if (icon === 'home') return <HomeIcon className={className} />
  if (icon === 'movies') return <MoviesIcon className={className} />
  if (icon === 'series') return <SeriesIcon className={className} />
  return <BookmarkIcon className={className} />
}

export default function Sidebar() {
  return (
    <aside className="flex lg:flex-col items-center justify-between lg:justify-start w-full lg:w-24 lg:h-[calc(100vh-2.5rem)] lg:my-5 lg:ml-5 px-5 py-4 lg:py-8 bg-semiDark lg:rounded-2xl">
      <LogoIcon className="w-8 h-6 text-red shrink-0" />

      <nav className="flex lg:flex-col gap-6 lg:gap-8 lg:mt-16">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `transition-colors ${isActive ? 'text-red' : 'text-blueGrey hover:text-white'}`
            }
          >
            {({ isActive }) => renderIcon(link.icon, `w-6 h-6 ${isActive ? 'text-red' : ''}`)}
          </NavLink>
        ))}
      </nav>

      <div className="w-8 h-8 rounded-full bg-blueGrey/40 border border-blueGrey shrink-0 lg:mt-auto" />
    </aside>
  )
}

import type { City } from '../types'
import SearchBar from './SearchBar'
import WeatherDetails from './WeatherDetails'
import ForecastList from './ForecastList'

interface SidebarProps {
  cities: City[]
  city: City
  onSelectCity: (city: City) => void
}

export default function Sidebar({ cities, city, onSelectCity }: SidebarProps) {
  return (
    <div className="relative flex w-full flex-col gap-6 overflow-hidden bg-[#12141a] p-8 md:w-[38%]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />
      <div className="relative flex min-h-0 flex-1 flex-col gap-6">
        <SearchBar cities={cities} onSelect={onSelectCity} />
        <WeatherDetails city={city} />
        <div className="h-px w-full bg-white/10" />
        <ForecastList forecast={city.forecast} />
      </div>
    </div>
  )
}

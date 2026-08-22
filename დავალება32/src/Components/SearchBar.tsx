import { useState } from 'react'
import type { City } from '../types'
import { IconSearch, IconPin } from './Icons'

interface SearchBarProps {
  cities: City[]
  onSelect: (city: City) => void
}

export default function SearchBar({ cities, onSelect }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const matches =
    query.trim().length > 0
      ? cities.filter((city) => city.name.toLowerCase().includes(query.trim().toLowerCase()))
      : []

  function handleSelect(city: City) {
    onSelect(city)
    setQuery('')
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-3 border-b border-white/25 pb-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Location..."
          className="w-full bg-transparent text-[15px] text-white placeholder-white/50 outline-none"
        />
        <IconSearch className="h-5 w-5 shrink-0 text-white/70" />
      </div>

      {matches.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-10 mt-2 overflow-hidden rounded-xl bg-[#12141a] shadow-xl ring-1 ring-white/10">
          {matches.map((city) => (
            <button
              key={city.id}
              onClick={() => handleSelect(city)}
              className="flex w-full items-center gap-2.5 px-4 py-3 text-left text-sm text-white/85 transition hover:bg-white/10"
            >
              <IconPin className="h-4 w-4 shrink-0 text-white/50" />
              <span>{city.name}</span>
              <span className="text-white/40">{city.country}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

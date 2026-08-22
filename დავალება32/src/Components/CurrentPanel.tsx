import { useEffect, useState } from 'react'
import type { City, WeatherCondition } from '../types'
import Logo from './Logo'
import { WeatherIcon } from './Icons'
import { formatClockDate } from '../utils'

interface CurrentPanelProps {
  city: City
  condition: WeatherCondition
}

export default function CurrentPanel({ city, condition }: CurrentPanelProps) {
  const [clock, setClock] = useState(() => formatClockDate(city.timezone))

  useEffect(() => {
    const id = setInterval(() => setClock(formatClockDate(city.timezone)), 30000)
    return () => clearInterval(id)
  }, [city.timezone])

  return (
    <div
      className="relative flex w-full flex-col justify-between overflow-hidden p-10 md:w-[62%]"
      style={{
        backgroundImage: `radial-gradient(120% 100% at 15% 10%, ${condition.color}33, transparent 55%), linear-gradient(165deg, #171b22 0%, #0c0e13 65%, #08090c 100%)`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(1px 1px at 20% 30%, ${condition.color}55 1px, transparent 0), radial-gradient(1px 1px at 60% 70%, ${condition.color}40 1px, transparent 0), radial-gradient(1px 1px at 80% 20%, ${condition.color}40 1px, transparent 0)`,
          backgroundSize: '160px 160px',
        }}
      />

      <Logo />

      <div className="relative">
        <div className="flex items-end gap-4">
          <span className="text-8xl font-light leading-none text-white">
            {city.current.temperature}°
          </span>
          <div className="flex items-center gap-3 pb-2">
            <span className="text-4xl font-normal text-white">{city.name}</span>
            <WeatherIcon name={city.current.icon} className="h-9 w-9 text-white/85" />
          </div>
        </div>
        <p className="mt-3 text-sm font-medium tracking-wide text-white/60">{clock}</p>
      </div>
    </div>
  )
}

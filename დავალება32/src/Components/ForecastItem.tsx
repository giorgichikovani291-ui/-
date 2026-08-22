import type { ForecastDay } from '../types'
import { WeatherIcon } from './Icons'
import { shortDay } from '../utils'

interface ForecastItemProps {
  day: ForecastDay
}

export default function ForecastItem({ day }: ForecastItemProps) {
  return (
    <div className="flex items-center gap-3.5 py-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/85">
        <WeatherIcon name={day.icon} className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-semibold tracking-wide text-white/50">
          {shortDay(day.day)}
        </p>
        <p className="truncate text-sm text-white/85">{day.description}</p>
      </div>
      <span className="shrink-0 text-lg font-medium text-white">{day.temperature}°</span>
    </div>
  )
}

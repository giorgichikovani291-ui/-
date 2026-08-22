import type { ForecastDay } from '../types'
import ForecastItem from './ForecastItem'

interface ForecastListProps {
  forecast: ForecastDay[]
}

export default function ForecastList({ forecast }: ForecastListProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <p className="text-xs font-medium tracking-[0.2em] text-white/45">
        TODAY'S WEATHER FORECAST
      </p>
      <div className="mt-2 flex-1 divide-y divide-white/10 overflow-y-auto pr-1">
        {forecast.map((day) => (
          <ForecastItem key={day.date} day={day} />
        ))}
      </div>
    </div>
  )
}

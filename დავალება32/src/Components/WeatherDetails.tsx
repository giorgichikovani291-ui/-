import type { City } from '../types'
import { IconThermometerHot, IconThermometerCold, IconDroplet, IconCloud, IconWind } from './Icons'

interface WeatherDetailsProps {
  city: City
}

interface DetailRowProps {
  label: string
  value: string
  color: string
  icon: React.ReactNode
}

function DetailRow({ label, value, color, icon }: DetailRowProps) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-[15px] text-white/70">{label}</span>
      <div className="flex items-center gap-2.5">
        <span className="text-[15px] font-medium text-white">{value}</span>
        <span className="flex h-6 w-6 items-center justify-center" style={{ color }}>
          {icon}
        </span>
      </div>
    </div>
  )
}

export default function WeatherDetails({ city }: WeatherDetailsProps) {
  const { details, current } = city

  return (
    <div>
      <p className="text-xs font-medium tracking-[0.2em] text-white/45">WEATHER DETAILS</p>
      <h2 className="mt-2 text-lg font-bold tracking-wide text-white">{current.description}</h2>

      <div className="mt-4 divide-y divide-white/10">
        <DetailRow
          label="Temp max"
          value={`${details.tempMax}°`}
          color="#EF6C6C"
          icon={<IconThermometerHot className="h-5 w-5" />}
        />
        <DetailRow
          label="Temp min"
          value={`${details.tempMin}°`}
          color="#64B5F6"
          icon={<IconThermometerCold className="h-5 w-5" />}
        />
        <DetailRow
          label="Humidity"
          value={`${details.humidity}%`}
          color="#4FC3F7"
          icon={<IconDroplet className="h-5 w-5" />}
        />
        <DetailRow
          label="Cloudy"
          value={`${details.cloudiness}%`}
          color="#B0BEC5"
          icon={<IconCloud className="h-5 w-5" />}
        />
        <DetailRow
          label="Wind"
          value={`${details.wind}km/h`}
          color="#90A4AE"
          icon={<IconWind className="h-5 w-5" />}
        />
      </div>
    </div>
  )
}

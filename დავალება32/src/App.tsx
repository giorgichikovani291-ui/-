import { useState } from 'react'
import type { City, WeatherApp } from './types'
import CurrentPanel from './Components/CurrentPanel'
import Sidebar from './Components/Sidebar'
import weatherData from './data/weatherData.json'

const data = weatherData as WeatherApp

export default function App() {
  const defaultCity =
    data.cities.find((c) => c.name === data.app.defaultCity) ?? data.cities[0]
  const [city, setCity] = useState<City>(defaultCity)

  const condition = data.weatherConditions[city.current.condition]

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="flex h-[720px] w-full max-w-6xl overflow-hidden rounded-[28px] shadow-2xl">
        <CurrentPanel key={city.id} city={city} condition={condition} />
        <Sidebar cities={data.cities} city={city} onSelectCity={setCity} />
      </div>
    </div>
  )
}

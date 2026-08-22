export interface WeatherCondition {
  label: string
  icon: string
  background: string
  color: string
}

export interface WeatherConditionsMap {
  [key: string]: WeatherCondition
}

export interface CurrentWeather {
  temperature: number
  feelsLike: number
  condition: string
  description: string
  humidity: number
  cloudiness: number
  wind: number
  windDirection: string
  icon: string
  background: string
}

export interface WeatherDetails {
  tempMax: number
  tempMin: number
  humidity: number
  cloudiness: number
  wind: number
  precipitation: number
  visibility: number
}

export interface ForecastDay {
  date: string
  day: string
  temperature: number
  tempMin: number
  tempMax: number
  condition: string
  description: string
  icon: string
}

export interface City {
  id: number
  name: string
  country: string
  countryCode: string
  latitude: number
  longitude: number
  timezone: string
  current: CurrentWeather
  details: WeatherDetails
  forecast: ForecastDay[]
}

export interface WeatherApp {
  app: {
    name: string
    unit: string
    windUnit: string
    defaultCity: string
  }
  weatherConditions: WeatherConditionsMap
  cities: City[]
}

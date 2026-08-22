interface IconProps {
  className?: string
}

export function IconSun({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 2.5v2.2" />
        <path d="M12 19.3v2.2" />
        <path d="M4.6 4.6l1.6 1.6" />
        <path d="M17.8 17.8l1.6 1.6" />
        <path d="M2.5 12h2.2" />
        <path d="M19.3 12h2.2" />
        <path d="M4.6 19.4l1.6-1.6" />
        <path d="M17.8 6.2l1.6-1.6" />
      </g>
    </svg>
  )
}

export function IconCloudSun({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M9.5 4.3v1.7" />
        <path d="M4.6 6.9l1.3 1.1" />
        <path d="M4 11.6h1.7" />
        <path d="M13.9 8l1.3-1.1" />
      </g>
      <circle cx="9.5" cy="9.7" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8.2 20.2h9.1a3.4 3.4 0 0 0 .5-6.76 4.4 4.4 0 0 0-8.4-1.24 3.6 3.6 0 0 0-3.6 3.6 3.6 3.6 0 0 0 2.4 3.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconCloud({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6.5 19.5h11a4 4 0 0 0 .6-7.95A5.2 5.2 0 0 0 8.2 9.9a4.2 4.2 0 0 0-4.2 4.2 4.2 4.2 0 0 0 2.5 3.85"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconCloudRain({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 16.3a4 4 0 0 1 1.2-7.8 5.2 5.2 0 0 1 9.9 1.7 4 4 0 0 1-.6 7.95H6.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M9 19.5l-1 2.2" />
        <path d="M13 19.5l-1 2.2" />
        <path d="M17 19.5l-1 2.2" />
      </g>
    </svg>
  )
}

export function IconCloudDrizzle({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 16.3a4 4 0 0 1 1.2-7.8 5.2 5.2 0 0 1 9.9 1.7 4 4 0 0 1-.6 7.95H6.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M9 19.7v1.4" />
        <path d="M13 19.7v1.4" />
        <path d="M17 19.7v1.4" />
      </g>
    </svg>
  )
}

export function IconCloudLightning({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 15.3a4 4 0 0 1 1.2-7.8 5.2 5.2 0 0 1 9.9 1.7 4 4 0 0 1-.7 7.94"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12.6 14.5l-3 4.2h2.6l-1.5 3.8 4.3-5.1h-2.4l1.5-2.9z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconSnowflake({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2.5v19" />
        <path d="M3.3 7.25l17.4 9.5" />
        <path d="M20.7 7.25L3.3 16.75" />
        <path d="M9 4.3l3 2.6 3-2.6" />
        <path d="M9 19.7l3-2.6 3 2.6" />
        <path d="M4.3 10.4l.6 3.9 3.5 1.5" />
        <path d="M19.7 13.6l-.6-3.9-3.5-1.5" />
        <path d="M4.3 13.6l3.5-1.5.6-3.9" />
        <path d="M19.7 10.4l-3.5 1.5-.6 3.9" />
      </g>
    </svg>
  )
}

export function IconFog({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M4 8.5h11" />
        <path d="M4 12.2h16" />
        <path d="M4 15.9h9" />
        <path d="M15.5 15.9h4.5" />
      </g>
    </svg>
  )
}

export function IconThermometerHot({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M13 13.6V5.2a2 2 0 1 0-4 0v8.4a4 4 0 1 0 4 0z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="16.5" r="1.6" fill="currentColor" />
    </svg>
  )
}

export function IconThermometerCold({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M13 13.6V5.2a2 2 0 1 0-4 0v8.4a4 4 0 1 0 4 0z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="16.5" r="1.6" fill="currentColor" />
    </svg>
  )
}

export function IconDroplet({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3.3s6 6.85 6 11.1a6 6 0 1 1-12 0c0-4.25 6-11.1 6-11.1z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconWind({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M3 8.5h11.5a2.5 2.5 0 1 0-2.3-3.5" />
        <path d="M3 12.2h15.5a2.6 2.6 0 1 1-2.4 3.6" />
        <path d="M3 15.9h8.5a2 2 0 1 1-1.9 2.8" />
      </g>
    </svg>
  )
}

export function IconSearch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="10.8" cy="10.8" r="6.3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 20l-4.3-4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconPin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 21.5s7-6.6 7-12A7 7 0 1 0 5 9.5c0 5.4 7 12 7 12z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

const iconMap: Record<string, (props: IconProps) => React.JSX.Element> = {
  sun: IconSun,
  'cloud-sun': IconCloudSun,
  cloud: IconCloud,
  'cloud-rain': IconCloudRain,
  'cloud-drizzle': IconCloudDrizzle,
  'cloud-lightning': IconCloudLightning,
  snowflake: IconSnowflake,
  fog: IconFog,
}

export function WeatherIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? IconCloud
  return <Icon className={className} />
}

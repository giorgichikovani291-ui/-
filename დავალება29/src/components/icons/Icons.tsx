interface IconProps {
  className?: string
}

export function LogoIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 26" fill="none" className={className}>
      <path d="M0 2h32v22H0z" fill="currentColor" opacity="0.001" />
      <path
        d="M2 6l3-4h6l-3 4H2zm9 0l3-4h6l-3 4h-6zm9 0l3-4h6l-3 4h-6zM0 8h32v16H0V8z"
        fill="currentColor"
      />
    </svg>
  )
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M0 8.5L10 0l10 8.5h-2.5V20h-5v-6.5h-5V20h-5V8.5H0z"
        fill="currentColor"
      />
    </svg>
  )
}

export function MoviesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 18" fill="none" className={className}>
      <path
        d="M17.5 0h-15C1.1 0 0 1.1 0 2.5v13C0 16.9 1.1 18 2.5 18h15c1.4 0 2.5-1.1 2.5-2.5v-13C20 1.1 18.9 0 17.5 0zM6 2l2.5 3H5L2.5 2H6zm5 0l2.5 3H10L7.5 2H11zm5 0l2.5 3H15L12.5 2H16zM18 15.5c0 .3-.2.5-.5.5h-15a.5.5 0 01-.5-.5V7h16v8.5z"
        fill="currentColor"
      />
    </svg>
  )
}

export function SeriesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 18" fill="none" className={className}>
      <path
        d="M6.5 0L4 2.5h3L9.5 0h-3zm7 0L11 2.5h3L16.5 0h-3zM0 4v11.5C0 16.9 1.1 18 2.5 18h15c1.4 0 2.5-1.1 2.5-2.5V4H0zm10 3l5 3.5-5 3.5V7z"
        fill="currentColor"
      />
    </svg>
  )
}

export function BookmarkIcon({ className, filled }: IconProps & { filled?: boolean }) {
  return (
    <svg viewBox="0 0 12 14" fill="none" className={className}>
      <path
        d="M0 0v14l6-4 6 4V0H0z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={filled ? 0 : 1.4}
      />
    </svg>
  )
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M19.71 18.29l-5.4-5.39a7.92 7.92 0 10-1.41 1.41l5.39 5.4a1 1 0 001.42 0 1 1 0 000-1.42zM2 8a6 6 0 1112 0A6 6 0 012 8z"
        fill="currentColor"
      />
    </svg>
  )
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 15 18" fill="none" className={className}>
      <path d="M0 0l15 9-15 9V0z" fill="currentColor" />
    </svg>
  )
}

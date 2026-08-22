export function formatClockDate(timezone: string): string {
  const now = new Date()
  const time = new Intl.DateTimeFormat('en-GB', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(now)

  const weekday = new Intl.DateTimeFormat('en-GB', {
    timeZone: timezone,
    weekday: 'long',
  }).format(now)

  const day = new Intl.DateTimeFormat('en-GB', {
    timeZone: timezone,
    day: 'numeric',
  }).format(now)

  const month = new Intl.DateTimeFormat('en-GB', {
    timeZone: timezone,
    month: 'short',
  }).format(now)

  const year = new Intl.DateTimeFormat('en-GB', {
    timeZone: timezone,
    year: '2-digit',
  }).format(now)

  return `${time} - ${weekday}, ${day} ${month} '${year}`
}

export function shortDay(day: string): string {
  return day.slice(0, 3).toUpperCase()
}

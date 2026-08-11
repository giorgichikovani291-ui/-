export default function StepIcon({ icon }: { icon: "locate" | "pick" | "enjoy" }) {
  if (icon === "locate") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9.5" r="2.4" stroke="#fff" strokeWidth="1.8" />
      </svg>
    )
  }

  if (icon === "pick") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="18" r="2.5" stroke="#fff" strokeWidth="1.8" />
        <circle cx="17" cy="18" r="2.5" stroke="#fff" strokeWidth="1.8" />
        <path
          d="M6 18 L10 8 H14 M17 18 L14 8 M10 8 L8.5 5 H6.5"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="10" width="16" height="10" rx="2" stroke="#fff" strokeWidth="1.8" />
      <path d="M8 10V7a4 4 0 0 1 7.5-1.9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="15" r="1.6" fill="#fff" />
    </svg>
  )
}

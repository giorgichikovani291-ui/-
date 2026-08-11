export default function ArrowConnector({
  className = "",
  flip = false,
}: {
  className?: string
  flip?: boolean
}) {
  return (
    <svg
      viewBox="0 0 120 90"
      width="120"
      height="90"
      fill="none"
      className={`${className} ${flip ? "-scale-x-100" : ""}`}
    >
      <path
        d="M0 12 H72 V70 H105"
        stroke="#FCB92B"
        strokeWidth="3"
        strokeDasharray="2 8"
        strokeLinecap="round"
      />
      <path
        d="M92 56 L108 70 L92 84"
        stroke="#FCB92B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

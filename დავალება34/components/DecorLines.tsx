export default function DecorLines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 90"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {[0, 10, 20, 30, 40, 50].map((offset) => (
        <path
          key={offset}
          d={`M0 ${70 - offset} C 60 ${20 - offset}, 140 ${100 - offset}, 220 ${30 - offset}`}
          stroke="#d9d9d9"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

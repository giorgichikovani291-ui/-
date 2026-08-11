import type { LocationPin } from "../types"
import worldMap from "../assets/world-map.svg"

const pins: LocationPin[] = [
  { city: "New York", top: "40%", left: "20%" },
  { city: "London", top: "28%", left: "45%" },
  { city: "Yokohama", top: "38%", left: "83%", active: true },
  { city: "Jakarta", top: "58%", left: "76%" },
]

export default function LocationsMap() {
  return (
    <section className="px-10 py-16 max-w-6xl mx-auto">
      <div className="relative">
        <img
          src={worldMap}
          alt="World map showing the cities Scoot operates in"
          className="w-full opacity-80"
        />
        {pins.map((pin) => (
          <span
            key={pin.city}
            style={{ top: pin.top, left: pin.left }}
            className={`absolute -translate-x-1/2 -translate-y-full px-4 py-2 rounded-md font-heading text-[13px] font-bold bg-yellow text-white shadow-md ${
              pin.active ? "ring-2 ring-dark-navy" : ""
            }`}
          >
            {pin.city}
            <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3 h-3 bg-yellow rotate-45" />
          </span>
        ))}
      </div>
    </section>
  )
}

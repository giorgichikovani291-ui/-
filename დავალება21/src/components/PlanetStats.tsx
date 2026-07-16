import type { Planet } from "../types";
import "./PlanetStats.css";

interface PlanetStatsProps {
  planet: Planet;
}

export default function PlanetStats({ planet }: PlanetStatsProps) {
  const stats = [
    { label: "rotation time", value: planet.rotation },
    { label: "revolution time", value: planet.revolution },
    { label: "radius", value: planet.radius },
    { label: "average temp.", value: planet.temperature },
  ];

  return (
    <div className="planet-stats">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-box">
          <p className="stat-label">{stat.label}</p>
          <p className="stat-value">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

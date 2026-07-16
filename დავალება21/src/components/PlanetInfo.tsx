import type { Planet, TabName } from "../types";
import "./PlanetInfo.css";

interface PlanetInfoProps {
  planet: Planet;
  selectedTab: TabName;
  onSelectTab: (tab: TabName) => void;
  color: string;
}

const tabs: { key: TabName; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "structure", label: "Internal Structure" },
  { key: "geology", label: "Surface Geology" },
];

export default function PlanetInfo({
  planet,
  selectedTab,
  onSelectTab,
  color,
}: PlanetInfoProps) {
  const info = planet[selectedTab];

  return (
    <div className="planet-info">
      <h2 className="planet-name">{planet.name}</h2>
      <p className="planet-text">{info.content}</p>
      <p className="planet-source">
        Source :{" "}
        <a href={info.source} target="_blank" rel="noreferrer">
          Wikipedia
        </a>{" "}
        ↗
      </p>

      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={tab.key}
            className={
              tab.key === selectedTab ? "tab-button active" : "tab-button"
            }
            style={tab.key === selectedTab ? { backgroundColor: color } : {}}
            onClick={() => onSelectTab(tab.key)}
          >
            <span className="tab-number">0{index + 1}</span>
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

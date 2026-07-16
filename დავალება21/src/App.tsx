import { useState } from "react";
import data from "./data.json";
import type { Planet, TabName } from "./types";
import { planetColors } from "./colors";
import Header from "./components/Header";
import PlanetImage from "./components/PlanetImage";
import PlanetInfo from "./components/PlanetInfo";
import PlanetStats from "./components/PlanetStats";
import "./App.css";

const planets: Planet[] = data;

export default function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(0);
  const [selectedTab, setSelectedTab] = useState<TabName>("overview");

  const planet = planets[selectedPlanet];
  const color = planetColors[planet.name];

  function handlePlanetChange(index: number) {
    setSelectedPlanet(index);
    setSelectedTab("overview");
  }

  return (
    <div className="app">
      <Header
        planets={planets}
        selectedPlanet={selectedPlanet}
        onSelectPlanet={handlePlanetChange}
      />
      <main className="main">
        <div className="main-top">
          <PlanetImage planet={planet} selectedTab={selectedTab} />
          <PlanetInfo
            planet={planet}
            selectedTab={selectedTab}
            onSelectTab={setSelectedTab}
            color={color}
          />
        </div>
        <PlanetStats planet={planet} />
      </main>
    </div>
  );
}

import type { Planet, TabName } from "../types";
import { planetImages } from "../planetImages";
import "./PlanetImage.css";

interface PlanetImageProps {
  planet: Planet;
  selectedTab: TabName;
}

export default function PlanetImage({ planet, selectedTab }: PlanetImageProps) {
  const images = planetImages[planet.name];
  console.log(selectedTab);
  return (
    <div className="planet-image">
      <img src={images.planet} alt={planet.name} className="planet-picture" />

      {selectedTab === "structure" && (
        <img
          src={images.structure}
          alt={planet.name + " internal structure"}
          className={planet.name === "Saturn" ? "saturn" : "structure-picture"}
        />
      )}

      {selectedTab === "geology" && (
        <img
          src={images.geology}
          alt={planet.name + " geology"}
          className="geology-picture"
        />
      )}
    </div>
  );
}

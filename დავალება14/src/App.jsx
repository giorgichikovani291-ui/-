import React, { useEffect, useState } from "react";
import { citiesData } from "./Components/citiesData";
import ActiveCity from "./Components/ActiveCity";
import LiveTracker from "./Components/LiveTracker";

export default function App() {
  const [activeCity, setActiveCity] = useState(citiesData[0]);

  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    document.title = `ამინდი: ${activeCity.name}`;
  }, [activeCity]);

  const toggleLiveMode = () => setIsLive((prev) => !prev);

  useEffect(() => console.log("ამინდის აპლიკაცია წარმატებით ჩაიტვირთა"), []);

  useEffect(() => {
    document.title = `ამინდი: ${activeCity.name}`;
  }, [activeCity]);
  return (
    <a>
      <ActiveCity activeCity={activeCity} setActiveCity={setActiveCity} />

      <button onClick={toggleLiveMode}>
        {isLive ? "გათიშე Live რეჟიმი" : "ჩართე Live რეჟიმი"}
      </button>

      {isLive && <LiveTracker />}
    </a>
  );
}

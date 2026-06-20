import React, { useState } from "react";
import { citiesData } from "./citiesData";

export default function ActiveCity({ activeCity, setActiveCity }) {
  return (
    <>
      {citiesData.map((city) => (
        <button key={city.id} onClick={() => setActiveCity(city)}>
          {city.name}
        </button>
      ))}
      <h1>ქალაქი: {activeCity.name}</h1>
      <h2>
        ტემპერატურა: {activeCity.temp}
        <br /> ამინდი: {activeCity.condition}
      </h2>
    </>
  );
}

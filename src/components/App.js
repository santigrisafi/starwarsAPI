import React from "react";
import { getStarWarsDataCharacters, getStarWarsDataVehicles, getStarWarsDataPlanets, getStarWarsDataFilms } from "../methods/getStarWarsData";

let App = () => {
  getStarWarsDataFilms().then((data)=> console.log(data));
  return (
    <>
      <div>app</div>
    </>
  );
};

export { App };

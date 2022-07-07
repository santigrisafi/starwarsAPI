let params = {
  url: "https://swapi.dev/api", //URI of API
};

let getStarWarsDataCharacters = async () => {
  let resp = await fetch(`${params.url}/people/`); //Use of Fetch for consume API
  let JSONData = await resp.json();
  let dataAPI = [...JSONData.results]; //Transform JSON to Array
  return dataAPI.map((data) => {
    //Return every data of Array of API
    return {
      name: data?.name,
      height: data?.height,
      mass: data?.mass,
      hair: data?.hair_color,
      skin: data?.skin_color,
      eye: data?.eye_color,
      birth: data?.birth_year,
      gender: data?.gender,
      created: data?.created,
      edited: data?.edited,
      url: data?.url,
      homeworld: data?.homeworld,
      films: data?.films,
      species: data?.species,
      vehicles: data?.vehicles,
    };
  });
};

let getStarWarsDataVehicles = async () => {
  let resp = await fetch(`${params.url}/vehicles/`);
  let JSONData = await resp.json();
  let dataAPI = Array.from(JSONData.results);
  return dataAPI.map((data) => {
    return {
      name: data?.name,
      model: data?.model,
      manufacturer: data?.manufacturer,
      vehicleClass: data?.vehicleClass,
      length: data?.length,
      maxAtmospheringSpeed: data?.maxAtmospheringSpeed,
      crew: data?.crew,
      costInCredits: data?.costInCredits,
      cargoCapacity: data?.cargoCapacity,
      consumables: data?.consumables,
      pilots: data?.pilots,
      passengers: data?.passengers,
      films: data?.films,
      created: data?.created,
      edited: data?.edited,
      url: data?.url,
    };
  });
};

let getStarWarsDataPlanets = async () => {
  let resp = await fetch(`${params.url}/planets`);
  let JSONData = await resp.json();
  let dataAPI = Array.from(JSONData.results);
  return dataAPI.map((data) => {
    return {
      name: data?.name,
      rotationPeriod: data?.rotationPeriod,
      orbitalPeriod: data?.orbitalPeriod,
      diameter: data?.diameter,
      climate: data?.climate,
      gravity: data?.gravity,
      terrain: data?.terrain,
      surfaceWater: data?.surfaceWater,
      population: data?.population,
      residents: data?.residents,
      films: data?.films,
      created: data?.created,
      edited: data?.edited,
      url: data?.url,
    };
  });
};

let getStarWarsDataFilms = async () => {
  let resp = await fetch(`${params.url}/films/`);
  let JSONData = await resp.json();
  let dataAPI = Array.from(JSONData.results);
  return dataAPI.map((data) => {
    return {
      title: data?.title,
      episodeId: data?.episode_id,
      director: data?.director,
      producer: data?.producer,
      releaseDate: data?.releaseDate,
      openingCrawl: data?.opening_crawl,
      characters: data?.characters,
      planets: data?.planets,
      starships: data?.starships,
      vehicles: data?.vehicles,
      species: data?.species,
      created: data?.created,
      edited: data?.edited,
      url: data?.url,
    };
  });
};

let getStarWarsDataSpecies = async () => {
  let resp = await fetch(`${params.url}/species/`);
  let JSONData = await resp.json();
  let dataAPI = [...JSONData];
  return dataAPI.map((data) => {
    return {
        
    };
  });
};

export {
  getStarWarsDataCharacters,
  getStarWarsDataVehicles,
  getStarWarsDataPlanets,
  getStarWarsDataFilms,
  getStarWarsDataSpecies,
};

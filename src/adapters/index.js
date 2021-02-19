import axios from "axios";

const OPEN_WEATHER_API_KEY = "d3040ede542fb4cda4b41e00039125b1";

export const getWeatherInformation = location => {
  const { latitude, longitude } = location.coordinates;

  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}`
  );
};

export const getWeatherInformationByName = name => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${OPEN_WEATHER_API_KEY}`
  );
};

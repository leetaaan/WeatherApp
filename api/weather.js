import axios from "axios";
import { apiKey } from "../constants";

const forecastEndpoint = (params) =>
  `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;
const locationsEndpoint = (params) =>
  `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

const apiCall = async (endpoint) => {
  const options = {
    method: "GET",
    url: endpoint,
  }
  try {
    const respone = await axios.request(options);
    return respone.data;
  } catch (err) {
    console.log("err", err);
    return null;
  }
};

export const fetchWeatherForecast = params => {
    return apiCall(forecastEndpoint(params))
}
export const fetchLocations = params => {
    return apiCall(locationsEndpoint(params))
}
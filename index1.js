// Exemple de code pour faire une requête API en utilisant la librairie 'axios'
const axios = require("axios");

const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&units=matrix&lang=fr&q=";

function getWeatherData(city, callback) {
    const url = BASE_URL + city;
  
    axios.get(url)
      .then(response => callback(null, response.data))
      .catch(error => callback(error, null));
  }
  function WeatherInfo(city) {
    getWeatherData(city, function (error, data) {
      if (error) {
        console.error(error);
      } else {
        console.log("Description:", data.weather[0].description);
        console.log("Température:", data.main.temp);
        console.log("Humidité:", data.main.humidity);
      }
    });
  }

WeatherInfo("Sousse");
// Exemple de code pour faire une requête API en utilisant la librairie 'fetch'

const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&units=matrix&lang=fr&q=";

function getWeatherData(city) {
    const url = BASE_URL + city;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP! Statut: ${response.status}`);
            }
            return response.json();
        })
        .then(data => data)
        .catch(error => error);
}

function WeatherInfo(city) {
    getWeatherData(city)
        .then(data => {
            if (data instanceof Error) {
                console.error(data);
            } else {
                console.log("Description:", data.weather[0].description);
                console.log("Température:", data.main.temp);
                console.log("Humidité:", data.main.humidity);
            }
        });
}

WeatherInfo("Sousse");

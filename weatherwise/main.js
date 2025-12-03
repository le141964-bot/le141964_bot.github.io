import { getForecast, getWeatherData } from "./api.js";
import { updateForecastUI, updateWeatherUI } from "./ui.js";

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("searchBtn").addEventListener("click", searchWeather);
});

async function searchWeather() {
    const city = document.getElementById("cityInput").value.trim();
    if (!city) return;

    const weather = await getWeatherData(city);
    updateWeatherUI(weather);

    const forecast = await getForecast(city);
    updateForecastUI(forecast);
}

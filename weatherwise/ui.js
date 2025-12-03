
export function updateWeatherUI(weather) {
    if (!weather) return;

    document.getElementById("weatherCard").classList.remove("hidden");

    document.getElementById("cityName").textContent = weather.name;
    document.getElementById("temp").textContent = `${weather.temp}°C`;
    document.getElementById("humidity").textContent = `Humidity: ${weather.humidity}%`;
    document.getElementById("wind").textContent = `Wind: ${weather.wind.speed} km/h`;

    document.getElementById("weatherIcon").src =
        `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
}

export function updateForecastUI(forecast) {
    const container = document.getElementById("forecastGrid"); // FIXED
    container.innerHTML = "";

    document.getElementById("forecastSection").classList.remove("hidden");

    forecast.forEach(day => {
        const date = new Date(day.dt_txt);
        const icon = day.weather[0].icon;

        const card = `
            <div class="forecast-card">
                <h4>${date.toLocaleDateString("en-US", { weekday: "short" })}</h4>
                <img src="https://openweathermap.org/img/wn/${icon}.png">
                <p>${day.main.temp}°C</p>
            </div>
        `;

        container.innerHTML += card;
    });
}

const apiKey = "d1e43c2ec964d335f78e8a9ce6f270d6";

export async function getWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    return {
        name: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
        wind: { speed: data.wind.speed },
        icon: data.weather[0].icon,
        description: data.weather[0].description
    };
}

export async function getForecast(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    return data.list.filter((_, i) => i % 8 === 0);
}

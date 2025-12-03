export class Weather {
    constructor(temp, humidity, wind) {
        this.temp = temp;
        this.humidity = humidity; 
        this.wind = wind;
    }

    format() {
        return `Temp: ${this.temp}°C, Humidity: ${this.humidity}%, Wind: ${this.wind} km/h`;
    }
}
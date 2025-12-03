import { weather } from "./Weather.js"; 

export class Forecast extends Weather {
    constructor(temp, humidity, wind, day) {
        super(temp, humidity, wind); 
        this.day = day; 
    }

    summary() { 
        return `${this.day} → ${this.format()}`;
    }
}
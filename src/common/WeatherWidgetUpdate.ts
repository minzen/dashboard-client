/**
 * NewsWidgetUpdate
 *
 * @author dbrandt
 * @since 0.0.1
 */
export default class WeatherWidgetUpdate {

    public temperature: string;
    public condition: string;
    public iconClass: string;
    public city: string;
    public humidity: number;
    public wind: number;
    public pressure: number;
    public sunrise: number;
    public sunset: number;

    constructor(temperature: string, condition: string, iconClass: string, city: string, humidity: number, wind: number,
                pressure: number, sunrise: number, sunset: number) {
        this.temperature = temperature;
        this.condition = condition;
        this.iconClass = iconClass;
        this.city = city;
        this.humidity = humidity;
        this.wind = wind;
        this.pressure = pressure;
        this.sunrise = sunrise * 1000;
        this.sunset = sunset * 1000;
    }
}

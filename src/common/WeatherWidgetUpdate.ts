/**
 * NewsWidgetUpdate
 *
 * @author dbrandt
 * @since 0.0.1
 */
export default class WeatherWidgetUpdate {

    public temperature: string;
    public condition: string;
    public iconUrl: string;
    public city: string;
    public humidity: number;
    public wind: number;

    constructor(temperature: string, condition: string, iconUrl: string, city: string, humidity: number, wind: number) {
        this.temperature = temperature;
        this.condition = condition;
        this.iconUrl = iconUrl;
        this.city = city;
        this.humidity = humidity;
        this.wind = wind;
    }

}

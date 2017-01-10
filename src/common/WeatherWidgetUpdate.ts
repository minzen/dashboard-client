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

    constructor(temperature: string, condition: string, iconUrl: string) {
        this.temperature = temperature;
        this.condition = condition;
        this.iconUrl = iconUrl;
    }

}

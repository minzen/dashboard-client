/**
 * NewsWidgetUpdate
 *
 * @author dbrandt
 * @since 0.0.1
 */
export default class WeatherWidgetUpdate {

    public temperature: string;
    public condition: string

    constructor(temperature: string, condition: string) {
        this.temperature = temperature;
        this.condition = condition;
    }

}

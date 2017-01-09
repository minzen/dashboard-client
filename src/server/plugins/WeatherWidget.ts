/**
 * WeatherWidget
 *
 * @author dbrandt
 * @since 0.0.1
 */
import Widget from "../widget/WidgetMetadata";
import * as Dashboard from "../widget/AbstractWidget";
import WeatherWidgetUpdate from "../../common/WeatherWidgetUpdate";

@Widget({
    author: 'dbrandt',
    designation: 'weather',
    version: '0.0.1',
    updateInterval: 60000  //1min
})
class WeatherWidget extends Dashboard.AbstractWidget {

    private url: string;
    private temperature: number;
    private text: string;
    private request: any;

    constructor(configuration: any) {
        super(configuration);
        this.url = 'http://api.openweathermap.org/data/2.5/weather?q=bremen,de&appid=815048e6bb5778bc52d19ee3cb768553&lang=de';
        this.request = require('request');
    }

    // public onInit(): WeatherWidgetUpdate {
    //     return this.getWeatherData();
    // }

    public onUpdate(): WeatherWidgetUpdate {
        return this.getWeatherData();
    }

    private getWeatherData(): WeatherWidgetUpdate {

        this.request(this.url, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                let obj: any = JSON.parse(body)
                let tempBase: number = obj.main.temp;
                this.temperature = Math.round(tempBase - 273);

                this.text = obj.weather[0].description;
            }
        })
        // console.log('mööp');
        return new WeatherWidgetUpdate(this.temperature + ' °C', this.text);

    }

}

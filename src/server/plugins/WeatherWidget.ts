/**
 * WeatherWidget
 *
 * @author dbrandt
 * @since 0.0.1
 */
import Widget from '../widget/WidgetMetadata';
import * as Dashboard from '../widget/AbstractWidget';
import WeatherWidgetUpdate from '../../common/WeatherWidgetUpdate';
import * as RequestPromise from 'request-promise';

@Widget({
    author: 'dbrandt',
    designation: 'weather',
    version: '0.0.1',
    updateInterval: 5000
})
class WeatherWidget extends Dashboard.AbstractWidget {

    private url: string = 'http://api.openweathermap.org/data/2.5/weather';
    private weatherWidgetUpdate: WeatherWidgetUpdate; // temporary

    public onInit() {
        this.getWeatherData();
    }

    public onUpdate(): WeatherWidgetUpdate {
        return this.getWeatherData();
    }

    private getWeatherData(): WeatherWidgetUpdate {
        this.getWeatherWidgetUpdate()
            .then((response) => {
                let tempBase: number = response.main.temp;
                let temperature: number = Math.round(tempBase - 273);
                let text: string = response.weather[0].description;
                let iconClass: string = 'wi-owm-day-' + response.weather[0].id;
                let city: string = response.name;
                let humidity: number = response.main.humidity;
                let wind: number = response.wind.speed;
                let pressure: number = response.main.pressure;
                let sunrise: number = response.sys.sunrise;
                let sunset: number = response.sys.sunset;

                this.weatherWidgetUpdate = new WeatherWidgetUpdate(temperature + ' °C', text, iconClass, city, humidity,
                    wind, pressure, sunrise, sunset);
            })
            .catch(function (err) {
                console.log('Weather API call failed...' + err);
            });
        return this.weatherWidgetUpdate;
    }

    private getWeatherWidgetUpdate() {
        let config = this.getConfiguration();
        let options = {
            uri: this.url,
            qs: {
                appid: config.appid,
                q: config.location,
                lang: config.language
            },
            json: true // Automatically parses the JSON string in the response
        };
        return RequestPromise(options);
    }
}

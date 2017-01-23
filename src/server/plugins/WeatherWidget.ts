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
    updateInterval: 300000 // 5 min.
})
class WeatherWidget extends Dashboard.AbstractWidget {

    private url: string = 'http://api.openweathermap.org/data/2.5/weather';
    private weatherWidgetUpdate: WeatherWidgetUpdate;

    public onUpdate(): void {
        this.getWeatherWidgetUpdate()
            .then((response) => {
                let tempBase: number = response.main.temp;
                let temperature: number = Math.round(tempBase - 273);
                let text: string = response.weather[0].description;
                let city: string = response.name;
                let humidity: number = response.main.humidity;
                let wind: number = response.wind.speed;
                let pressure: number = response.main.pressure;
                let sunrise: number = response.sys.sunrise * 1000;
                let sunset: number = response.sys.sunset * 1000;
                let iconClass: string = this.getIconClass(sunrise, sunset, response.weather[0].id);

                this.weatherWidgetUpdate = new WeatherWidgetUpdate(temperature + ' °C', text, iconClass, city, humidity,
                    wind, pressure, sunrise, sunset);
                this.updateView();
            })
            .catch(function (err) {
                console.log('Weather API call failed...' + err);
            });
    }

    private getIconClass(sunrise: number, sunset: number, iconId: string): string {
        let currentTime = new Date().getTime();
        if (currentTime > sunrise && currentTime < sunset) {
            return 'wi-owm-day-' + iconId;
        } else {
            return 'wi-owm-night-' + iconId;
        }
    }

    public updateView(): void {
        super.emitUpdate(this.weatherWidgetUpdate);
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

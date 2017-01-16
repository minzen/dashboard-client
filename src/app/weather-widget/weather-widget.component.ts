import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {MessageService} from '../message.service';
import WeatherWidgetUpdate from '../../common/WeatherWidgetUpdate';

@Component({
    selector: 'app-weather-widget',
    templateUrl: './weather-widget.component.html',
    styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit, OnDestroy {

    temperature: string;
    condition: string;
    iconClass: string;
    city: string = 'Bremen';
    humidity: number;
    wind: number;
    connection: Subscription;

    constructor(private messageService: MessageService) {
    }

    ngOnInit() {
        this.connection = this.messageService.observeWeatherWidget().subscribe((message: WeatherWidgetUpdate) => {
            this.temperature = message.temperature;
            this.condition = message.condition;
            this.iconClass = message.iconClass;
            this.city = message.city;
            this.humidity = message.humidity;
            this.wind = message.wind;
        });
    }

    ngOnDestroy() {
        // this.connection.unsubscribe();
    }

}

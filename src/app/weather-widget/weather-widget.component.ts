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

    data: WeatherWidgetUpdate;
    connection: Subscription;

    constructor(private messageService: MessageService) {
    }

    ngOnInit() {
        this.connection = this.messageService.observeWeatherWidget().subscribe((message: WeatherWidgetUpdate) => {
            this.data = message;
        });
    }

    ngOnDestroy() {
        // this.connection.unsubscribe();
    }

}

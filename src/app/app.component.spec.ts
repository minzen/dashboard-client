/* tslint:disable:no-unused-variable */
import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TimeWidgetComponent} from './time-widget/time-widget.component';
import {NewsWidgetComponent} from './news-widget/news-widget.component';
import {MessageService} from './message.service';
import {WeatherWidgetComponent} from './weather-widget/weather-widget.component';

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                TimeWidgetComponent,
                NewsWidgetComponent,
                WeatherWidgetComponent
            ],
            providers: [
                MessageService
            ]
        });
        TestBed.compileComponents();
    });

    it('should create the app', () => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});

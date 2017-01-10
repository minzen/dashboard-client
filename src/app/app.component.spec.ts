/* tslint:disable:no-unused-variable */
import {TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {TimeWidgetComponent} from "./time-widget/time-widget.component";
import {NewsWidgetComponent} from "./news-widget/news-widget.component";
import {MessageService} from "./message.service";
import {WeatherWidgetComponent} from "./weather-widget/weather-widget.component";

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

    it(`should have as title 'Eventim Dashboard'`, () => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Eventim Dashboard');
    });

    it('should render title in a h1 tag', () => {
        let fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Eventim Dashboard');
    });
});

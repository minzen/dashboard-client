/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherWidgetComponent } from './weather-widget.component';
import { WidgetWrapperComponent } from '../widget-wrapper/widget-wrapper.component';

import { MessageService } from '../message.service';

describe('WeatherWidgetComponent', () => {
    let component: WeatherWidgetComponent;
    let fixture: ComponentFixture<WeatherWidgetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WeatherWidgetComponent, WidgetWrapperComponent],
            providers: [MessageService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WeatherWidgetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

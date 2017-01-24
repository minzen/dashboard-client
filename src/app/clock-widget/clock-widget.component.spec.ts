/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MessageService } from '../message.service';
import { ClockWidgetComponent } from './clock-widget.component';
import { WidgetWrapperComponent } from '../widget-wrapper/widget-wrapper.component';

describe('ClockWidgetComponent', () => {
    let component: ClockWidgetComponent;
    let fixture: ComponentFixture<ClockWidgetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ClockWidgetComponent, WidgetWrapperComponent],
            providers: [MessageService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ClockWidgetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

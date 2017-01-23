/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MessageService } from '../message.service';
import { MyNewsWidgetComponent } from './my-news-widget.component';
import { WidgetWrapperComponent } from '../widget-wrapper/widget-wrapper.component';

describe('MyNewsWidgetComponent', () => {
    let component: MyNewsWidgetComponent;
    let fixture: ComponentFixture<MyNewsWidgetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyNewsWidgetComponent, WidgetWrapperComponent],
            providers: [MessageService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyNewsWidgetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

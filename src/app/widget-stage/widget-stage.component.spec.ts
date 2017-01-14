/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppModule } from '../app.module';

import { WidgetStageComponent } from './widget-stage.component';
import { NewsWidgetComponent } from '../news-widget/news-widget.component';
import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';
import { MessageService } from '../message.service';

describe('WidgetStageComponent', () => {
  let component: WidgetStageComponent;
  let fixture: ComponentFixture<WidgetStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          WidgetStageComponent,
          NewsWidgetComponent,
          WeatherWidgetComponent
      ],
      providers: [ MessageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

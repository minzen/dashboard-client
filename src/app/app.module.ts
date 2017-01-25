import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';

import { TimeWidgetComponent } from './time-widget/time-widget.component';
import { MessageService } from './message.service';
import { NewsWidgetComponent } from './news-widget/news-widget.component';
import { HeaderComponent } from './header/header.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { MyNewsWidgetComponent } from './my-news-widget/my-news-widget.component';
import { WidgetStageComponent } from './widget-stage/widget-stage.component';
import { WidgetWrapperComponent } from './widget-wrapper/widget-wrapper.component';
import { ClockWidgetComponent } from './clock-widget/clock-widget.component';
import { JenkinsBuildStatusWidgetComponent } from './jenkins-build-status-widget/jenkins-build-status-widget.component';

@NgModule({
    declarations: [
        AppComponent,
        WidgetWrapperComponent,
        TimeWidgetComponent,
        NewsWidgetComponent,
        WeatherWidgetComponent,
        MyNewsWidgetComponent,
        HeaderComponent,
        WidgetStageComponent,
        ClockWidgetComponent,
        JenkinsBuildStatusWidgetComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MomentModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'de' },
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

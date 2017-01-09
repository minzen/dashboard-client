import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TimeWidgetComponent } from './time-widget/time-widget.component';
import { MessageService } from './message.service';
import { NewsWidgetComponent } from './news-widget/news-widget.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeWidgetComponent,
    NewsWidgetComponent,
    WeatherWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import * as io from 'socket.io-client';
import ClockWidgetUpdate from '../common/ClockWidgetUpdate';
import NewsWidgetUpdate from '../common/NewsWidgetUpdate';
import WeatherWidgetUpdate from '../common/WeatherWidgetUpdate';
import MyNewsWidgetUpdate from '../common/MyNewsWidgetUpdate';
import JenkinsBuildStatusWidgetUpdate from '../common/JenkinsBuildStatusWidgetUpdate';

@Injectable()
export class MessageService {
    socket: SocketIOClient.Socket;
    private url: string;

    constructor() {
        this.socket = io(this.url);
    }

    public setup(url: string): void {
        this.url = url;
    }

    public observeNewsWidget(): Observable<NewsWidgetUpdate> {
        return this.observeEvent<NewsWidgetUpdate>('news');
    }

    public observeClockWidget(): Observable<ClockWidgetUpdate> {
        return this.observeEvent<ClockWidgetUpdate>('clock');
    }

    public observeWeatherWidget(): Observable<WeatherWidgetUpdate> {
        return this.observeEvent<WeatherWidgetUpdate>('weather');
    }

    public observeMyNewsWidget(): Observable<MyNewsWidgetUpdate> {
        return this.observeEvent<MyNewsWidgetUpdate>('headlines');
    }

        public observeJenkinsBuildStatusWidget(): Observable<JenkinsBuildStatusWidgetUpdate> {
        return this.observeEvent<JenkinsBuildStatusWidgetUpdate>('jenkinsbuildstatus');
    }

    public observeEvent<T>(eventName: string): Observable<T> {
        let observable = new Observable(observer => {
            this.socket.on(eventName, (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }

}

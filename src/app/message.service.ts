import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client'
import ClockWidgetUpdate from '../common/ClockWidgetUpdate';
import NewsWidgetUpdate from '../common/NewsWidgetUpdate';

@Injectable()
export class MessageService {
  socket: SocketIOClient.Socket;
  private url: string;

  constructor() { }

  public setup(url: string): void {
    this.url = url;
  }


    public observeNewsWidget(): Observable<NewsWidgetUpdate> {
        let observable = new Observable(observer => {
            this.socket = io(this.url);
            this.socket.on('news', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }

  public observeClockWidget(): Observable<ClockWidgetUpdate> {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('clock', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

}

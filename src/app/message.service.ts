import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client'
import ClockWidgetUpdate from '../common/ClockWidgetUpdate';

@Injectable()
export class MessageService {
  socket: SocketIOClient.Socket;
  private url: string;

  constructor() { }

  public setup(url: string): void {
    this.url = url;
  }

  public getMessages(): Observable<ClockWidgetUpdate> {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

}
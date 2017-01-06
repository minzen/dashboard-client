import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';
import ClockWidgetUpdate from '../../common/ClockWidgetUpdate';

@Component({
  selector: 'app-time-widget',
  templateUrl: './time-widget.component.html',
  styleUrls: ['./time-widget.component.scss']
})
export class TimeWidgetComponent implements OnInit, OnDestroy {
  message: Date;
  connection: Subscription;

  constructor(private messageService : MessageService) {

  }

  ngOnInit() {
    this.connection = this.messageService.getMessages().subscribe((message: ClockWidgetUpdate) => {
      this.message = message.time;
    });
  }

  ngOnDestroy() {
    //this.connection.unsubscribe();
  }

}

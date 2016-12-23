import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-time-widget',
  templateUrl: './time-widget.component.html',
  styleUrls: ['./time-widget.component.css']
})
export class TimeWidgetComponent implements OnInit, OnDestroy {
  message: Date;
  connection: Subscription;

  constructor(private messageService : MessageService) {
    
  }

  ngOnInit() {
    this.connection = this.messageService.getMessages().subscribe((message:Date) => {
      this.message = message;
    });
  }

  ngOnDestroy() {
    //this.connection.unsubscribe();
  }

}

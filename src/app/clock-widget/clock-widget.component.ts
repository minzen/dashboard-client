import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';
import ClockWidgetUpdate from '../../common/ClockWidgetUpdate';

@Component({
    selector: 'app-clock-widget',
    templateUrl: './clock-widget.component.html',
    styleUrls: ['./clock-widget.component.scss']
})
export class ClockWidgetComponent implements OnInit {

    message: Date;
    connection: Subscription;

    constructor(private messageService: MessageService) {
    }

    ngOnInit() {
        this.message = new Date('2017-01-10T12:26:37.799Z');
        this.connection = this.messageService.observeClockWidget().subscribe((message: ClockWidgetUpdate) => {
            this.message = message.time;
        });
    }

}

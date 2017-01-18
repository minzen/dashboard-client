import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';
import MyNewsWidgetUpdate from '../../common/MyNewsWidgetUpdate';

@Component({
    selector: 'app-my-news-widget',
    templateUrl: './my-news-widget.component.html',
    styleUrls: ['./my-news-widget.component.scss']
})
export class MyNewsWidgetComponent implements OnInit {

    public model: MyNewsWidgetUpdate;
    connection: Subscription;

    constructor(private messageService: MessageService) {
    }

    ngOnInit() {
        this.connection = this.messageService.observeMyNewsWidget().subscribe((message: MyNewsWidgetUpdate) => {
            this.model = message;
        });
    }

}

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

    public model1: MyNewsWidgetUpdate = null;
    public model2: MyNewsWidgetUpdate = null;
    connection: Subscription;
    left: number = 0;
    counter: number = 0;

    constructor(private messageService: MessageService) {
    }

    ngOnInit() {
        this.connection = this.messageService.observeMyNewsWidget().subscribe((message: MyNewsWidgetUpdate) => {
            this.left = (this.counter++ % 2) > 0 ? 800 : 0;
            if (this.left === 0) {
                this.model1 = message;
                if (this.model2 == null) {
                    this.model2 = message;
                }
            } else {
                this.model2 = message;
            }
        });
    }

}

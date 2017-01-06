import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';
import NewsWidgetUpdate from '../../common/NewsWidgetUpdate';



@Component({
  selector: 'app-news-widget',
  templateUrl: './news-widget.component.html',
  styleUrls: ['./news-widget.component.css']
})
export class NewsWidgetComponent implements OnInit {

    newsText: string;
    connection: Subscription;

    constructor(private messageService : MessageService) {

    }

    ngOnInit() {
        this.connection = this.messageService.observeNewsWidget().subscribe((message: NewsWidgetUpdate) => {
            this.newsText = message.newsText;
        });
    }

    ngOnDestroy() {
        //this.connection.unsubscribe();
    }
}

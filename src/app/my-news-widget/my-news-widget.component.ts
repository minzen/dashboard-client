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

    imagePath: string;
    headline: string;
    content: string = 'Loading';
    connection: Subscription;

    constructor(private messageService: MessageService) {
       // this.headline = 'Donald Trump promises report on election hacking';
       // this.imagePath = 'http://ichef.bbci.co.uk/news/660/cpsprodpb/C6A7/production/_93555805_mediaitem93555802.jpg';
       // this.content = 'Donald Trump has promised to issue a report within 90 days on allegations of Russian hacking during the US presidential election campaign.';
    }

    ngOnInit() {
        this.connection = this.messageService.observeMyNewsWidget().subscribe((message: MyNewsWidgetUpdate) => {
            console.log(JSON.stringify(message))
            if(message != null) {
            this.headline = message.headline;
            this.content = message.content;
            this.imagePath = message.imagePath;
        }
        });
    }

}

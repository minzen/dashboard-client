import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';
import JenkinsBuildStatusWidgetUpdate from '../../common/JenkinsBuildStatusWidgetUpdate';

@Component({
    selector: 'app-jenkins-build-status-widget',
    templateUrl: './jenkins-build-status-widget.component.html',
    styleUrls: ['./jenkins-build-status-widget.component.scss']
})
export class JenkinsBuildStatusWidgetComponent implements OnInit {

    message: JenkinsBuildStatusWidgetUpdate;
    connection: Subscription;

    constructor(private messageService: MessageService) {
    }

    ngOnInit() {
        this.message = new JenkinsBuildStatusWidgetUpdate('Backend Build Status', 'SUCCESS', 111122 * 6, new Date().getTime());
        this.connection = this.messageService.observeJenkinsBuildStatusWidget().subscribe((message: JenkinsBuildStatusWidgetUpdate) => {
            if (message) {
                this.message = message;
            }
        });
    }

}

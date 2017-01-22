import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-widget-wrapper',
    templateUrl: './widget-wrapper.component.html',
    styleUrls: ['./widget-wrapper.component.scss']
})
export class WidgetWrapperComponent implements OnInit {

    @Input() title: string;
    @Input() size: string;

    public sizeClass: string = 'size-1x1';

    constructor() { }

    ngOnInit() {
        switch (this.size) {
            case 's':
                this.sizeClass = 'size-1x05';
                break;
            case 'm':
                this.sizeClass = 'size-1x1';
                break;
            case 'l':
                this.sizeClass = 'size-1x2';
                break;
            case 'xl':
                this.sizeClass = 'size-2x2';
                break;
        }
    }

}

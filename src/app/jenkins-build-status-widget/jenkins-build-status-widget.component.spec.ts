/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { WidgetWrapperComponent } from '../widget-wrapper/widget-wrapper.component';
import { JenkinsBuildStatusWidgetComponent } from './jenkins-build-status-widget.component';
import { MessageService } from '../message.service';
import { MomentModule } from 'angular2-moment';

describe('JenkinsBuildStatusWidgetComponent', () => {
    let component: JenkinsBuildStatusWidgetComponent;
    let fixture: ComponentFixture<JenkinsBuildStatusWidgetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [JenkinsBuildStatusWidgetComponent, WidgetWrapperComponent],
            providers: [MessageService],
            imports: [MomentModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(JenkinsBuildStatusWidgetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

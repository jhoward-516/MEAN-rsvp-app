import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {CoreModule} from '../../core/core.module';
import {EventComponent} from './event.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {RsvpComponent} from './rsvp/rsvp.component';
import {EVENT_ROUTES} from './event.routes';
import { RsvpFormComponent } from './rsvp/rsvp-form/rsvp-form.component';
import {SubmittingComponent} from '../../core/forms/submitting.component';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(EVENT_ROUTES)
  ],
  declarations: [
    EventComponent,
    EventDetailComponent,
    RsvpComponent,
    RsvpFormComponent,
    SubmittingComponent
  ]
})
export class EventModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModule} from '../../core/core.module';
import {RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {ADMIN_ROUTES} from './admin.routes';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(ADMIN_ROUTES)
  ],
  declarations: [
    AdminComponent
  ]
})
export class AdminModule { }

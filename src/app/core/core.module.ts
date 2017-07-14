import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {LoadingComponent} from './loading.component';
import {Title} from '@angular/platform-browser';
import {ApiService} from './api.service';
import {UtilsService} from './utils.service';
import {FilterSortService} from './filter-sort.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent
  ],
  providers: [
    Title,
    DatePipe,
    ApiService,
    UtilsService,
    FilterSortService
  ],
  exports: [
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    LoadingComponent
  ]
})
export class CoreModule { }

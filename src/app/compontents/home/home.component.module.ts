import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { HackerNewsListComponent } from '../hacker-news-list/hacker-news-list.component'
import { HackerNewsListComponentModule } from '../hacker-news-list/hacker-news-list.component.module'
import { HackerNewsListService } from '../../services/hackerNews-list-service';

@NgModule({
  declarations: [
    HomeComponent,
    HackerNewsListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    HackerNewsListComponentModule
  ],
  exports: [HomeComponent],
  providers: [HackerNewsListService]
})
export class HomeComponentModule {}

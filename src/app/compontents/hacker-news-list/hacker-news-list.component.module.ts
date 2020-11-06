import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HackerNewsListComponent } from '../hacker-news-list/hacker-news-list.component';
import { HackerNewsListService } from '../../services/hackerNews-list-service';

@NgModule({
  declarations: [HackerNewsListComponent],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [HackerNewsListComponent],
  providers: [HackerNewsListService]
})
export class HackerNewsListComponentModule {}
  
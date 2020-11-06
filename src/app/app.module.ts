import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../app/shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HackerNewsListComponent } from './compontents/hacker-news-list/hacker-news-list.component';
import { HomeComponent } from './compontents/home/home.component';
import { HackerNewsListService } from './services/hackerNews-list-service';
import { DataRestService } from './services/data-rest-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HackerNewsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [HackerNewsListService, DataRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, Subject,  Observable, fromEventPattern } from 'rxjs'; // change to new RxJS 6 import syntax
import { Kid } from '../models/hackerNewsKit';
import { HackerNewsItemRef } from '../models/hackerNewsItemRef';
import { HackerNewsStory } from '../models/hackerNewsStory';
import { HackerNewsComment } from '../models/hackerNewsComment';

export class BaseRestService {
  host: string;
  baseHost: string;

  constructor() {
  }
}

@Injectable({
  providedIn: 'root'
})
export class DataRestService {
  host: string;
  baseHost: string;

  constructor(private http: HttpClient) { 
    this.host = '';
    this.baseHost = 'https://hacker-news.firebaseio.com/v0/';
    console.log('@baseRestService: ' + this.baseHost);
  }

  private httpSimpleOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  getTopHackerNewsItemRef(
  ): Observable<HackerNewsItemRef[]> {
      this.host = this.baseHost + 'topstories.json?print=pretty';
    return this.http.get<HackerNewsItemRef[]>(
      this.host,
      this.httpSimpleOptions
    );
  }

  getOneHackerNewsStory( referrenceId: HackerNewsItemRef
    ): Observable<HackerNewsStory> {
      this.host = this.baseHost + 'item/'+referrenceId+'.json?print=pretty';
      return this.http.get<HackerNewsStory>(
        this.host,
        this.httpSimpleOptions
      );
  }

  getOneHackerNewsComment( referrenceId: HackerNewsItemRef
    ): Observable<HackerNewsComment[]> {
        this.host = this.baseHost + 'item/'+referrenceId+'.json?print=pretty';
        return this.http.get<HackerNewsComment[]>(
          this.host,
          this.httpSimpleOptions
        );
  }
}

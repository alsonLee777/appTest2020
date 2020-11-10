import { Injectable } from '@angular/core';
import { DataRestService } from '../services/data-rest-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { skip } from 'rxjs/operators';
import { Kid } from '../models/hackerNewsKit';
import { HackerNewsItemRef } from '../models/hackerNewsItemRef';
import { HackerNewsStory } from '../models/hackerNewsStory';
import { HackerNewsComment } from '../models/hackerNewsComment';

@Injectable({
  providedIn: 'root',
})

export class HackerNewsListService  {
    constructor( private dataRestService: DataRestService ) {
    }

    getTopHackerNewsItemRef(): Observable<HackerNewsItemRef[]> {
        const subjectItemRef = new BehaviorSubject<HackerNewsItemRef[]>(undefined);

        this.dataRestService.getTopHackerNewsItemRef(
          ).subscribe(response => {
            subjectItemRef.next(response);
        });
        return subjectItemRef;
    }

    getHackerNewsStory(referrenceId: HackerNewsItemRef): BehaviorSubject<HackerNewsStory> {
        const subjectStory = new BehaviorSubject<HackerNewsStory>(undefined);
    
        this.dataRestService.getOneHackerNewsStory( referrenceId
          ).subscribe(response => {
            subjectStory.next(response);
            // console.log(response);
        });
        return subjectStory;
    }

    getHackerNewsComment(refId: HackerNewsItemRef): Observable<HackerNewsComment[]> {
        // console.log('in getHackerNews Comment');
        // console.log(refId);
        const subject = new BehaviorSubject<HackerNewsComment[]>(undefined);
    
        this.dataRestService.getOneHackerNewsComment( refId
          ).subscribe(response => {
          subject.next(response);
          // console.log(response);
        });
        return subject;
    }
}
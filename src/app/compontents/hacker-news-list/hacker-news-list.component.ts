import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HackerNewsListService } from '../../services/hackerNews-list-service';
import { Kid } from '../../models/hackerNewsKit';
import { HackerNewsItemRef } from '../../models/hackerNewsItemRef';
import { HackerNewsStory } from '../../models/hackerNewsStory';

@Component({
  selector: 'app-hacker-news-list',
  templateUrl: './hacker-news-list.component.html',
  styleUrls: ['./hacker-news-list.component.css']
})
export class HackerNewsListComponent implements OnInit {
  storyList: HackerNewsStory[];

  constructor( private hackerNewsListService: HackerNewsListService ) { }

  
  ngOnInit(): void {
      this.storyList = [{
                        title: "story 1", 
                        descendants: 1, 
                        id: 7, 
                        score: 9, 
                        time: 4, 
                        by: "me",
                        type: "text",
                        url: "maybe it will work"
                      },
                      {
                        title: "story 2", 
                        descendants: 1, 
                        id: 7, 
                        score: 9, 
                        time: 4, 
                        by: "me",
                        type: "text",
                        url: "maybe it will work"
                      }
                    ];

                    this.hackerNewsListService.getTopHackerNewsItemRef().subscribe(items => {
                    if ( items ) {
                        let i: number;
                        // for (i = 0; i < items.length; i++) {
                        for (i = 0; i <= 5 ; i++) {
                          /// console.log('( #'+items[i] +' )');
                          this.hackerNewsListService.getHackerNewsStory(items[i]).subscribe(storyDetails => {
                            if ( storyDetails ) {
                                console.log('we are in list service, found data');           
                                console.log(storyDetails);
                                // this.storyList = storyDetails;
                                return storyDetails
                            }
                          }) 
                        } // eof for loop
                    } // eof of if items
                  }) // eof of subscribe block
              } // eof ngOnInit
}

import { Component, OnInit } from '@angular/core';
import { HackerNewsListService } from '../../services/hackerNews-list-service';
import * as moment from 'moment';
// import { Kid } from '../../models/hackerNewsKit';
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
    this.storyList = [];
    /*
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
                    */
          this.getHackerStoryDetails(5);
      }
                    
      getHackerStoryDetails(rqRenderNum: number): any { 
        this.hackerNewsListService.getTopHackerNewsItemRef().subscribe(items => {              
          if ( items ) {
              let i: number;
              for (i = 0; i <= rqRenderNum ; i++) {
                this.hackerNewsListService.getHackerNewsStory(items[i]).subscribe(storyDetails => {
                  if ( storyDetails ) {
                      console.log(storyDetails);
                      this.storyList.push(storyDetails);
                  }
                }) 
              } // eof for loop
          } // eof of if items
        }) // eof of subscribe block
    } // eof function
  }

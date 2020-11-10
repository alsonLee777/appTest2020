import { Component, OnInit } from '@angular/core';
import { HackerNewsListService } from '../../services/hackerNews-list-service';
import * as moment from 'moment';
// import { Kid } from '../../models/hackerNewsKit';
import { HackerNewsItemRef } from '../../models/hackerNewsItemRef';
import { HackerNewsStory } from '../../models/hackerNewsStory';
import { HackerNewsComment } from '../../models/hackerNewsComment';

@Component({
  selector: 'app-hacker-news-list',
  templateUrl: './hacker-news-list.component.html',
  styleUrls: ['./hacker-news-list.component.css']
})
export class HackerNewsListComponent implements OnInit {
  storyList: HackerNewsStory[];
  commentList: any;

  constructor( private hackerNewsListService: HackerNewsListService ) { }

  ngOnInit(): void {
    this.storyList = [];
    this.commentList = [];

    this.getHackerStoryDetails(5);
  }
                    
      getHackerStoryDetails(rqRenderNum: number): any { 
        this.hackerNewsListService.getTopHackerNewsItemRef().subscribe(items => {              
          if ( items ) {
              let i: number;
              for (i = 0; i <= rqRenderNum ; i++) {
                this.hackerNewsListService.getHackerNewsStory(items[i]).subscribe(storyDetails => {
                  if ( storyDetails ) {
                      // console.log(storyDetails);
                      console.log(storyDetails.kids.length);
                      if ( storyDetails.kids.length > 0 ) {
                        let maxCommentSize: number;
                        let c: number;
                        if ( storyDetails.kids.length > 4)
                          maxCommentSize = 4
                        else
                          maxCommentSize = storyDetails.kids.length ;

                        for (c = 0; c <= maxCommentSize ; c++) {
                            let commmentRefId : any;
                            // console.log(storyDetails.kids[c]);
                            commmentRefId = storyDetails.kids[c];
                            this.hackerNewsListService.getHackerNewsComment(commmentRefId).subscribe(commentDetails => {
                              if ( commentDetails ) {
                                  console.log("comment details");
                                  console.log(commentDetails);
                                  
                                  this.commentList.push(commentDetails);
            
                              }
                            }) 
                          } // eof for loop c
                      } 
                      // console.log(this.commentList);
                      this.storyList.push(storyDetails);
                  }
                }) 
              } // eof for loop i
          } // eof of if items
        }) // eof of subscribe block
    } // eof function
  }

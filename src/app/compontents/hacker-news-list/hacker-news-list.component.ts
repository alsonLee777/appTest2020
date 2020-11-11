import { Component, OnInit } from '@angular/core';
import { HackerNewsListService } from '../../services/hackerNews-list-service';
import { HackerNewsItemRef } from '../../models/hackerNewsItemRef';
import { HackerNewsStory } from '../../models/hackerNewsStory';
import { HackerNewsComment } from '../../models/hackerNewsComment';
import { HackerNewsStoryWithComments } from '../../models/hackerNewsStoryWithComments';

@Component({
  selector: 'app-hacker-news-list',
  templateUrl: './hacker-news-list.component.html',
  styleUrls: ['./hacker-news-list.component.css']
})
export class HackerNewsListComponent implements OnInit {
  storyListWithCommentsAsList: HackerNewsStoryWithComments[];
  commentList: any;
  btnToggle: string;
  showNumOfStories: number;
  showComments: number;

  constructor( private hackerNewsListService: HackerNewsListService ) { }

  ngOnInit(): void {
    this.commentList = [];
    this.storyListWithCommentsAsList = [];
    this.showNumOfStories = 10;
    this.btnToggle = "Show Comments";
    this.showComments = 1;
    this.getHackerStoryDetails(this.showNumOfStories);
  }
                    
  getHackerStoryDetails(rqRenderNum: number): any { 
        this.hackerNewsListService.getTopHackerNewsItemRef().subscribe(items => {              
          if ( items ) {
              let i: number;
              for (i = 0; i <= rqRenderNum ; i++) {
                this.hackerNewsListService.getHackerNewsStory(items[i]).subscribe(storyDetails => {
                  if ( storyDetails ) {
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
                            commmentRefId = storyDetails.kids[c];
                              this.hackerNewsListService.getHackerNewsComment(commmentRefId).subscribe(commentDetails => {
                                if ( commentDetails ) {                
                                  this.commentList.push(commentDetails);   
                                }   // eof commentDetails    
                              }) // service
                        } // eof for loop c
                      } // eof storyDetails.kids length
                      this.storyListWithCommentsAsList.push({
                        id: storyDetails.id,
                        title: storyDetails.title,
                        by: storyDetails.by,
                        descendants: storyDetails.descendants, 
                        url: storyDetails.url,
                        score: storyDetails.score,
                        time: new Date(storyDetails.time).toLocaleDateString("en-US"),
                        type: storyDetails.type,
                        comments: this.commentList
                      });  
                  } // eof storyDetails
                }); // eof Service
              } // eof for loop i
          } // eof of if items
        }) // eof of subscribe block
  } // eof function

  toggleShowComments()  {
    if ( this.showComments === 0)  {
       this.showComments = 1;
       this.btnToggle = "Show Comments";
    } else {
      this.showComments = 0;
      this.btnToggle = "Hide Comments";
    }
  }
}

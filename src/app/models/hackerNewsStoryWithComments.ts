import { HackerNewsComment } from '../models/hackerNewsComment';

export class HackerNewsStoryWithComments {
    by: string;
    descendants: number;
    id: number;
    comments: HackerNewsComment[];
    score: number;
    time: any;
    title: string;
    type: string;
    url: string;
  
    constructor() {
      this.by = '';
      this.descendants = null;
      this.comments = null;
      this.id = null;
      this.score = null;
      this.time = null;
      this.title = '';
      this.type = '';
      this.url = '';
    }
}
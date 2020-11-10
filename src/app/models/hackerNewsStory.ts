import { Kid } from '../models/hackerNewsKit'

export class HackerNewsStory {
    by: string;
    descendants: number;
    id: number;
    kids: Kid[];
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
  
    constructor() {
      this.by = '';
      this.descendants = null;
      this.kids = null;
      this.id = null;
      this.score = null;
      this.time = null;
      this.title = '';
      this.type = '';
      this.url = '';
    }
  }
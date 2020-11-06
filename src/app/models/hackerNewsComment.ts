import { Kid } from '../models/hackerNewsKit'

export class HackerNewsComment {
    by: string;
    id: number;
    kids: Kid[];
    parent: number;
    text: string;
    time: number;
    type: string;
  
    constructor() {
      this.by = '';
      this.id = null;
      this.kids = null;
      this.parent = null;
      this.text = '';
      this.time = null;
      this.type = '';
    }
  }
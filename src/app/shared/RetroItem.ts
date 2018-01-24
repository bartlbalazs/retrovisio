export class RetroItem {

  content: string = ' ';
  timestamp: number = Date.now();
  votes: number = 0;
  positive: boolean = false;

  constructor(content: string, positive: boolean) {
    this.content = content;
    this.positive = positive;
  }
}

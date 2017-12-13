export class RetroItem {

  content: string = ' ';
  timestamp: number = Date.now();
  votes: number = 0;

  constructor(content: string) {
    this.content = content;
  }
}

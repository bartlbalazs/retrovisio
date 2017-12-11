export class RetroItem {

  id: string;
  content: string = '';
  order: number = 1;
  votes: number = 0;


  constructor(content: string, order: number) {
    this.content = content;
    this.order = order;
  }
}

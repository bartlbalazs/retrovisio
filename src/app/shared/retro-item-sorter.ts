import {Pipe, PipeTransform} from '@angular/core';
import {RetroItem} from "./RetroItem";

@Pipe({
  name: 'retroItemSorter'
})
export class RetroItemSorter implements PipeTransform {

  transform(array: Array<RetroItem>, args: string): Array<RetroItem> {
    array.sort((a: RetroItem, b: RetroItem) => {
      if (a.timestamp < b.timestamp) {
        return -1;
      } else if (a.timestamp > b.timestamp) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}

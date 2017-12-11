import {Pipe, PipeTransform} from '@angular/core';
import {RetroItem} from "./RetroItem";

@Pipe({
  name: 'retroItemSorter'
})
export class RetroItemSorter implements PipeTransform {

  transform(array: Array<RetroItem>, args: string): Array<RetroItem> {
    array.sort((a: RetroItem, b: RetroItem) => {
      if (a.order < b.order) {
        return -1;
      } else if (a.order > b.order) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}

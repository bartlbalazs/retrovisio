import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'negativeItem'
})
export class NegativeItemPipe implements PipeTransform {

  transform(value: any): any {
    if (!value || value.length === 0) {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (!item.positive && item.votes > 0) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}

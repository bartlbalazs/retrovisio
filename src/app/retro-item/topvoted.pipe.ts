import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topvoted'
})
export class TopvotedPipe implements PipeTransform {

  transform(value: any): any {
    if (!value || value.length === 0) {
      return value;
    }
    return value.sort(
      (a, b) => {
        return a.votes > b.votes ? -1 : 1;
      }
    );
  }
}

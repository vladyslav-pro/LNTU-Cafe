import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTablePipeTs',
  standalone: true
})
export class SearchTablePipeTsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

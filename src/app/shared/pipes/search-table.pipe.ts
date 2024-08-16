import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTablePipe',
  standalone: true
})
export class SearchTablePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    /*
    transform(cocktails: CocktailModel[], cocktailName: string): CocktailModel[] {
    if (cocktailName === '') {
      return cocktails;
    }

    return cocktails.filter(cocktail => {
      return cocktail.name.toLowerCase().includes(cocktailName.toLowerCase());
    });

     */
    return null;
  }

}

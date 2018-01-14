import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'surnameShortCut'
})
export class SurnameShortCutPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    return value.charAt(0) + '.';
  }

}

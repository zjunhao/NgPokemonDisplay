import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperFirstCharacter'
})
export class UpperFirstCharacterPipe implements PipeTransform {

  transform(value: string): string {
    if (value === null || value =="") return "";
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'largeInteger',
})
export class LargeIntegerPipe implements PipeTransform {
  transform(value: number | string): string {
    // Ensure value is a string
    const stringValue = String(value);

    const formattedValue = stringValue.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
    
    return formattedValue;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heightconversion'
})
export class HeightConversionPipe implements PipeTransform {
  transform(value: number): string {
    if (value) {
      const meters = value / 100;
      return meters.toFixed(2) + ' m';
    }
    return '';
  }
}

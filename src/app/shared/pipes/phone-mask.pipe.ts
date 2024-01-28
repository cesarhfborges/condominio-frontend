import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneMask'
})
export class PhoneMaskPipe implements PipeTransform {

  transform(value: string): unknown {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{4})/, '$1-$2');
  }
}

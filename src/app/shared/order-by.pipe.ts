import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  /**
   * Gets the value Array - our products[]
   * and the gets the field - Our search string
   * and  the runs through the given search string on all objects
   * and then spits them out in a sequential order.
   * @param value
   * @param field
   */
  transform(value: Array<any>, field: string): any {
    if (value == null || value.length <= 1) {
      return value;
    }
    if (field.startsWith('-')) {
      field = field.substring(1);
      if (typeof value[0][field] === 'string' || value[0][field] instanceof String) {
        return [...value].sort((a, b) => b[field].localeCompare(a[field]));
      }
      return [...value].sort((a, b) => b[field] - a[field]);
    } else {
      if (typeof value[0][field] === 'string' || value[0][field] instanceof String) {
        return [...value].sort((a, b) => -b[field].localeCompare(a[field]));
      }
      return [...value].sort((a, b) => a[field] - b[field]);
    }
  }

}

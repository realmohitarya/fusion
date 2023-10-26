import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {
  transform(data: any[], currentPage: number, itemsPerPage: number): any[] {
    if (!data || data.length === 0 || !currentPage || !itemsPerPage) {
      return data;
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return data.slice(startIndex, endIndex);
  }
}

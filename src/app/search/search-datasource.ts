import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


// TODO: Replace this with your own data model type
export interface SearchItem {
  name: string;
  id: number;
  exp: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: SearchItem[] = [
  {id: 1, name: 'Hydrogen', exp: 2},
  {id: 2, name: 'Helium', exp: 2},
  {id: 3, name: 'Lithium', exp: 2},
  {id: 4, name: 'Beryllium', exp: 2},
  {id: 5, name: 'Boron', exp: 2},
  {id: 6, name: 'Carbon', exp: 2},
  {id: 7, name: 'Nitrogen', exp: 2},
  {id: 8, name: 'Oxygen', exp: 2},
  {id: 9, name: 'Fluorine', exp: 2},
  {id: 10, name: 'Neon', exp: 2},
  {id: 11, name: 'Sodium', exp: 2},
  {id: 12, name: 'Magnesium', exp: 2},
  {id: 13, name: 'Aluminum', exp: 2},
  {id: 14, name: 'Silicon', exp: 2},
  {id: 15, name: 'Phosphorus', exp: 2},
  {id: 16, name: 'Sulfur', exp: 2},
  {id: 17, name: 'Chlorine', exp: 2},
  {id: 18, name: 'Argon', exp: 2},
  {id: 19, name: 'Potassium', exp: 2},
  {id: 20, name: 'Calcium', exp: 2},
];

/**
 * Data source for the Search view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class SearchDataSource extends DataSource<SearchItem> {
  data: SearchItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;
  // filter: string;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<SearchItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange,
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: SearchItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: SearchItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'exp': return compare(+a.exp, +b.exp, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

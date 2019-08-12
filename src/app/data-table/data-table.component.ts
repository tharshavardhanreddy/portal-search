import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';
import {MatTableDataSource} from '@angular/material';

export interface DataTableItem {
  name: string;
  id: number;
  exp: number;
}


const EXAMPLE_DATA: DataTableItem[] = [
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




@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<DataTableItem>;
  //  dataSource: DataTableDataSource;
  dataSource = new MatTableDataSource(EXAMPLE_DATA);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'exp'];

  ngOnInit() {
    // this.dataSource = new DataTableDataSource();
  //  this. dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  applyFilter(filtervalue: string) {
this.dataSource.filter = filtervalue.trim().toLowerCase();

  }
}

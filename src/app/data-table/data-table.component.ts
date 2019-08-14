import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';
import {MatTableDataSource, MatDialog} from '@angular/material';
import {Http, Headers} from '@angular/http';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatDialogConfig } from '@angular/material';
import 'rxjs/add/operator/map';
import { CompanymodelComponent } from '../companymodel/companymodel.component';



export interface DataTableItem {
  name: string;
  designation: string;
  experience: number;
  vacancy: number;
  location: string;
  // actions: any;
}



// const EXAMPLE_DATA: DataTableItem[] = [
  // {id: 1, name: 'Hydrogen', exp: 2},
  // {id: 2, name: 'Helium', exp: 2},
  // {id: 3, name: 'Lithium', exp: 2},
  // {id: 4, name: 'Beryllium', exp: 2},
  // {id: 5, name: 'Boron', exp: 2},
  // {id: 6, name: 'Carbon', exp: 2},
  // {id: 7, name: 'Nitrogen', exp: 2},
  // {id: 8, name: 'Oxygen', exp: 2},
  // {id: 9, name: 'Fluorine', exp: 2},
  // {id: 10, name: 'Neon', exp: 2},
  // {id: 11, name: 'Sodium', exp: 2},
  // {id: 12, name: 'Magnesium', exp: 2},
  // {id: 13, name: 'Aluminum', exp: 2},
  // {id: 14, name: 'Silicon', exp: 2},
  // {id: 15, name: 'Phosphorus', exp: 2},
  // {id: 16, name: 'Sulfur', exp: 2},
  // {id: 17, name: 'Chlorine', exp: 2},
  // {id: 18, name: 'Argon', exp: 2},
  // {id: 19, name: 'Potassium', exp: 2},
  // {id: 20, name: 'Calcium', exp: 2},
   // ];




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
dataSource: any;
  EXAMPLE_DATA: DataTableItem[] = [];
  // dataSource = new MatTableDataSource(this.EXAMPLE_DATA);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'designation', 'experience', 'vacancy', 'location', 'actions'];
  constructor( private http: Http, public change: ChangeDetectorRef, public dialog: MatDialog) {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    this.http.post('http://192.168.0.192:4500/api/companydata',  { headers }).map(res => res.json()).subscribe(response => {
      console.log(response);
      this.dataSource =  new MatTableDataSource<any>(response);
      console.log(this.dataSource);
      this.change.detectChanges();
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });

  }

  // model(data) {
  //   console.log(data);
  //   // this.service.populateForm(row);
  //   // const dialogConfig = new MatDialogConfig();
  //   // dialogConfig.disableClose = true;
  //   // dialogConfig.autoFocus = true;
  //   // // tslint:disable-next-line:quotemark
  //   // dialogConfig.width = "60%";
  //   // this.dialog.open(DataTableComponent, dialogConfig);
  // }


   model(data): void {
    const dialogRef = this.dialog.open(CompanymodelComponent, {
      data: {
        datakey: data
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    // this.dataSource = new DataTableDataSource();
  //  this. dataSource = new MatTableDataSource();

  }

   ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  //   this.table.dataSource = this.dataSource;
   }

  applyFilter(filtervalue: string) {
    this.dataSource.filter = filtervalue.trim().toLowerCase();

  }

}

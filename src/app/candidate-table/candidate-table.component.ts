import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CandidateTableDataSource, DataTableItem } from './candidate-table-dtatasource';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Http, Headers } from '@angular/http';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatDialogConfig } from '@angular/material';
import 'rxjs/add/operator/map';




export interface DataTableItem {
  name: string;
  designation: string;
  experience: number;
  email: string;
  city: string;
  mobile: number;
  skills: [];
}
@Component({
  selector: 'app-candidate-table',
  templateUrl: './candidate-table.component.html',
  styleUrls: ['./candidate-table.component.css']
})
export class CandidateTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<DataTableItem>;
  //  dataSource: DataTableDataSource;
  dataSource: any;
  EXAMPLE_DATA: DataTableItem[] = [];
  // dataSource = new MatTableDataSource(this.EXAMPLE_DATA);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'email', 'mobile', 'designation', 'experience', 'city', 'skills'];
  constructor(private http: Http, public change: ChangeDetectorRef, public dialog: MatDialog) {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    this.http.post('http://192.168.0.192:4500/api/companydata', { headers }).map(res => res.json()).subscribe(response => {
      console.log(response);
      this.dataSource = new MatTableDataSource<any>(response);
      console.log(this.dataSource);
      this.change.detectChanges();
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });

  }


  //  model(data): void {
  //   const dialogRef = this.dialog.open(CompanymodelComponent, {
  //     data: {
  //       datakey: data
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  ngOnInit() {

  }


  applyFilter(filtervalue: string) {
    this.dataSource.filter = filtervalue.trim().toLowerCase();

  }

}

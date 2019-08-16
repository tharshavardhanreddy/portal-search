import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatIconModule, MatDialogModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagInputModule } from 'ngx-chips';
import {FormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {HttpModule} from '@angular/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatDialog, MatDialogConfig } from '@angular/material';
// import {MatDialogModule} from '@angular/material/dialog';

import { DataTableComponent } from './data-table/data-table.component';
import { CompanymodelComponent } from './companymodel/companymodel.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CandidateTableComponent } from './candidate-table/candidate-table.component';







@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DataTableComponent,
    CompanymodelComponent,
    CandidateTableComponent,
  ],
  imports: [
    MatDialogModule,
    MatGridListModule,
    // MatDialog,
    // MatDialogConfig,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserModule,
    TagInputModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MDBBootstrapModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule
  ],
  entryComponents: [
   CompanymodelComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatIconModule, MatDialogModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';


import {MatRadioModule} from '@angular/material/radio';

import {HttpClientModule} from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagInputModule } from 'ngx-chips';

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
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTableComponent } from './data-table/data-table.component';
import { CompanymodelComponent } from './companymodel/companymodel.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CandidateTableComponent } from './candidate-table/candidate-table.component';
import {CompanyskillsService} from './companyskills.service';
import { CandidatemodelComponent} from './candidatemodel/candidatemodel.component';







@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DataTableComponent,
    CompanymodelComponent,
    CandidateTableComponent,
    CandidatemodelComponent,
  ],
  imports: [
    MatDialogModule,
    MatRadioModule,
    MatGridListModule,
    MatChipsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    CommonModule,
    MatSidenavModule,
    // MatDialog,
    // MatDialogConfig,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserModule,
    MatDatepickerModule,
    TagInputModule,
    MatSelectModule,
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
   CompanymodelComponent,
   CandidatemodelComponent
  ],
  providers: [CompanyskillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

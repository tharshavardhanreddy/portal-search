import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import { DataTableComponent } from './data-table/data-table.component';
import { CandidateTableComponent } from './candidate-table/candidate-table.component';



const routes: Routes = [
  {path : '', component: LoginComponent},
  {path : 'login', component: LoginComponent},
  {path : 'register', component: RegistrationComponent},
  {path : 'data-table', component: DataTableComponent},
  {path : 'candidate-table', component: CandidateTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

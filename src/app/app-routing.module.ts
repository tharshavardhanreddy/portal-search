import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path : '', component: LoginComponent},
  {path : 'login', component: LoginComponent},
  {path : 'register', component: RegistrationComponent},
  {path : 'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

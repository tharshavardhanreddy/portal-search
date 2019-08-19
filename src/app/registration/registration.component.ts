import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  loading: any;
  url: string;

  constructor(public http: Http, private router: Router ) { }

  ngOnInit() {
  }
  login() {

  }

  register(data) {
    console.log(data.form.value);
    const headers = new Headers();
    headers.append('constant-type', 'application/json');
    this.http.post('http://192.168.0.192:4500/api/registeruser', data.form.value, { headers }).map(res => res.json()).subscribe(dataa => {
      console.log(dataa);
      this.router.navigate(['/login']);
    });
  }

}


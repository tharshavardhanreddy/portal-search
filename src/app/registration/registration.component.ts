import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {ip} from '../../config/url';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  loading: any;
  url: string;
  ip: string;

  constructor(public http: Http, private router: Router ) {
    this.ip = ip.url;
   }

  ngOnInit() {
  }
  login() {

  }

  register(data) {
    console.log(data.form.value);
    const headers = new Headers();
    headers.append('constant-type', 'application/json');
    this.http.post(this.ip + '/api/registeruser', data.form.value, { headers }).map(res => res.json()).subscribe(dataa => {
      console.log(dataa);
      this.router.navigate(['/login']);
    });
  }

}


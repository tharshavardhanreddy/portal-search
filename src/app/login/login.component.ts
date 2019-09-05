import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import {ip} from '../../config/url';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ip: string;
  constructor(private http: Http, private router: Router) { 
    this.ip = ip.url;
  }

  ngOnInit() {
  }
  userlog(data) {
    console.log(data.form.value);
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    this.http.post(this.ip + '/api/userlog', data.form.value, { headers }).map(res => res.json()).subscribe(response => {
      console.log(response);
      if (response.status === '200') {
        this.router.navigate(['/data-table']);
      } else {
        alert('please enter valid details');
      }

    });
  }

}

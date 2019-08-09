import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private http: Http ) { }

  ngOnInit() {
  }
  userlog(data) {
    console.log(data.form.value);
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    this.http.post('http://192.168.0.192:4500/api/userlog', data.form.value, { headers }).map(res => res.json()).subscribe(response => {
      console.log(response);
    });
  }

}

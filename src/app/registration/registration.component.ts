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









// export class SignupPage {
//       this.url=url;

//     this.network.onDisconnect().subscribe(()=>{
//       let alert=this.alertCtrl.create({
//         title:' ERROR',
//         message:'Please check your Internet Connection and try again.',
//         buttons:[{text:"ok",handler:()=>{
//           platform.exitApp();
//         }}]
//       })
//       alert.present();
//         })
//   }
//   login(){
//     this.navCtrl.push(LoginPage);
//     var index=1;
//     this.navCtrl.remove(index);
//   }
//   register(form){
//     this.loading=this.loadingController.create({content: "Registering User,please wait..."});
//     this.loading.present();
//     alert(JSON.stringify(form.value));
//    // var datafrom=JSON.stringify(form.value);

//   let headers =new Headers();
//  headers.append('Content-Type','application/json');


//  this.http.post(this.url+"/api/userregister",JSON.stringify(form.value),{headers:headers}).map(res =>res.json())
//  .subscribe(data =>{
//  console.log(data);
// if(data=='inserted'){
//   this.loading.dismissAll();


//  this.navCtrl.setRoot(LoginPage);

//  }


// else if( data=='phonenumber exist'){
//   let alert=this.alertCtrl.create({
//     title:' ERROR',
//     message:'Phonenumber Exists.',
//     buttons:[{text:"ok",handler:()=>{
//     }}]
//   })
//   alert.present();

//   this.loading.dismissAll();
// }


// else if( data=='branchname exist'){
//   let alert=this.alertCtrl.create({
//     title:' ERROR',
//     message:'Branch already Exists.',
//     buttons:[{text:"ok",handler:()=>{
//     }}]
//   })
//   alert.present();
//   this.loading.dismissAll();
// }


// else if( data=='mailid exist'){
//   let alert=this.alertCtrl.create({
//     title:' ERROR',
//     message:'Mailid Exists.',
//     buttons:[{text:"ok",handler:()=>{
//     }}]
//   })
//   alert.present();
//   this.loading.dismissAll();
// }

//  else{

//  let alert=this.alertCtrl.create({
//   title:' ERROR',
//   message:'Something Went Wrong, Please try again.',
//   buttons:[{text:"ok",handler:()=>{
//     alert.dismiss();
//   }}]
// })
// alert.present();
//  this.navCtrl.setRoot(SignupPage);
// }


// },error =>{
// console.log(error);
// });
//  }

// }

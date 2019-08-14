import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-companymodel',
  templateUrl: './companymodel.component.html',
  styleUrls: ['./companymodel.component.css']
})
export class CompanymodelComponent implements OnInit {

  companyname: string = '';
  email: string = '';
  mobilenumber: number;
  designation: string = '';
  location: string = '';
  experience: number;
  vacancies: number;
  skills = [];

  constructor(dialogRef: MatDialogRef<CompanymodelComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    var looper = 0
    console.log(this.data.datakey);
    this.companyname = this.data.datakey.name;
    this.email = this.data.datakey.email;
    this.mobilenumber = this.data.datakey.phonenumber;
    this.designation = this.data.datakey.designation;
    this.location = this.data.datakey.location;
    this.experience = this.data.datakey.experience;
    this.vacancies = this.data.datakey.vacancy;
    while (this.data.datakey.skills[looper]) {
      this.skills.push(this.data.datakey.skills[looper].item_text);
      console.log(this.skills);

      looper++;

    }

  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {CompanyskillsService} from '../companyskills.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-companymodel',
  templateUrl: './companymodel.component.html',
  styleUrls: ['./companymodel.component.css']
})
export class CompanymodelComponent implements OnInit {

  Companyname: string = '';
  Authorisedname: string = '';
  Email: string = '';
  Mobilenumber: number;
  Experienceinyears: number;
  Designation: string = '';
  Location: string = '';
  Experienceinmonths: number;
  Position: string = '';
  Ctc: number;
  Vacancy: number;
  skills = [];


  constructor(public dialogRef: MatDialogRef<CompanymodelComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public roter: Router, public companyservice: CompanyskillsService) { }

  ngOnInit() {
    let looper = 0;
    console.log(this.data.datakey);
    this.Companyname = this.data.datakey.Companyname;
    this.Authorisedname = this.data.datakey.Authorisedname;
    this.Email = this.data.datakey.Email;
    this.Mobilenumber = this.data.datakey.Mobilenumber;
    this.Designation = this.data.datakey.Designation;
    this.Location = this.data.datakey.Location;
    this.Experienceinmonths = this.data.datakey.Experienceinmonths;
    this.Experienceinyears = this.data.datakey.Experienceinyears;
    this.Ctc = this.data.datakey.Ctc;
    this.Position = this.data.datakey.Position;
    this.Vacancy = this.data.datakey.Vacancy;
    while (this.data.datakey.Skills[looper]) {
      this.skills.push(this.data.datakey.Skills[looper]);
      looper++;

    }
  }

  ctable() {

    this.companyservice.setskills(this.skills);
    this.dialogRef.close();
    this.roter.navigate(['/candidate-table']);

  }


}

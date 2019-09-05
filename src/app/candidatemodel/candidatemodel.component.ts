import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {CandidateskillsService} from '../candidateskills.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-candidatemodel',
  templateUrl: './candidatemodel.component.html',
  styleUrls: ['./candidatemodel.component.css']
})
export class CandidatemodelComponent implements OnInit {

  Fullname: string = '';
  Email: string = '';
  Mobilenumber: number;
  Experienceinyears: number;
  Designation: string = '';
  Location: string = '';
  Experienceinmonths: number;
  Gender: string = '';
  Ctc: number;
  skills = [];

  constructor(public dialogRef: MatDialogRef<CandidatemodelComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public roter: Router, public companyservice: CandidateskillsService) { }

  ngOnInit() {
    let looper = 0;
    console.log(this.data.datakey);
    this.Fullname = this.data.datakey.Fullname;
    this.Email = this.data.datakey.Email;
    this.Mobilenumber = this.data.datakey.Mobilenumber;
    this.Designation = this.data.datakey.Designation;
    this.Location = this.data.datakey.City;
    this.Experienceinmonths = this.data.datakey.Expinmonths;
    this.Experienceinyears = this.data.datakey.Expinyears;
    this.Ctc = this.data.datakey.Ctc;
    this.Gender = this.data.datakey.Gender;
    while (this.data.datakey.Skillsknown[looper]) {
      this.skills.push(this.data.datakey.Skillsknown[looper]);


      looper++;

    }
  }

  ctable() {
    console.log('ctable');
    this.companyservice.setskills(this.skills);
    this.dialogRef.close();
    this.roter.navigate(['/candidate-table']);

  }


}

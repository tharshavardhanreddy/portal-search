import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyskillsService {
skills: string[] = [];
  constructor() { }

  setskills(data) {

    this.skills = data;
  }
  getskills() {
return this.skills;

  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidateskillsService {
  skills: string[] = [];
  constructor() { }

  setskills(data) {
    alert(data);
    this.skills = data;
  }
  getskills() {
return this.skills;

  }
}

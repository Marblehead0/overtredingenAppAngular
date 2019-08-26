import { Injectable } from '@angular/core';
import * as data from '../overtredingen.json';

@Injectable({
  providedIn: 'root'
})
export class OvertredingService {

  constructor() { }
  snelheidList = []


  getPlaats(str) {
    console.log(data);
    let ind = data.docs.findIndex(item => { return item.opnameplaats_straat == str });
    if (ind == null) {
    }
    else {
      return data.docs[ind];
    }
}

  getAll() {
    return data.docs;
  }

  getAantal(number){
    this.snelheidList = [];
    let snelheids = this.getAll();
    for(let snel of snelheids){
    if(number <= snel.aantal_overtredingen_snelheid){
      this.snelheidList.push(snel);
    }
  }
 return this.snelheidList;
 }
}

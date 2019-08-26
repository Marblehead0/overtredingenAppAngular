import { Injectable } from '@angular/core';
import doc from '../overtredingen.json';

@Injectable({
  providedIn: 'root'
})
export class OvertredingService {

  constructor() { }
  snelheidList = []


  getPlaats(str) {
    console.log(doc);
    let ind = doc.docs.findIndex(item => { return item.opnameplaats_straat == str });
    if (ind == null) {
    }
    else {
      return doc.docs[ind];
    }
}

  getAll() {
    return doc.docs;
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

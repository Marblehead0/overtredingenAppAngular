import { Component } from '@angular/core';
import { OvertredingService } from './overtreding.service';
import { Data } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  foundPlaats;
  opnamePlaatsReq;

  snelheid

  snelheidList: Array<Data> = [];

  constructor(
    public overtredingService: OvertredingService
  ) { }

  findPlaats() {
    this.foundPlaats = this.overtredingService.getPlaats(this.opnamePlaatsReq);
  }

  showPlaats() {
    return this.foundPlaats.type;
  }

  getAantal() {
  this.snelheidList = this.overtredingService.getAantal(this.snelheid);
  }



}


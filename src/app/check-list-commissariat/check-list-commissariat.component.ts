import { Component, OnInit } from '@angular/core';
import { FlightModel } from 'src/app/model/flight.model';
import { FlightService } from '../services/flight.service';
import { CheckCommissariatModel } from 'src/app/model/checkCommissariat.model';
import { CheckCommissariatService } from '../services/checkCommissariat.service';
@Component({
  selector: 'app-check-list-commissariat',
  templateUrl: './check-list-commissariat.component.html',
  styleUrls: ['./check-list-commissariat.component.css']
})
export class CheckListCommissariatComponent implements OnInit {
  showCheckList = false;
  showErrorCheckComisariato = false;
  showErrorVuelo = false;
  flight: FlightModel;
  checkCommissariat: CheckCommissariatModel;
  idCheckCommissariat: number;
  code: string;
  origin: string;
  destination: string;
  flightDate: Date;
  day: string;
  hour: string;
  aircraft: string;
  company: string;
  route: string;
  status: string;
  a1: boolean;
  a2: boolean;
  a3: boolean;
  a4: boolean;
  a5: boolean;
 

  constructor(public flightService: FlightService, public checkCommissariatService: CheckCommissariatService) {
  }
  ngOnInit(): void {
  }
  search() {

    this.checkCommissariatService.getCheckFlight(this.code).subscribe(data => {
      this.checkCommissariat = data;
      this.code = data.code;
      this.a1 = data.a1;
      this.a2 = data.a2;
      this.a3 = data.a3;
      this.a4 = data.a4;
      this.a5 = data.a5;

    }, (error) => {
      this.flightService.getFlight(this.code).subscribe(data => {
        this.flight = data;
        this.code = data.code;
        this.origin = data.origin;
        this.destination = data.destination;
        this.flightDate = data.date;
        this.day = data.day;
        this.hour = data.hour;
        this.aircraft = data.aircraft;
        this.route = data.route;
        this.status = data.status;
      }, (error) => {
        console.log('An unexpected error occured');
        this.showErrorVuelo = true;
        this.showErrorCheckComisariato = false;
        this.showCheckList = false;
      }, () => {
        console.log('Complete');
        this.clean();
        this.checkCommissariat.a1 = null;
        this.checkCommissariat.a2 = null;
        console.info(this.a1);
        console.info(this.a2);
        this.showCheckList = true;
        this.showErrorCheckComisariato = false;
        this.showErrorVuelo = false;
      });
    }, () => {
      this.flightService.getFlight(this.code).subscribe(data => {
        this.flight = data;
        this.code = data.code;
        this.origin = data.origin;
        this.destination = data.destination;
        this.flightDate = data.date;
        this.day = data.day;        
        this.hour = data.hour;  
        this.company = data.company;
        this.aircraft = data.aircraft;
        this.route = data.route;
        this.status = data.status;
      }, (error) => {
        console.log('An unexpected error occured');
        this.showErrorVuelo = true;
        this.showErrorCheckComisariato = false;
        this.showCheckList = false;

      }, () => {
        if (this.status != "ENDED") {
          this.showErrorCheckComisariato = false;
          this.showErrorVuelo = false;
          this.showCheckList = true;
        } else {
          this.showErrorCheckComisariato = true;
          this.showErrorVuelo = false;
          this.showCheckList = false;
        }
      });

    });

  }
  save() {
    this.checkCommissariat = new CheckCommissariatModel();
    this.checkCommissariat.code = this.code;
    this.checkCommissariat.a1 = this.a1;
    this.checkCommissariat.a2 = this.a2;
    this.checkCommissariat.a3 = this.a3;
    this.checkCommissariat.a4 = this.a4;
    this.checkCommissariat.a5 = this.a5;


    this.checkCommissariatService.saveCheckFlight(this.checkCommissariat).subscribe(data => {
      this.checkCommissariat = data;
      console.info(this.checkCommissariat);
    });
    this.clean();

    this.showErrorVuelo = false;
    this.showErrorCheckComisariato = false;
    this.showCheckList = false;
  }
  clean() {
    this.a1 = null;
    this.a2 = null;
    this.a3 = null;
    this.a4 = null;
    this.a5 = null;
    this.checkCommissariat.a1 = null;
    this.checkCommissariat.a2 = null;
    this.checkCommissariat.a3 = null;
    this.checkCommissariat.a4 = null;
    this.checkCommissariat.a5 = null;




  }
  
}



import { Component, OnInit } from '@angular/core';
import { FlightModel } from 'src/app/model/flight.model';
import { FlightService } from '../services/flight.service';
import { CheckFlightModel } from 'src/app/model/checkFlight.model';
import { CheckFlightService } from '../services/checkFlight.service';


@Component({
  selector: 'app-check-list-flight',
  templateUrl: './check-list-flight.component.html',
  styleUrls: ['./check-list-flight.component.css']
})
export class CheckListFlightComponent implements OnInit {
  flights: FlightModel[];
  showCheckList = false;
  showErrorCheckVuelo = false;
  showErrorVuelo = false;
  flight: FlightModel;
  flightSelected: FlightModel;
  checkFlight: CheckFlightModel;
  idCheckFlight: number;
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
  a6: boolean;
  a7: boolean;
  a8: boolean;
  a9: boolean;
  a10: boolean;
  a11: boolean;
  a12: boolean;
  a13: boolean;
  a14: boolean;
  a15: boolean;
  a16: boolean;
  a17: boolean;
  a18: boolean;
  a19: boolean;
  a20: boolean;
  a21: boolean;
  a22: boolean;
  a23: boolean;
  a24: boolean;
  b1: boolean;
  b2: boolean;
  b3: boolean;
  b4: boolean;
  b5: boolean;
  b6: boolean;
  b7: boolean;
  b8: boolean;
  b9: boolean;
  b10: boolean;
  b11: boolean;
  b12: boolean;
  b13: boolean;
  b14: boolean;
  c1: boolean;
  c2: boolean;
  c3: boolean;
  c4: boolean;
  c5: boolean;
  c6: boolean;
  c7: boolean;
  c8: boolean;
  c9: boolean;
  c10: boolean;
  c11: boolean;
  c12: boolean;
  d1: boolean;
  d2: boolean;
  d3: boolean;
  e1: boolean;

  constructor(public flightService: FlightService, public checkFlightService: CheckFlightService) {
  }

  ngOnInit(): void {
    this.flightService.getAllFlights().subscribe((response: FlightModel[]) => {
      this.flights = response;
    });
  }

  search() {
    this.flight = this.flightSelected;
    this.code = this.flight.code;
    this.origin = this.flight.origin;
    this.destination = this.flight.destination;
    this.flightDate = this.flight.date;
    this.day = this.flight.day;
    this.hour = this.flight.hour;
    this.aircraft = this.flight.aircraft;
    this.route = this.flight.route;
    this.status = this.flight.status;


    this.checkFlightService.getCheckFlight(this.code).subscribe(data => {
      this.checkFlight = data;
      this.code = data.code;
      this.a1 = data.a1;
      this.a2 = data.a2;
      this.a3 = data.a3;
      this.a4 = data.a4;
      this.a5 = data.a5;
      this.a6 = data.a6;
      this.a7 = data.a7;
      this.a8 = data.a8;
      this.a9 = data.a9;
      this.a10 = data.a10;
      this.a11 = data.a11;
      this.a12 = data.a12;
      this.a13 = data.a13;
      this.a14 = data.a14;
      this.a15 = data.a15;
      this.a16 = data.a16;
      this.a17 = data.a17;
      this.a18 = data.a18;
      this.a19 = data.a19;
      this.a20 = data.a20;
      this.a21 = data.a21;
      this.a22 = data.a22;
      this.a23 = data.a23;
      this.a24 = data.a24;
      this.b1 = data.b1;
      this.b2 = data.b2;
      this.b3 = data.b3;
      this.b4 = data.b4;
      this.b5 = data.b5;
      this.b6 = data.b6;
      this.b7 = data.b7;
      this.b8 = data.b8;
      this.b9 = data.b9;
      this.b10 = data.b10;
      this.b11 = data.b11;
      this.b12 = data.b12;
      this.b13 = data.b13;
      this.b14 = data.b14;
      this.c1 = data.c1;
      this.c2 = data.c2;
      this.c3 = data.c3;
      this.c4 = data.c4;
      this.c5 = data.c5;
      this.c6 = data.c6;
      this.c7 = data.c7;
      this.c8 = data.c8;
      this.c9 = data.c9;
      this.c10 = data.c10;
      this.c11 = data.c11;
      this.c12 = data.c12;
      this.d1 = data.d1;
      this.d2 = data.d2;
      this.d3 = data.d3;
      this.e1 = data.e1;

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
        this.showErrorCheckVuelo = false;
        this.showCheckList = false;
      }, () => {
        console.log('Complete');
        this.clean();
        this.showCheckList = true;
        this.showErrorCheckVuelo = false;
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
        this.showErrorCheckVuelo = false;
        this.showCheckList = false;

      }, () => {
        if (this.status != "ENDED") {
          console.info(this.status);
          console.info(this.code);

          this.showErrorCheckVuelo = false;
          this.showErrorVuelo = false;
          this.showCheckList = true;
        } else {
          console.info(this.status);
          console.info(this.code);
          this.showErrorCheckVuelo = true;
          this.showErrorVuelo = false;
          this.showCheckList = false;
        }
      });

    });

  }
  save() {
    this.checkFlight = new CheckFlightModel();
    this.checkFlight.code = this.code;
    this.checkFlight.a1 = this.a1;
    this.checkFlight.a2 = this.a2;
    this.checkFlight.a3 = this.a3;
    this.checkFlight.a4 = this.a4;
    this.checkFlight.a5 = this.a5;
    this.checkFlight.a6 = this.a6;
    this.checkFlight.a7 = this.a7;
    this.checkFlight.a8 = this.a8;
    this.checkFlight.a9 = this.a9;
    this.checkFlight.a10 = this.a10;
    this.checkFlight.a11 = this.a11;
    this.checkFlight.a12 = this.a12;
    this.checkFlight.a13 = this.a13;
    this.checkFlight.a14 = this.a14;
    this.checkFlight.a15 = this.a15;
    this.checkFlight.a16 = this.a16;
    this.checkFlight.a17 = this.a17;
    this.checkFlight.a18 = this.a18;
    this.checkFlight.a19 = this.a19;
    this.checkFlight.a20 = this.a20;
    this.checkFlight.a21 = this.a21;
    this.checkFlight.a22 = this.a22;
    this.checkFlight.a23 = this.a23;
    this.checkFlight.a24 = this.a24;
    this.checkFlight.b1 = this.b1;
    this.checkFlight.b2 = this.b2;
    this.checkFlight.b3 = this.b3;
    this.checkFlight.b4 = this.b4;
    this.checkFlight.b5 = this.b5;
    this.checkFlight.b6 = this.b6;
    this.checkFlight.b7 = this.b7;
    this.checkFlight.b8 = this.b8;
    this.checkFlight.b9 = this.b9;
    this.checkFlight.b10 = this.b10;
    this.checkFlight.b11 = this.b11;
    this.checkFlight.b12 = this.b12;
    this.checkFlight.b13 = this.b13;
    this.checkFlight.b14 = this.b14;
    this.checkFlight.c1 = this.c1;
    this.checkFlight.c2 = this.c2;
    this.checkFlight.c3 = this.c3;
    this.checkFlight.c4 = this.c4;
    this.checkFlight.c5 = this.c5;
    this.checkFlight.c6 = this.c6;
    this.checkFlight.c7 = this.c7;
    this.checkFlight.c8 = this.c8;
    this.checkFlight.c9 = this.c9;
    this.checkFlight.c10 = this.c10;
    this.checkFlight.c11 = this.c11;
    this.checkFlight.c12 = this.c12;
    this.checkFlight.d1 = this.d1;
    this.checkFlight.d2 = this.d2;
    this.checkFlight.d3 = this.d3;
    this.checkFlight.e1 = this.e1;

    this.checkFlightService.saveCheckFlight(this.checkFlight).subscribe(data => {
      this.checkFlight = data;
      console.info(this.checkFlight);
    });

    this.clean();
    this.showErrorVuelo = false;
    this.showErrorCheckVuelo = false;
    this.showCheckList = false;
  }
  clean() {
    this.a1 = null;
    this.a2 = null;
    this.a3 = null;
    this.a4 = null;
    this.a5 = null;
    this.a6 = null;
    this.a7 = null;
    this.a8 = null;
    this.a9 = null;
    this.a10 = null;
    this.a11 = null;
    this.a12 = null;
    this.a13 = null;
    this.a14 = null;
    this.a15 = null;
    this.a16 = null;
    this.a17 = null;
    this.a18 = null;
    this.a19 = null;
    this.a20 = null;
    this.a21 = null;
    this.a22 = null;
    this.a23 = null;
    this.a24 = null;
    this.b1 = null;
    this.b2 = null;
    this.b3 = null;
    this.b4 = null;
    this.b5 = null;
    this.b6 = null;
    this.b7 = null;
    this.b8 = null;
    this.b9 = null;
    this.b10 = null;
    this.b11 = null;
    this.b12 = null;
    this.b13 = null;
    this.b14 = null;
    this.c1 = null;
    this.c2 = null;
    this.c3 = null;
    this.c4 = null;
    this.c5 = null;
    this.c6 = null;
    this.c7 = null;
    this.c8 = null;
    this.c9 = null;
    this.c10 = null;
    this.c11 = null;
    this.c12 = null;
    this.d1 = null;
    this.d2 = null;
    this.d3 = null;
    this.e1 = null;
  }

}



import { Component, OnInit } from '@angular/core';
import { FlightModel } from 'src/model/flight.model';
import { FlightService } from '../services/flight.service';
import { CheckFlightModel } from 'src/model/checkFlight.model';
import { CheckFlightService } from '../services/checkFlight.service';

@Component({
  selector: 'app-check-list-vuelo',
  templateUrl: './check-list-vuelo.component.html',
  styleUrls: ['./check-list-vuelo.component.css']
})
export class CheckListVueloComponent implements OnInit {

  showCheckList = false;
  flight: FlightModel;
  checkFlight: CheckFlightModel;
  idCheckFlight: number;
  id: number = 0;
  origin: string;
  destination: string;
  departure: Date;
  arrival: Date;
  aircraft: string;
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
  }

  search() {
   
    this.flightService.getFlight(this.id).subscribe(data => {
      this.showCheckList = true;
      this.flight = data;
      this.id = data.idFlight;
      this.origin = data.origin;
      this.destination = data.destination;
      this.departure = data.departure;
      this.arrival = data.arrival;
      this.aircraft = data.aircraft;
      this.route = data.route;
      this.status = data.status;
    });


  }
  save() {

    console.info(this.id);
    this.checkFlight.idCheckFlight = 1;
    console.info(this.checkFlight.idCheckFlight);
    this.checkFlight.a1 = false;
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
    });

  }



}




import { Component, OnInit } from '@angular/core';
import { FlightModel } from '../model/flight.model';
import { FlightService } from '../services/flight.service';
import { map } from 'rxjs/operators';

export interface Vuelo {
  codigo: string;
  salida: string;
  destino: string;
  diaSem: string;
  hora: string;
}

@Component({
  selector: 'app-flight-query',
  templateUrl: './flight-query.component.html',
  styleUrls: ['./flight-query.component.css'],
})
export class FlightQueryComponent implements OnInit {
  displayedColumns: string[] = [
    'demo-code',
    'demo-company',
    'demo-day',
    'demo-hour',
    'demo-date',
    'demo-origin',
    'demo-destination',
    'demo-route',
    'demo-aircraft',
  ];
  vuelos: FlightModel[];
  vue: FlightModel;
  showLoadAnimation = false;
  lastExecution : any;

  constructor(private _flightService: FlightService) {}

  ngOnInit(): void {
    this.vue = new FlightModel();
    this.showLoadAnimation = true;
    this._flightService.getAllFlights()
    .pipe(map((resp)=>{
     return resp.map((vuelo) =>{
        vuelo.date = new Date(new Date(vuelo.date).getTime()+3600000*3);
        return vuelo;
      })
    }))
    .subscribe((response: FlightModel[]) => {

      let vuelosFiltrados = response.filter(
        (a) => new Date(a.date) >= new Date(Date.now())
      );
      this.vuelos = vuelosFiltrados;
      this.vue = response[0];
      this.lastExecution = this.vue.execDate;
      this.showLoadAnimation = false;
    });
  }
}

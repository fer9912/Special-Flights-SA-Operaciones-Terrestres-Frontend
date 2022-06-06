import { Component, OnInit } from '@angular/core';
import { FlightModel } from '../model/flight.model';
import { FlightService } from '../services/flight.service';

export interface Vuelo {
  codigo: string;
  salida: string;
  destino: string;
  diaSem: string;
  hora: string;
}

const ELEMENT_DATA: Vuelo[] = [
  {
    codigo: 'AA0001',
    salida: 'AEP',
    destino: 'COR',
    diaSem: 'Lunes',
    hora: '18:50',
  },
  {
    codigo: 'AV0204',
    salida: 'EZE',
    destino: 'MDZ',
    diaSem: 'Lunes',
    hora: '07:45',
  },
  {
    codigo: 'AV0204',
    salida: 'EZE',
    destino: 'MDZ',
    diaSem: 'Lunes',
    hora: '07:45',
  },
  {
    codigo: 'AV0204',
    salida: 'EZE',
    destino: 'MDZ',
    diaSem: 'Lunes',
    hora: '07:45',
  },
  {
    codigo: 'AV0204',
    salida: 'EZE',
    destino: 'MDZ',
    diaSem: 'Lunes',
    hora: '07:45',
  },
  {
    codigo: 'AV0204',
    salida: 'EZE',
    destino: 'MDZ',
    diaSem: 'Lunes',
    hora: '07:45',
  },
  {
    codigo: 'AV0204',
    salida: 'EZE',
    destino: 'MDZ',
    diaSem: 'Lunes',
    hora: '07:45',
  },
  {
    codigo: 'AV0204',
    salida: 'EZE',
    destino: 'MDZ',
    diaSem: 'Lunes',
    hora: '07:45',
  },
  {
    codigo: 'AV0204',
    salida: 'EZE',
    destino: 'MDZ',
    diaSem: 'Lunes',
    hora: '07:45',
  },
  {
    codigo: 'AV0204',
    salida: 'EZE',
    destino: 'MDZ',
    diaSem: 'Lunes',
    hora: '07:45',
  },
  {
    codigo: 'AV0204',
    salida: 'EZE',
    destino: 'MDZ',
    diaSem: 'Lunes',
    hora: '07:45',
  },
  {
    codigo: 'AV0204',
    salida: 'EZE',
    destino: 'MDZ',
    diaSem: 'Lunes',
    hora: '07:45',
  },
  {
    codigo: 'AV0204',
    salida: 'EZE',
    destino: 'MDZ',
    diaSem: 'Lunes',
    hora: '07:45',
  },
];

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
  dataSource = ELEMENT_DATA;
  vuelos: FlightModel[];

  constructor(private _flightService: FlightService) {}

  ngOnInit(): void {
    this._flightService.getAllFlights().subscribe((response: FlightModel[]) => {

      let vuelosFiltrados = response.filter(
        (a) => new Date(a.date) >= new Date(Date.now())
      );
      this.vuelos = vuelosFiltrados;
    });
  }
}

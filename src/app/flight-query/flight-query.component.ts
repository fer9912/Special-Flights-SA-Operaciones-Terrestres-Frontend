import { Component, OnInit } from '@angular/core';
export interface Vuelo {
  codigo: string;
  salida: string;
  destino: string;
  diaSem: string;
  hora: string;
}

const ELEMENT_DATA: Vuelo[] = [
  { codigo: 'AA0001', salida: 'AEP', destino: 'COR', diaSem: 'Lunes' , hora:'18:50'},
  { codigo: 'AV0204', salida: 'EZE', destino: 'MDZ', diaSem: 'Lunes' , hora:'07:45'},
  { codigo: 'AV0204', salida: 'EZE', destino: 'MDZ', diaSem: 'Lunes' , hora:'07:45'},
  { codigo: 'AV0204', salida: 'EZE', destino: 'MDZ', diaSem: 'Lunes' , hora:'07:45'},
  { codigo: 'AV0204', salida: 'EZE', destino: 'MDZ', diaSem: 'Lunes' , hora:'07:45'},
  { codigo: 'AV0204', salida: 'EZE', destino: 'MDZ', diaSem: 'Lunes' , hora:'07:45'},
  { codigo: 'AV0204', salida: 'EZE', destino: 'MDZ', diaSem: 'Lunes' , hora:'07:45'},
  { codigo: 'AV0204', salida: 'EZE', destino: 'MDZ', diaSem: 'Lunes' , hora:'07:45'},
  { codigo: 'AV0204', salida: 'EZE', destino: 'MDZ', diaSem: 'Lunes' , hora:'07:45'},
  { codigo: 'AV0204', salida: 'EZE', destino: 'MDZ', diaSem: 'Lunes' , hora:'07:45'},
  { codigo: 'AV0204', salida: 'EZE', destino: 'MDZ', diaSem: 'Lunes' , hora:'07:45'},
  { codigo: 'AV0204', salida: 'EZE', destino: 'MDZ', diaSem: 'Lunes' , hora:'07:45'},
  { codigo: 'AV0204', salida: 'EZE', destino: 'MDZ', diaSem: 'Lunes' , hora:'07:45'}
];

@Component({
  selector: 'app-flight-query',
  templateUrl: './flight-query.component.html',
  styleUrls: ['./flight-query.component.css']
})
export class FlightQueryComponent implements OnInit {
  displayedColumns: string[] = ['demo-codigo', 'demo-salida', 'demo-destino', 'demo-dia','demo-hora'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

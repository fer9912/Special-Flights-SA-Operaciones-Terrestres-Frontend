import { Component, OnInit } from '@angular/core';
export interface BaggageModel {
  id: number,
  idVuelo: string,
  tipo: string,
  peso: number,
  cargaPasajero: string,
  tipoDoc: string,
  doc: string
}

const ELEMENT_DATA: BaggageModel[] = [
  { id: 1 , idVuelo: 'AR1215' , tipo: 'Equipaje', peso: 25, cargaPasajero: 'Si', tipoDoc: 'DNI', doc: "41768622"},
];


@Component({
  selector: 'app-baggage-info',
  templateUrl: './baggage-info.component.html',
  styleUrls: ['./baggage-info.component.css']
})
export class BaggageInfoComponent implements OnInit {
  displayedColumns: string[] = ['demo-id', 'demo-idVuelo', 'demo-tipo', 'demo-peso', 'demo-CargaPas','demo-tipoDoc', 'demo-doc'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

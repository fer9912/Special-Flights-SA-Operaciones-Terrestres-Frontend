import { Component, OnInit } from '@angular/core';
export interface BaggageModel {
  id: number,
  tipo: string,
  peso: number
  pasajero: string
}

const ELEMENT_DATA: BaggageModel[] = [
  { id: 1 , tipo: 'Equipaje', peso: 25, pasajero: 'Fernando' },
];


@Component({
  selector: 'app-baggage-info',
  templateUrl: './baggage-info.component.html',
  styleUrls: ['./baggage-info.component.css']
})
export class BaggageInfoComponent implements OnInit {
  displayedColumns: string[] = ['demo-id', 'demo-tipo', 'demo-peso', 'demo-pasajero'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

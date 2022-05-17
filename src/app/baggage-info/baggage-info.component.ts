import { Component, OnInit } from '@angular/core';
import { BaggageRequest } from '../model/baggage.request.model';
import { BaggageService } from '../services/baggage.service';

export interface BaggageModel {
  id: string,
  idVuelo: string,
  tipo: string,
  peso: string,
  cargaPasajero: string,
  tipoDoc: string,
  doc: string
}

const ELEMENT_DATA: BaggageModel[] = [
  { id: "1" , idVuelo: 'AR1215' , tipo: 'Equipaje', peso: "25", cargaPasajero: 'Si', tipoDoc: 'DNI', doc: "41768622"},
];


@Component({
  selector: 'app-baggage-info',
  templateUrl: './baggage-info.component.html',
  styleUrls: ['./baggage-info.component.css']
})
export class BaggageInfoComponent implements OnInit {
  BaggageCode: string;
  PassengerCode: string;
  FlightCode: string;
  showTable = false;
  info: BaggageModel[];
  displayedColumns: string[] = ['demo-id', 'demo-idVuelo', 'demo-tipo', 'demo-peso', 'demo-CargaPas','demo-tipoDoc', 'demo-doc'];
  constructor(public baggageservice : BaggageService) { }

  ngOnInit(): void {
  }

  search() { 
      //this.showLoadAnimation  = true;
      let request : BaggageRequest = new BaggageRequest();
      request.idEquipaje = this.BaggageCode;
      request.idPasajero = this.PassengerCode;
      request.idVuelo = this.FlightCode;
      this.baggageservice.getBaggage(request).subscribe(data => {
        this.info = data;
        this.showTable = true;
      });
    
  }
}

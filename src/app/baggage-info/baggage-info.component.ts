import { Component, OnInit } from '@angular/core';
import { BaggageRequest } from '../model/baggage.request.model';
import { BaggageService } from '../services/baggage.service';

export interface BaggageModel {
  baggageId: string,
  flightId: string,
  baggageType: string,
  weight: string,
  status: string,
  isPassengerBaggage: string,
  docType: string,
  documentNumber: string
}

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
  displayedColumns: string[] = ['demo-id', 'demo-idVuelo', 'demo-estado', 'demo-tipo', 'demo-cat', 'demo-peso','demo-est','demo-tipoDoc', 'demo-doc'];
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

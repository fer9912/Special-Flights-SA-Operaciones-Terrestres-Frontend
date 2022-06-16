import { Component, OnInit } from '@angular/core';
import { BaggageRequest } from '../model/baggage.request.model';
import { RoleModel } from '../model/role.model';
import { BaggageService } from '../services/baggage.service';
import {Router} from '@angular/router';

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
  role: RoleModel;
  BaggageCode: string;
  PassengerCode: string;
  FlightCode: string;
  showTable = false;
  info: BaggageModel[];
  displayedColumns: string[] = ['demo-id', 'demo-idVuelo', 'demo-estado', 'demo-tipo', 'demo-cat', 'demo-peso','demo-est','demo-tipoDoc', 'demo-doc'];
  constructor(public baggageservice : BaggageService,private router:Router) { }

  ngOnInit(): void {
    this.role = new RoleModel();

    this.role = JSON.parse(sessionStorage.getItem('role'));

    if(this.role.baggage == false){
      this.router.navigate(['home'])
    }
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

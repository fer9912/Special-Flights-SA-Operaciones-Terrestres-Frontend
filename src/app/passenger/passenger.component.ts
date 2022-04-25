import { Component, OnInit } from '@angular/core';
import { PassengerModel } from 'src/model/passenger.model';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {
  id = 0;
  passenger: PassengerModel = {
    idPassenger: 0,
    name: "Ejemplo"
  };
  constructor() { 
  }

  ngOnInit(): void {
  }

  search(){      
    this.passenger = PassengerService.getPassenger(this.id);
  }

}

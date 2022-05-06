import { Component, OnInit } from '@angular/core';
import { PassengerModel } from 'src/app/model/passenger.model';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {
  id: number = 0;
  name: string =  "Nombre";
  passenger: PassengerModel;
  constructor(public passengerService : PassengerService) { 
  }

  ngOnInit(): void {
  }

  search(){
    this.passengerService.getPassenger(this.id).subscribe(data => {
      this.passenger = data;
      this.id = data.idPassenger;
      this.name = data.name;
    });
  }

  save(){
    this.passenger.idPassenger = this.id;
    this.passenger.name = this.name;
    this.passengerService.savePassenger(this.passenger).subscribe(data => {
      this.passenger = data;
      this.search();
    });
    
  }

}

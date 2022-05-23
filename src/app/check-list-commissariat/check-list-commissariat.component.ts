import { Component, OnInit } from '@angular/core';
import { FlightModel } from 'src/app/model/flight.model';
import { FlightService } from '../services/flight.service';
import { CheckCommissariatModel } from 'src/app/model/checkCommissariat.model';
import { CheckCommissariatService } from '../services/checkCommissariat.service';
import { SuppliesModel } from 'src/app/model/supplies.model';
import { SuppliesService } from '../services/supplies.service';
@Component({
  selector: 'app-check-list-commissariat',
  templateUrl: './check-list-commissariat.component.html',
  styleUrls: ['./check-list-commissariat.component.css']
})
export class CheckListCommissariatComponent implements OnInit {
  flights: FlightModel[];
  showCheckList = false;
  showErrorCheckComisariato = false;
  showErrorSupplies = false;
  flight: FlightModel;
  flightSelected: FlightModel;
  supplies: SuppliesModel;
  idSupplies: number;
	menuEconomy: number;
	menuBusiness: number;
	menuVegetariano: number;
	comoditiesEconomy: number;
	comoditiesBusiness: number;

  checkCommissariat: CheckCommissariatModel;
  idCheckCommissariat: number;
  code: string;
  origin: string;
  destination: string;
  flightDate: Date;
  day: string;
  hour: string;
  aircraft: string;
  company: string;
  route: string;
  status: string;
  a1: boolean;
  a2: boolean;
  a3: boolean;
  a4: boolean;
  a5: boolean;
 

  constructor(public suppliesService: SuppliesService,public flightService: FlightService, public checkCommissariatService: CheckCommissariatService) {
  }
  ngOnInit(): void {
    this.flightService.getAllFlights().subscribe((response: FlightModel[]) => {
      this.flights = response;
      console.log(this.flights);

    });
  }
  search() {
    this.clean();
    this.flight= this.flightSelected;
    this.code= this.flight.code;
    this.origin = this.flight.origin;
    this.destination = this.flight.destination;
    this.flightDate = this.flight.date;
    this.day =this.flight.day;
    this.hour = this.flight.hour;
    this.aircraft = this.flight.aircraft;
    this.route = this.flight.route;
    this.status =this.flight.status;

    this.suppliesService.getSupplies(this.code).subscribe(data => {
      this.supplies = data;
      this.code = data.code;
      this.idSupplies= data.idSupplies;
      this.menuEconomy= data.menuEconomy;
      this.menuBusiness= data.menuBusiness;
      this.menuVegetariano= data.menuVegetariano;
      this.comoditiesEconomy= data.comoditiesEconomy;
      this.comoditiesBusiness= data.comoditiesBusiness;
      console.log(this.idCheckCommissariat);
    }, (error) => {
      console.log('An unexpected error occured');
      this.showErrorSupplies = true;
      this.showErrorCheckComisariato = false;
      this.showCheckList = false;
    }, () => {
      this.checkCommissariatService.getCheckCommissariat(this.code).subscribe(data => {
        this.checkCommissariat = data;
        this.idCheckCommissariat = data.idCheckCommissariat;
        this.code = data.code;
        this.a1 = data.a1;
        this.a2 = data.a2;
        this.a3 = data.a3;
        this.a4 = data.a4;
        this.a5 = data.a5;
        console.log(this.idCheckCommissariat);
  
      }, (error) => {
          console.log('Complete');
          this.showCheckList = true;
          this.showErrorCheckComisariato = false;
          this.showErrorSupplies = false;

      }, () => {
      
          if (this.status != "ENDED") {
            this.showErrorCheckComisariato = false;
            this.showErrorSupplies = false;
            this.showCheckList = true;
          } else {
            this.showErrorCheckComisariato = true;
            this.showErrorSupplies = false;
            this.showCheckList = false;
          }
  
      });

    });

  }
  save() {
    this.checkCommissariat = new CheckCommissariatModel();
    this.checkCommissariat.idCheckCommissariat= this.idCheckCommissariat;
    this.checkCommissariat.code = this.code;
    this.checkCommissariat.a1 = this.a1;
    this.checkCommissariat.a2 = this.a2;
    this.checkCommissariat.a3 = this.a3;
    this.checkCommissariat.a4 = this.a4;
    this.checkCommissariat.a5 = this.a5;
    console.info(this.checkCommissariat);


    this.checkCommissariatService.saveCheckCommissariat(this.checkCommissariat).subscribe(data => {
      this.checkCommissariat = data;
      console.info(this.checkCommissariat);
    });
    this.clean();

    this.showErrorSupplies = false;
    this.showErrorCheckComisariato = false;
    this.showCheckList = false;
  }
  clean() {
    this.idCheckCommissariat = null;
    this.code = null;
    this.a1 = null;
    this.a2 = null;
    this.a3 = null;
    this.a4 = null;
    this.a5 = null;
  }
  
}



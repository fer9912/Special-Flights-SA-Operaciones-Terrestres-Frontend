import { Component, OnInit } from '@angular/core';
import { PlannedFlightModel } from 'src/app/model/plannedFlight.model';
import { CheckCommissariatModel } from 'src/app/model/checkCommissariat.model';
import { CheckCommissariatService } from '../services/checkCommissariat.service';
import { SuppliesModel } from 'src/app/model/supplies.model';
import { SuppliesService } from '../services/supplies.service';
import { CheckFlightService } from '../services/checkFlight.service';
@Component({
  selector: 'app-check-list-commissariat',
  templateUrl: './check-list-commissariat.component.html',
  styleUrls: ['./check-list-commissariat.component.css']
})
export class CheckListCommissariatComponent implements OnInit {
  flights: PlannedFlightModel[];
  showCheckList = false;
  showErrorCheckComisariato = false;
  showErrorSupplies = false;
  flight: PlannedFlightModel;
  flightSelected: PlannedFlightModel = null;
  supplies: SuppliesModel;
  idSupplies: number;
  code:string;
	menuEconomy: number;
	menuBusiness: number;
	menuVegetariano: number;
	comoditiesEconomy: number;
	comoditiesBusiness: number;

  checkCommissariat: CheckCommissariatModel;
  idCheckCommissariat: number;

  idvuelo: number;
  codvuelo:string;
  estado:string;
  aeronave_matricula_fk:string;
  modeloaeronave:string;
  origenteorico_codiata:string;
  origenreal_codiata:string;
  destinoteorico_codiata:string;
  destinoreal_codiata:string;
  siglacompania:string;
  nombrecompania:string;
  rutateorica:string;
  rutareal:string;
  regladevuelo:string;
  tipodevuelo:string;
  diadespegue:string;
  fechadespegueestimado:Date;
  horadespegueestimado:string;;
  fechadespeguereal:string;
  horadespeguereal:string;
  fechaaterrizajeestimado:Date;
  horaaterrizajeestimado:string;
  fechaaterrizajereal:string;
  horaaterrizajereal:string;
  climadestino:string;
  gradostemperaturadestino:number;
  velocidadvientokm:string;
  ltscombustibleestimado:number;
  ltscombustiblereal:number;
  lubricanteestimado:number;
  lubricantereal:number;
  kilometrajeestimado:number;
  kilometrajereal:number;
  checkin:Boolean; 
  controlcabina:Boolean; 
  totalpersonasabordo:number;
  duracionestimada:string;
  duracionreal:string;
  insumosconsumidos:number;
  pesocargaorigen:number;
  pesocargadestino:number;

  a1: boolean;
  a2: boolean;
  a3: boolean;
  a4: boolean;
  a5: boolean;
 

  constructor(public suppliesService: SuppliesService,public checkFlightService: CheckFlightService, public checkCommissariatService: CheckCommissariatService) {
  }
  ngOnInit(): void {
    let date: string = "20-05-2022"
  // let date: string = new Date().getDate()+'-'+(new Date().getMonth())+'-'+new Date().getFullYear();
    console.log(date) // '2022-2-6'

    this.checkFlightService.getPlannedFlight(date).subscribe((response: PlannedFlightModel[]) => {
      this.flights = response;
    });
  }
  search() {
    this.clean();
    this.flight = this.flightSelected;
    this.idvuelo = this.flight.idvuelo;
    this.codvuelo = this.flight.codvuelo;
    this.estado = this.flight.estado;
    this.aeronave_matricula_fk = this.flight.aeronave_matricula_fk;
    this.modeloaeronave = this.flight.modeloaeronave;
    this.origenteorico_codiata = this.flight.origenteorico_codiata;
    this.origenreal_codiata = this.flight.origenreal_codiata;
    this.destinoteorico_codiata = this.flight.destinoteorico_codiata;
    this.destinoreal_codiata = this.flight.destinoreal_codiata;
    this.siglacompania = this.flight.siglacompania;
    this.nombrecompania = this.flight.nombrecompania;
    this.rutateorica = this.flight.rutateorica;
    this.rutareal = this.flight.rutareal;
    this.regladevuelo = this.flight.regladevuelo;
    this.tipodevuelo = this.flight.tipodevuelo;
    this.diadespegue = this.flight.diadespegue;
    this.fechadespegueestimado = this.flight.fechadespegueestimado;
    this.horadespegueestimado = this.flight.horadespegueestimado;
    this.fechadespeguereal = this.flight.fechadespeguereal;
    this.horadespeguereal = this.flight.horadespeguereal;
    this.fechaaterrizajeestimado = this.flight.fechaaterrizajeestimado;
    this.horaaterrizajeestimado = this.flight.horaaterrizajeestimado;
    this.fechaaterrizajereal = this.flight.fechaaterrizajereal;
    this.horaaterrizajereal = this.flight.horaaterrizajereal;
    this.climadestino = this.flight.climadestino;
    this.gradostemperaturadestino = this.flight.gradostemperaturadestino;
    this.velocidadvientokm = this.flight.velocidadvientokm;
    this.ltscombustibleestimado = this.flight.ltscombustibleestimado;
    this.ltscombustiblereal = this.flight.ltscombustiblereal;
    this.lubricanteestimado = this.flight.lubricanteestimado;
    this.lubricantereal = this.flight.lubricantereal;
    this.kilometrajeestimado = this.flight.kilometrajeestimado;
    this.kilometrajereal = this.flight.kilometrajereal;
    this.checkin = this.flight.checkin;
    this.controlcabina = this.flight.controlcabina;
    this.totalpersonasabordo = this.flight.totalpersonasabordo;
    this.duracionestimada = this.flight.duracionestimada;
    this.duracionreal = this.flight.duracionreal;
    this.insumosconsumidos = this.flight.insumosconsumidos;
    this.pesocargaorigen = this.flight.pesocargaorigen;
    this.pesocargadestino = this.flight.pesocargadestino;
    

    this.suppliesService.getSupplies(this.codvuelo).subscribe(data => {
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
      
          if (this.estado != "ENDED") {
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



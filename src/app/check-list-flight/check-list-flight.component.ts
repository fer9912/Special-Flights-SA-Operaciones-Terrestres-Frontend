import { Component, OnInit } from '@angular/core';
import { PlannedFlightModel } from 'src/app/model/plannedFlight.model';
import { CheckFlightModel } from 'src/app/model/checkFlight.model';
import { CheckFlightService } from '../services/checkFlight.service';


@Component({
  selector: 'app-check-list-flight',
  templateUrl: './check-list-flight.component.html',
  styleUrls: ['./check-list-flight.component.css']
})
export class CheckListFlightComponent implements OnInit {
  flights: PlannedFlightModel[];
  showCheckList = false;
  showErrorCheckVuelo = false;
  showLoadAnimation = false;
  showErrorVuelo = false;
  flight: PlannedFlightModel;
  flightSelected: PlannedFlightModel;
  isDisabled : boolean;

  idvuelo: string;
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
  motivoestado:string;
  aeronavesposibles: string[];
  searchDisabled = false;
  
  checkFlight: CheckFlightModel;
  idCheckFlight: number;
  idFlight: string;
  a1: boolean;
  a2: boolean;
  a3: boolean;
  a4: boolean;
  a5: boolean;
  a6: boolean;
  a7: boolean;
  a8: boolean;
  a9: boolean;
  a10: boolean;
  a11: boolean;
  a12: boolean;
  a13: boolean;
  a14: boolean;
  a15: boolean;
  a16: boolean;
  a17: boolean;
  a18: boolean;
  a19: boolean;
  a20: boolean;
  a21: boolean;
  a22: boolean;
  a23: boolean;
  a24: boolean;
  b1: boolean;
  b2: boolean;
  b3: boolean;
  b4: boolean;
  b5: boolean;
  b6: boolean;
  b7: boolean;
  b8: boolean;
  b9: boolean;
  b10: boolean;
  b11: boolean;
  b12: boolean;
  b13: boolean;
  b14: boolean;
  c1: boolean;
  c2: boolean;
  c3: boolean;
  c4: boolean;
  c5: boolean;
  c6: boolean;
  c7: boolean;
  c8: boolean;
  c9: boolean;
  c10: boolean;
  c11: boolean;
  c12: boolean;
  d1: boolean;
  d2: boolean;
  d3: boolean;
  d4: boolean;
  e1: boolean;
  e2: boolean;
  validacionFinal: boolean;
  tripulacion:string;
  showNotResultMessage = false;

  constructor( public checkFlightService: CheckFlightService) {
  }

  ngOnInit(): void {
    let date: string = "22-06-2022"
   // let date: string = new Date().getDate()+'-'+(new Date().getMonth())+'-'+new Date().getFullYear();
    console.log(date)

    this.showLoadAnimation = true;
    this.checkFlightService.getPlannedFlight(date).subscribe((response: PlannedFlightModel[]) => {
      this.flights = response;
      this.showLoadAnimation = false;
    });
  }

  search() {
    this.clean();
    this.flight = this.flightSelected;
    this.idvuelo = this.flight.idvuelo;
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
    this.showLoadAnimation = true;
    this.checkFlightService.getCrew(this.flight.idvuelo).subscribe(data => {
      if(data != null && data  != undefined){
        this.tripulacion=data
      }else{
        this.showNotResultMessage = true;
      }
      
      this.showLoadAnimation = false;
    });



    this.checkFlightService.getCheckFlight(this.idvuelo).subscribe(data => {
      this.checkFlight = data;
      this.idCheckFlight = data.idCheckFlight;
      this.idFlight = data.idFlight;
      this.a1 = data.a1;
      this.a2 = data.a2;
      this.a3 = data.a3;
      this.a4 = data.a4;
      this.a5 = data.a5;
      this.a6 = data.a6;
      this.a7 = data.a7;
      this.a8 = data.a8;
      this.a9 = data.a9;
      this.a10 = data.a10;
      this.a11 = data.a11;
      this.a12 = data.a12;
      this.a13 = data.a13;
      this.a14 = data.a14;
      this.a15 = data.a15;
      this.a16 = data.a16;
      this.a17 = data.a17;
      this.a18 = data.a18;
      this.a19 = data.a19;
      this.a20 = data.a20;
      this.a21 = data.a21;
      this.a22 = data.a22;
      this.a23 = data.a23;
      this.a24 = data.a24;
      this.b1 = data.b1;
      this.b2 = data.b2;
      this.b3 = data.b3;
      this.b4 = data.b4;
      this.b5 = data.b5;
      this.b6 = data.b6;
      this.b7 = data.b7;
      this.b8 = data.b8;
      this.b9 = data.b9;
      this.b10 = data.b10;
      this.b11 = data.b11;
      this.b12 = data.b12;
      this.b13 = data.b13;
      this.b14 = data.b14;
      this.c1 = data.c1;
      this.c2 = data.c2;
      this.c3 = data.c3;
      this.c4 = data.c4;
      this.c5 = data.c5;
      this.c6 = data.c6;
      this.c7 = data.c7;
      this.c8 = data.c8;
      this.c9 = data.c9;
      this.c10 = data.c10;
      this.c11 = data.c11;
      this.c12 = data.c12;
      this.d1 = data.d1;
      this.d2 = data.d2;
      this.d3 = data.d3;
      this.d4 = data.d4;
      this.e1 = data.e1;
      this.e2= data.e2;
      this.validacionFinal= data.validacionFinal;

      this.showLoadAnimation = false;  
    }, (error) => {
     
        this.showCheckList = true;
        this.showErrorCheckVuelo = false;
        this.showErrorVuelo = false;
        
      this.showLoadAnimation = false;  
    }, () => {

      if (this.estado != "despegado" && this.estado != "en vuelo" && this.estado != "aterrizado" && this.estado != "finalizado" && this.estado != "cancelado") {
        this.showErrorCheckVuelo = false;
        this.showErrorVuelo  = false;
        this.showCheckList = true;
        console.log(this.estado);
      } else {
        this.showErrorCheckVuelo = false;
        this.showErrorVuelo  = false;
        this.showCheckList = true;
        this.isDisabled =true;
        console.log(this.estado);
      }
      
      
      this.showLoadAnimation = false;  
      });
    }
  save() {
    this.checkFlight = new CheckFlightModel();
    this.checkFlight.idCheckFlight= this.idCheckFlight;
    this.checkFlight.idFlight = this.idvuelo;
    this.checkFlight.a1 = this.a1;
    this.checkFlight.a2 = this.a2;
    this.checkFlight.a3 = this.a3;
    this.checkFlight.a4 = this.a4;
    this.checkFlight.a5 = this.a5;
    this.checkFlight.a6 = this.a6;
    this.checkFlight.a7 = this.a7;
    this.checkFlight.a8 = this.a8;
    this.checkFlight.a9 = this.a9;
    this.checkFlight.a10 = this.a10;
    this.checkFlight.a11 = this.a11;
    this.checkFlight.a12 = this.a12;
    this.checkFlight.a13 = this.a13;
    this.checkFlight.a14 = this.a14;
    this.checkFlight.a15 = this.a15;
    this.checkFlight.a16 = this.a16;
    this.checkFlight.a17 = this.a17;
    this.checkFlight.a18 = this.a18;
    this.checkFlight.a19 = this.a19;
    this.checkFlight.a20 = this.a20;
    this.checkFlight.a21 = this.a21;
    this.checkFlight.a22 = this.a22;
    this.checkFlight.a23 = this.a23;
    this.checkFlight.a24 = this.a24;
    this.checkFlight.b1 = this.b1;
    this.checkFlight.b2 = this.b2;
    this.checkFlight.b3 = this.b3;
    this.checkFlight.b4 = this.b4;
    this.checkFlight.b5 = this.b5;
    this.checkFlight.b6 = this.b6;
    this.checkFlight.b7 = this.b7;
    this.checkFlight.b8 = this.b8;
    this.checkFlight.b9 = this.b9;
    this.checkFlight.b10 = this.b10;
    this.checkFlight.b11 = this.b11;
    this.checkFlight.b12 = this.b12;
    this.checkFlight.b13 = this.b13;
    this.checkFlight.b14 = this.b14;
    this.checkFlight.c1 = this.c1;
    this.checkFlight.c2 = this.c2;
    this.checkFlight.c3 = this.c3;
    this.checkFlight.c4 = this.c4;
    this.checkFlight.c5 = this.c5;
    this.checkFlight.c6 = this.c6;
    this.checkFlight.c7 = this.c7;
    this.checkFlight.c8 = this.c8;
    this.checkFlight.c9 = this.c9;
    this.checkFlight.c10 = this.c10;
    this.checkFlight.c11 = this.c11;
    this.checkFlight.c12 = this.c12;
    this.checkFlight.d1 = this.d1;
    this.checkFlight.d2 = this.d2;
    this.checkFlight.d3 = this.d3;
    this.checkFlight.d4 = this.d4;
    this.checkFlight.e1 = this.e1;
    this.checkFlight.e2 = this.e2;
    if (  this.checkFlight.a1 == true &&
      this.checkFlight.a2 == true &&
      this.checkFlight.a3 == true &&
      this.checkFlight.a4 == true &&
      this.checkFlight.a5 == true &&
      this.checkFlight.a6 == true &&
      this.checkFlight.a7 == true &&
      this.checkFlight.a8 == true &&
      this.checkFlight.a9 == true &&
      this.checkFlight.a10 == true &&
      this.checkFlight.a11 == true &&
      this.checkFlight.a12 == true &&
      this.checkFlight.a13 == true &&
      this.checkFlight.a14 == true &&
      this.checkFlight.a15 == true &&
      this.checkFlight.a16 == true &&
      this.checkFlight.a17 == true &&
      this.checkFlight.a18 == true &&
      this.checkFlight.a19 == true &&
      this.checkFlight.a20 == true &&
      this.checkFlight.a21 == true &&
      this.checkFlight.a22 == true &&
      this.checkFlight.a23 == true &&
      this.checkFlight.a24 == true &&
      this.checkFlight.b1 == true &&
      this.checkFlight.b2 == true &&
      this.checkFlight.b3 == true &&
      this.checkFlight.b4 == true &&
      this.checkFlight.b5 == true &&
      this.checkFlight.b6 == true &&
      this.checkFlight.b7 == true &&
      this.checkFlight.b8 == true &&
      this.checkFlight.b9 == true &&
      this.checkFlight.b10 == true &&
      this.checkFlight.b11 == true &&
      this.checkFlight.b12 == true &&
      this.checkFlight.b13 == true &&
      this.checkFlight.b14 == true &&
      this.checkFlight.c1 == true &&
      this.checkFlight.c2 == true &&
      this.checkFlight.c3 == true &&
      this.checkFlight.c4 == true &&
      this.checkFlight.c5 == true &&
      this.checkFlight.c6 == true &&
      this.checkFlight.c7 == true &&
      this.checkFlight.c8 == true &&
      this.checkFlight.c9 == true &&
      this.checkFlight.c10 == true &&
      this.checkFlight.c11 == true &&
      this.checkFlight.c12 == true &&
      this.checkFlight.d1 == true &&
      this.checkFlight.d2 == true &&
      this.checkFlight.d3 == true &&
      this.checkFlight.d4 == true &&
      this.checkFlight.e1 == true &&
      this.checkFlight.e2 == true){
      this.checkFlight.validacionFinal = true; 
  }else{    this.checkFlight.validacionFinal = false; }

    console.info(this.checkFlight);
    this.checkFlightService.saveCheckFlight(this.checkFlight).subscribe(data => {
      this.checkFlight = data;
      console.info(this.checkFlight);
    });

    this.clean();
    this.showErrorVuelo = false;
    this.showErrorCheckVuelo = false;
    this.showCheckList = false;
  }
  clean() {
    this.isDisabled =false;
    this.idCheckFlight=null;
    this.idFlight = null;
    this.a1 = null;
    this.a2 = null;
    this.a3 = null;
    this.a4 = null;
    this.a5 = null;
    this.a6 = null;
    this.a7 = null;
    this.a8 = null;
    this.a9 = null;
    this.a10 = null;
    this.a11 = null;
    this.a12 = null;
    this.a13 = null;
    this.a14 = null;
    this.a15 = null;
    this.a16 = null;
    this.a17 = null;
    this.a18 = null;
    this.a19 = null;
    this.a20 = null;
    this.a21 = null;
    this.a22 = null;
    this.a23 = null;
    this.a24 = null;
    this.b1 = null;
    this.b2 = null;
    this.b3 = null;
    this.b4 = null;
    this.b5 = null;
    this.b6 = null;
    this.b7 = null;
    this.b8 = null;
    this.b9 = null;
    this.b10 = null;
    this.b11 = null;
    this.b12 = null;
    this.b13 = null;
    this.b14 = null;
    this.c1 = null;
    this.c2 = null;
    this.c3 = null;
    this.c4 = null;
    this.c5 = null;
    this.c6 = null;
    this.c7 = null;
    this.c8 = null;
    this.c9 = null;
    this.c10 = null;
    this.c11 = null;
    this.c12 = null;
    this.d1 = null;
    this.d2 = null;
    this.d3 = null;
    this.d4 = null;
    this.e1 = null;
    this.e2 = null;
    this.validacionFinal = null; 

  }
}


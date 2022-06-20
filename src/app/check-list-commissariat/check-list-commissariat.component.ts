import { Component, OnInit } from '@angular/core';
import { PlannedFlightModel } from 'src/app/model/plannedFlight.model';
import { CheckCommissariatModel } from 'src/app/model/checkCommissariat.model';
import { CheckCommissariatService } from '../services/checkCommissariat.service';
import { InsumoVueloDTOModel } from "../model/insumoVueloDTO.model";
import { InsumoDTOModel } from "../model/insumoDTO.model";
import { SuppliesService } from '../services/supplies.service';
import { CheckFlightService } from '../services/checkFlight.service';
@Component({
  selector: 'app-check-list-commissariat',
  templateUrl: './check-list-commissariat.component.html',
  styleUrls: ['./check-list-commissariat.component.css']
})
export class CheckListCommissariatComponent implements OnInit {
  flights: PlannedFlightModel[];
  showLoadAnimation = false;
  showCheckList = false;
  showErrorCheckComisariato = false;
  showErrorSupplies = false;
  flight: PlannedFlightModel;
  flightSelected: PlannedFlightModel = null;
  isDisabled: boolean;
  checkCommissariat: CheckCommissariatModel;
  idCheckCommissariat: number;
  idFlight: string;
  idvuelo: string;
  estado: number;
  aeronave_matricula_fk: string;
  modeloaeronave: string;
  origenteorico_codiata: string;
  origenreal_codiata: string;
  destinoteorico_codiata: string;
  destinoreal_codiata: string;
  siglacompania: string;
  nombrecompania: string;
  rutateorica: string;
  rutareal: string;
  regladevuelo: string;
  tipodevuelo: string;
  diadespegue: string;
  fechadespegueestimado: Date;
  horadespegueestimado: string;;
  fechadespeguereal: string;
  horadespeguereal: string;
  fechaaterrizajeestimado: Date;
  horaaterrizajeestimado: string;
  fechaaterrizajereal: string;
  horaaterrizajereal: string;
  climadestino: string;
  gradostemperaturadestino: number;
  velocidadvientokm: string;
  ltscombustibleestimado: number;
  ltscombustiblereal: number;
  lubricanteestimado: number;
  lubricantereal: number;
  kilometrajeestimado: number;
  kilometrajereal: number;
  checkin: Boolean;
  controlcabina: Boolean;
  totalpersonasabordo: number;
  duracionestimada: string;
  duracionreal: string;
  insumosconsumidos: number;
  pesocargaorigen: number;
  pesocargadestino: number;
  motivoestado: string;
  aeronavesposibles: string[];

  insumos: InsumoVueloDTOModel[];
  id: number;
  idInsumo: number;
  vuelo: string;
  cantidadInicial: number;
  cantidadFinal: number;
  insumo: InsumoDTOModel;

  insumoInd: InsumoDTOModel;
  idinsumo: number;
  nombre: string;
  descripcion: string;
  peso: number;
  tipo: string;

  vegano: number = 0;
  vegetariano: number = 0;
  celiaco: number = 0;
  estandar: number = 0;
  sanitarios: number = 0;

  a1: boolean;
  a2: boolean;
  a3: boolean;
  a4: boolean;
  a5: boolean;
  showNotResultMessage = false;


  constructor(public suppliesService: SuppliesService, public checkFlightService: CheckFlightService, public checkCommissariatService: CheckCommissariatService) {
  }
  ngOnInit(): void {
    let date: string = "21-06-2022"
    //let date: string = new Date().getDate() + '-' + (new Date().getMonth()) + '-' + new Date().getFullYear();
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
    this.suppliesService.getSuppliesCatering(this.idvuelo).subscribe((response: InsumoVueloDTOModel[]) => {
      this.insumos = response;
      for (let insumo of this.insumos) {
        if (insumo.Supply.MenuType == 1) {
          this.vegano = this.vegano + insumo.InitialQuantity;
        }
        if (insumo.Supply.MenuType == 0) {
          this.vegetariano = this.vegetariano + insumo.InitialQuantity;
        }
        if (insumo.Supply.MenuType == 2) {
          this.celiaco = this.celiaco + insumo.InitialQuantity;
        }
        if (insumo.Supply.MenuType == 3) {
          this.estandar = this.estandar + insumo.InitialQuantity;
        }
      }



    }, (error) => {
      console.log('An unexpected error occured');
      this.showErrorSupplies = true;
      this.showErrorCheckComisariato = false;
      this.showCheckList = false;
    }, () => {
      this.suppliesService.getSuppliesSanitario(this.idvuelo).subscribe((response: InsumoVueloDTOModel[]) => {
        this.insumos = response;
        for (let insumo of this.insumos) {
          this.sanitarios = this.sanitarios + insumo.InitialQuantity;
        }
        this.showLoadAnimation = false;
      }),
        this.checkCommissariatService.getCheckCommissariat(this.idvuelo).subscribe(data => {
          this.checkCommissariat = data;
          this.idCheckCommissariat = data.idCheckCommissariat;
          this.idFlight = data.idFlight;
          this.a1 = data.a1;
          this.a2 = data.a2;
          this.a3 = data.a3;
          this.a4 = data.a4;
          this.a5 = data.a5;
          console.log(this.idCheckCommissariat);

        }, (error) => {
          if (this.vegano == 0 && this.vegetariano == 0 && this.celiaco == 0 && this.estandar == 0 && this.sanitarios == 0) {
            this.showCheckList = false;
            this.showErrorCheckComisariato = false;
            this.showErrorSupplies = true;
          } else {
            console.log('Complete');
            this.showCheckList = true;
            this.showErrorCheckComisariato = false;
            this.showErrorSupplies = false;
          }
        }, () => {
          if (this.vegano == 0 && this.vegetariano == 0 && this.celiaco == 0 && this.estandar == 0 && this.sanitarios == 0) {
            this.showCheckList = false;
            this.showErrorCheckComisariato = false;
            this.showErrorSupplies = true;
          } else {
            if (this.estado != 4 && this.estado != 5 && this.estado != 6 && this.estado != 7 && this.estado != 10) {
              this.showErrorCheckComisariato = false;
              this.showErrorSupplies = false;
              this.showCheckList = true;
              console.log(this.estado);
            } else {
              this.showErrorCheckComisariato = false;
              this.showErrorSupplies = false;
              this.showCheckList = true;
              this.isDisabled = true;
              console.log(this.estado);
            }
          }
        });
    });

  }
  save() {
    this.checkCommissariat = new CheckCommissariatModel();
    this.checkCommissariat.idCheckCommissariat = this.idCheckCommissariat;
    this.checkCommissariat.idFlight = this.idvuelo;
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
    this.isDisabled = false;
    this.idCheckCommissariat = null;
    this.idFlight = null;
    this.a1 = null;
    this.a2 = null;
    this.a3 = null;
    this.a4 = null;
    this.a5 = null;
    this.vegano = 0;
    this.vegetariano = 0;
    this.celiaco = 0;
    this.estandar = 0;
    this.sanitarios = 0;
  }

}



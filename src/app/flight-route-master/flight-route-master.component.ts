import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AirportModel } from 'src/app/model/airport.model';
import { AircraftModel } from '../model/aircraft.model';
import { FlightRouteRequestModel } from '../model/flight.route.request.model';
import { ParametersModel } from '../model/parameters.model';
import { AircraftService } from '../services/aircraft.service';
import { AirportService } from '../services/airport.service';
import { FlightRouteMasterService } from '../services/flight.route.master.service';
import { ParametersService } from '../services/parameters.service';

@Component({
  selector: 'app-flight-route-master',
  templateUrl: './flight-route-master.component.html',
  styleUrls: ['./flight-route-master.component.css']
})
export class FlightRouteMasterComponent implements OnInit {
  destinations : AirportModel[];
  selectedDestinationToInclude = null;
  parametersModel: ParametersModel ;
  gananciaPorPersona;
  costoCombustible;
  costoLubricante;
  costoInsumos;
  promedioDePersonas;
  selectedDestinationToExclude = null;
  disabledExclude = false;
  disabledInclude = false;
  disabledAircraft = false;
  destinationsToInclude : AirportModel[] = [];
  destinationsToExclude : AirportModel[] = [];
  selectedAircraft = null;
  removeToInclude = null;
  removeToExclude = null;
  
  showLoadAnimation = false;
  aircraft = "";
  duration = null;  
  distance = null;
  day = "";
  showErrorPopup = false;
  showGeneratedRoute = false;
  showParameters = false;
  generatedRoute = "";
  aircrafts : AircraftModel[] = []; 



  constructor(public airportService : AirportService, public parametersService: ParametersService,public flightRouteMasterService : FlightRouteMasterService,public aircraftService : AircraftService) { }

  ngOnInit(): void {
    this.getAirports();
    this.getAircrafts();
    this.disableExclude();
    this.disableInclude();
    this.disableAircraft();
  }

  includeDestination() { 
    if(!this.destinationsToInclude.includes(this.selectedDestinationToInclude) && !this.destinationsToExclude.includes(this.selectedDestinationToInclude) && this.destinationsToInclude.length < 4){
      this.destinationsToInclude.push(this.selectedDestinationToInclude);
      if( this.destinationsToInclude.length >3){
        this.disabledInclude = true;
      }
    }
  }
  excludeDestination() { 
    if(!this.destinationsToExclude.includes(this.selectedDestinationToExclude) && !this.destinationsToInclude.includes(this.selectedDestinationToExclude)){
      this.destinationsToExclude.push(this.selectedDestinationToExclude);
    }
  }

  disableExclude() {
    if(this.selectedDestinationToExclude == null){
      this.disabledExclude = true;
    }else{
      this.disabledExclude = false;
    }
  }

  disableInclude() {
    if(this.selectedDestinationToInclude == null || this.destinationsToInclude.length >3){
      this.disabledInclude = true;
    }else{
      this.disabledInclude = false;
    }
  }

  disableAircraft() {
    if(this.selectedAircraft == null){
      this.disabledAircraft = true;
    }else{
      this.disabledAircraft = false;
    }
  }

  removeToIncludeList(){
    for(let destination of this.removeToInclude){      
      this.removeToList(this.destinationsToInclude, destination);
    }
    if(this.destinationsToInclude.length < 4){
      this.disabledInclude = false;
    }
  }

  removeToExcludeList(){
    for(let destination of this.removeToExclude){
      this.removeToList(this.destinationsToExclude, destination);
    }
  }

  removeToList(list:  AirportModel[], destination: AirportModel){
    const index = list.indexOf(destination, 0);
    if (index > -1) {
      list.splice(index, 1);
    }
  }

  generate(){
    if(this.destinationsToInclude.length > 1){   
      this.generatedRoute = "";
      this.generateRoute();      
    }else{
      this.showErrorPopup = true;
    }
  }

  getAirports(){
    this.airportService.getAirports().subscribe(data => {
      this.destinations = data;
    });
  }
  getAircrafts(){
    this.aircraftService.getAircrafts().subscribe(data => {
      this.aircrafts = data;
    });
    
  }

  generateRoute(){
    this.showLoadAnimation  = true;
    let request : FlightRouteRequestModel = new FlightRouteRequestModel();
    request.excludeDestinations = this.destinationsToExclude;
    request.includeDestinations = this.destinationsToInclude;
    request.aircraft = this.selectedAircraft;
    this.flightRouteMasterService.generateRoute(request).subscribe(data => {
      for (let i = 0; i < data.route.length; i++) { 
        this.generatedRoute += data.route[i].city +"("+ data.route[i].iata +")"
        if(i < data.route.length -1){
          this.generatedRoute += " - ";
        }
      }
      this.aircraft = data.aircraft.model;
      this.day = data.day;
      this.distance = data.distance;
      this.showLoadAnimation  = false; 
      this.showGeneratedRoute = true;
    });
  }

  parameters(){
    this.parametersService.getParameters().subscribe(data => {
      this.parametersModel = data;
      this.gananciaPorPersona = data.gananciaPorPersona;
      this.costoCombustible = data.costoLitroCombustible;
      this.costoLubricante = data.costoLitroLubricante;
      this.costoInsumos = data.costoInsumosPorPersona;   
      this.promedioDePersonas = data.promedioDePersonas;   
      this.showParameters = true;
    });
  }

  saveParameters(){
    this.parametersModel.gananciaPorPersona = this.gananciaPorPersona;
    this.parametersModel.costoLitroCombustible = this.costoCombustible;
    this.parametersModel.costoLitroLubricante = this.costoLubricante;
    this.parametersModel.costoInsumosPorPersona = this.costoInsumos;
    this.parametersModel.promedioDePersonas = this.promedioDePersonas;
    this.parametersService.saveParameters(this.parametersModel).subscribe(data => {
      this.gananciaPorPersona = data.gananciaPorPersona;
      this.costoCombustible = data.costoLitroCombustible;
      this.costoLubricante = data.costoLitroLubricante;
      this.costoInsumos = data.costoInsumosPorPersona;
      this.promedioDePersonas = data.promedioDePersonas;
      this.showParameters = false;
    });
  }


}

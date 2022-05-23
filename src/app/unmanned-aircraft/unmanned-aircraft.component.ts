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
  selector: 'app-unmanned-aircraft',
  templateUrl: './unmanned-aircraft.component.html',
  styleUrls: ['./unmanned-aircraft.component.css']
})
export class UnmannedAircraftComponent implements OnInit {

  destinations : AirportModel[];
  origins : AirportModel[];
  selectedDestinationToInclude : AirportModel = null;
  parametersModel: ParametersModel ;
  gananciaPorPersona;
  costoCombustible;
  costoLubricante;
  costoInsumos;
  promedioDePersonas;
  selectedDestinationToExclude = null;
  disabledExclude = false;
  disabledInclude = false;
  disabledGenerate = false;
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
    this.disabledGenerate = true;
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
    if(this.selectedDestinationToExclude != null && this.selectedDestinationToInclude != null){   
      this.generatedRoute = this.selectedDestinationToInclude.city+"("+ this.selectedDestinationToInclude.iata + ") - "+this.selectedDestinationToExclude.city +"("+this.selectedDestinationToExclude.iata+")";
      this.generateRoute();      
    }else{
      this.showErrorPopup = true;
    }
  }

  getAirports(){
    this.airportService.getAirports().subscribe(data => {
      this.origins = data;
    });
  }
  getAircrafts(){
    this.aircraftService.getAircrafts().subscribe(data => {
      this.aircrafts = data;
    });
    
  }

  generateRoute(){
    this.showLoadAnimation  = true;
    this.flightRouteMasterService.getUnmannedAircraft(this.selectedDestinationToInclude.iata, this.selectedDestinationToExclude.iata).subscribe(data => {
      this.distance = data.distance;
      this.aircraft = data.aircraftModel;
      this.showLoadAnimation  = false; 
      this.showGeneratedRoute = true;
    });
    
  }

  cargarDestinos(){
    this.selectedDestinationToExclude = null;
    if(this.selectedDestinationToInclude != null){      
      this.airportService.getAirportsNear(this.selectedDestinationToInclude.iata).subscribe(data => {
        if(data != null && data.length > 0){
          this.destinations = data;
          this.disabledInclude = false
        }else{
          this.disabledGenerate = true;
          this.disabledInclude = true;
        }
      });
    }else{
      this.disabledGenerate = true;
      this.disabledInclude = true;
    }
  }

  enableGenerate(){
    if(this.selectedDestinationToExclude != null && this.selectedDestinationToExclude != this.selectedDestinationToInclude){
      this.disabledGenerate = false;
    }else{
      this.disabledGenerate = true;
    }
  }
}

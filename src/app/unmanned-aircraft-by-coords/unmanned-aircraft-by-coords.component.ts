import { Component, OnInit } from '@angular/core';
import { AirportModel } from 'src/app/model/airport.model';
import { AircraftModel } from '../model/aircraft.model';
import { ParametersModel } from '../model/parameters.model';
import { UnmannedAircraftRequestModel } from '../model/unmanned.aircraft.resquest.model';
import { AircraftService } from '../services/aircraft.service';
import { AirportService } from '../services/airport.service';
import { FlightRouteMasterService } from '../services/flight.route.master.service';
import { ParametersService } from '../services/parameters.service';

@Component({
  selector: 'app-unmanned-aircraft-by-coords',
  templateUrl: './unmanned-aircraft-by-coords.component.html',
  styleUrls: ['./unmanned-aircraft-by-coords.component.css']
})
export class UnmannedAircraftByCoordsComponent implements OnInit {

  destinations : AirportModel[];
  origins : AirportModel[];
  selectedDestinationToInclude : AirportModel = null;
  parametersModel: ParametersModel ;
  origenLat;
  origenLon;
  destinoLat;
  destinoLon;
  origenLatError = false;
  origenLonError = false;
  destinoLatError = false;
  destinoLonError = false;
  selectedDestinationToExclude = null;
  showNoDestinationError = false;
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
    if(this.validarCoordenadas()){
      this.showLoadAnimation  = true;
      let request : UnmannedAircraftRequestModel = new UnmannedAircraftRequestModel();
      request.destinationLat = this.destinoLat;
      request.destinationLon = this.destinoLon;
      request.originLat = this.origenLat
      request.originLon = this.origenLon;
      this.flightRouteMasterService.getUnmannedAircraftByCords(request).subscribe(data => {
        this.distance = data.distance;
        this.aircraft = data.aircraftModel;
        this.showLoadAnimation  = false; 
        this.showGeneratedRoute = true;
      });
    }
  }

  cargarDestinos(){
    this.showNoDestinationError = false;
    this.selectedDestinationToExclude = null;
    if(this.selectedDestinationToInclude != null){      
      this.airportService.getAirportsNear(this.selectedDestinationToInclude.iata).subscribe(data => {
        if(data != null && data.length > 0){
          this.destinations = data;
          this.disabledInclude = false
        }else{
          this.showNoDestinationError = true;
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
    this.validarCoordenadas();
    if(this.origenLat != null && this.origenLon != null && this.destinoLat != null && this.destinoLon != null){
      this.disabledGenerate = false;
    }else{
      this.disabledGenerate = true;
    }
  }

  validarCoordenadas(){
    const rExp : RegExp = /^[-+]?([1-8]?\d(\.\d+)|90(\.0+)?)/;
    let ret = true;
    this.origenLatError = false;
    this.origenLonError = false;
    this.destinoLatError = false;
    this.destinoLonError = false;
    if(!(rExp.test(this.origenLat) && this.origenLat.length > 5 && this.origenLat.length < 9)){    
      ret = ret && false;
      this.origenLatError = true;
    }
    if(!(rExp.test(this.origenLon) && this.origenLon.length > 5 && this.origenLon.length < 9)){    
      ret = ret && false;
      this.origenLonError = true;
    }
    if(!(rExp.test(this.destinoLat) && this.destinoLat.length > 5 && this.destinoLat.length < 9)){    
      ret = ret && false;
      this.destinoLatError = true;
    }
    if(!(rExp.test(this.destinoLon) && this.destinoLon.length > 5 && this.destinoLon.length < 9)){    
      ret = ret && false;
      this.destinoLonError = true;
    }
    return ret;
  }
}
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AirportModel } from 'src/app/model/airport.model';
import { AircraftModel } from '../model/aircraft.model';
import { FlightRouteRequestModel } from '../model/flight.route.request.model';
import { AircraftService } from '../services/aircraft.service';
import { AirportService } from '../services/airport.service';
import { FlightRouteMasterService } from '../services/flight.route.master.service';

@Component({
  selector: 'app-flight-route-master',
  templateUrl: './flight-route-master.component.html',
  styleUrls: ['./flight-route-master.component.css']
})
export class FlightRouteMasterComponent implements OnInit {
  destinations : AirportModel[];
  selectedDestinationToInclude = null;
  selectedDestinationToExclude = null;
  disabledExclude = false;
  disabledInclude = false;
  disabledAircraft = false;
  destinationsToInclude : AirportModel[] = [];
  destinationsToExclude : AirportModel[] = [];
  selectedAircraft = null;
  removeToInclude = null;
  removeToExclude = null;
  aircraft = "";
  duration = null;  
  distance = null;
  day = "";
  showErrorPopup = false;
  showGeneratedRoute = false;
  generatedRoute = "";
  aircrafts : AircraftModel[] = []; 



  constructor(public airportService : AirportService, public flightRouteMasterService : FlightRouteMasterService,public aircraftService : AircraftService) { }

  ngOnInit(): void {
    this.getAirports();
    this.getAircrafts();
    this.disableExclude();
    this.disableInclude();
    this.disableAircraft();
  }

  includeDestination() { 
    if(!this.destinationsToInclude.includes(this.selectedDestinationToInclude) && !this.destinationsToExclude.includes(this.selectedDestinationToInclude)){
      this.destinationsToInclude.push(this.selectedDestinationToInclude);
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
    if(this.selectedDestinationToInclude == null){
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
      //this.generateRoute();
      for (let i = 0; i < this.destinationsToInclude.length; i++) { 
        this.generatedRoute += this.destinationsToInclude[i].city +"("+ this.destinationsToInclude[i].iata +")"
        if(i < this.destinationsToInclude.length -1){
          this.generatedRoute += " - ";
        }
      }
      this.showGeneratedRoute = true;
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
      this.duration = data.duration;
      this.aircraft = data.aircraft.code +"("+data.aircraft.model+")";
      this.day = data.day;
      this.distance = data.distance;
    });
  }
}

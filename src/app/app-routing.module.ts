import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightQueryComponent } from './flight-query/flight-query.component';
import { FlightRouteMasterComponent } from './flight-route-master/flight-route-master.component';
import { LoginComponent } from './login/login.component';
import { PassengerComponent } from './passenger/passenger.component';
import { CheckListFlightComponent } from './check-list-flight/check-list-flight.component';
import { CheckListCommissariatComponent } from './check-list-commissariat/check-list-commissariat.component';
import { BaggageInfoComponent } from './baggage-info/baggage-info.component';
import { HomeComponent } from './home/home.component';
import { UnmannedAircraftComponent } from './unmanned-aircraft/unmanned-aircraft.component';
import { UnmannedAircraftByCoordsComponent } from './unmanned-aircraft-by-coords/unmanned-aircraft-by-coords.component';
import { ReportsComponent } from './reports/reports.component';
import { View360Component } from './view360/view360.component';

const routes: Routes =[
  { path: 'flightRouteMaster', component: FlightRouteMasterComponent },
  { path: 'unmannedAircraft', component: UnmannedAircraftComponent },
  { path: 'unmannedAircraftByCords', component: UnmannedAircraftByCoordsComponent },
  { path: 'flightQuery', component: FlightQueryComponent },  
  { path: 'check-list-flight', component: CheckListFlightComponent },
  { path: 'check-list-commissariat', component: CheckListCommissariatComponent },
  {path: 'baggage-info', component: BaggageInfoComponent},
  { path: 'home', component: HomeComponent },
  { path: 'reports', component:  ReportsComponent },  
  { path: 'view360', component:  View360Component},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

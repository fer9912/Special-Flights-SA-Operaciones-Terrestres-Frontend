import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightQueryComponent } from './flight-query/flight-query.component';
import { FlightRouteMasterComponent } from './flight-route-master/flight-route-master.component';
import { LoginComponent } from './login/login.component';
import { PassengerComponent } from './passenger/passenger.component';
import { CheckListFlightComponent } from './check-list-flight/check-list-flight.component';
import { BaggageInfoComponent } from './baggage-info/baggage-info.component';
import { HomeComponent } from './home/home.component';

const routes: Routes =[
  { path: 'flightRouteMaster', component: FlightRouteMasterComponent },
  { path: 'flightQuery', component: FlightQueryComponent },  
  { path: 'check-list-vuelo', component: CheckListFlightComponent },
  {path: 'baggage-info', component: BaggageInfoComponent},
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightQueryComponent } from './flight-query/flight-query.component';
import { FlightRouteMasterComponent } from './flight-route-master/flight-route-master.component';
import { LoginComponent } from './login/login.component';
import { PassengerComponent } from './passenger/passenger.component';

const routes: Routes =[
  { path: 'passenger', component: PassengerComponent },  
  { path: 'login', component: LoginComponent },  
  { path: 'flightRouteMaster', component: FlightRouteMasterComponent },
  { path: 'flightQuery', component: FlightQueryComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

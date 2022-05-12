import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { CommonModule } from '@angular/common';  

import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { FlightRouteMasterComponent } from './flight-route-master/flight-route-master.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import { FlightQueryComponent } from './flight-query/flight-query.component';
import { CheckListFlightComponent } from './check-list-flight/check-list-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    LoginComponent,
    FlightRouteMasterComponent,
    FlightQueryComponent,
    CheckListFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTooltipModule,
    MatTableModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

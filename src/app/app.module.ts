import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { CheckListVueloComponent } from './check-list-vuelo/check-list-vuelo.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    LoginComponent,
    CheckListVueloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

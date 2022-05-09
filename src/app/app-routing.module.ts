import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PassengerComponent } from './passenger/passenger.component';
import { CheckListVueloComponent } from './check-list-vuelo/check-list-vuelo.component';

const routes: Routes =[
  { path: 'passenger', component: PassengerComponent },  
  { path: 'login', component: LoginComponent },
  { path: 'check-list-vuelo', component: CheckListVueloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

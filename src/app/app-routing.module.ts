import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassengerComponent } from './passenger/passenger.component';

const routes: Routes =[
  { path: 'passenger', component: PassengerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

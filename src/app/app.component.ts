import { Component, OnInit } from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';                  //api

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GROPS-FrontEnd';
  userLogged = false;
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  validateUser(){
    this.userLogged = true;
  }
  logOut(){
    this.userLogged = false;
  }
}
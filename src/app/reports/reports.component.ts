import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  showPasajeros = false;
  showAeronaves = false;
  showInsumos = false;
  showMantenimientos = false;
  showVuelos = false;
 
  constructor() { }

  ngOnInit(): void {
  }
  pasajeros(){
    this.showPasajeros = true;
    this.showAeronaves = false;
    this.showInsumos = false;
    this.showMantenimientos = false;
    this.showVuelos = false;
  }
  aeronaves(){
    this.showPasajeros = false;
    this.showAeronaves = true;
    this.showInsumos = false;
    this.showMantenimientos = false;
    this.showVuelos = false;
  }
  insumos(){
    this.showPasajeros = false;
    this.showAeronaves = false;
    this.showInsumos = true;
    this.showMantenimientos = false;
    this.showVuelos = false;
  }
  mantenimientos(){
    this.showPasajeros = false;
    this.showAeronaves = false;
    this.showInsumos = false;
    this.showMantenimientos = true;
    this.showVuelos = false;
  }
  vuelos(){
    this.showPasajeros = false;
    this.showAeronaves = false;
    this.showInsumos = false;
    this.showMantenimientos = false;
    this.showVuelos = true;
  }
}

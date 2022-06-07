import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view360',
  templateUrl: './view360.component.html',
  styleUrls: ['./view360.component.css']
})
export class View360Component implements OnInit {
  showGrops = false;
  showGlobal = false;


  constructor() { }

  ngOnInit(): void {
  }
  grops() {
    this.showGrops = true;
    this.showGlobal = false;
  }
  global() {
    this.showGrops = false;
    this.showGlobal = true;
  }
}

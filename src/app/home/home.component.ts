import { Component, OnInit } from '@angular/core';
import { RoleModel } from '../model/role.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  role: RoleModel;

  constructor() { }

  ngOnInit(): void {
    

  }

}

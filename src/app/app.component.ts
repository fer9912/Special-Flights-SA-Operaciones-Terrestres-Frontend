import { Component, OnInit } from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';                  //api
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GROPS-FrontEnd';
  userLogged = false;
  showErrorLogin = false;
  usuario;
  contra;
  constructor(private primengConfig: PrimeNGConfig, public userService: UserService) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  validateUser(){
    this.userService.validateUser(this.usuario, this.contra).subscribe(data => {
      if(data != null){
        this.userLogged = true;        
      }else{
        this.userLogged = false;
        this.showErrorLogin = true;
      }
    });
    
  }
  logOut(){
    this.userLogged = false;
  }
}
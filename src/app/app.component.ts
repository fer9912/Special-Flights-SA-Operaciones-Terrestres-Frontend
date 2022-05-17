import { Component, OnInit } from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';                  //api
import { UserService } from './services/user.service';
import {Router} from '@angular/router';

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
  constructor(private primengConfig: PrimeNGConfig, public userService: UserService, private router:Router) {}
  ngOnInit() {
    this.primengConfig.ripple = true;    
    this.router.navigate(['']);
  }
  validateUser(){
    this.userService.validateUser(this.usuario, this.contra).subscribe(data => {
      if(data != null){
        this.userLogged = true;           
        this.router.navigate(['home']);     
      }else{
        this.userLogged = false; 
        this.showErrorLogin = true;
      }
    });
    
  }
  logOut(){
    this.userLogged = false;
    this.router.navigate(['']);
  }
}
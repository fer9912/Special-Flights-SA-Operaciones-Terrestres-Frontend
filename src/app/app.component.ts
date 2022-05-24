import { Component, OnInit } from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';                  //api
import { UserService } from './services/user.service';
import {Router} from '@angular/router';
import * as CryptoJS from 'crypto-js';  
import { UserRequest } from './model/userRequest';

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
  plainText:string;  
  encryptText: string;  
  encPassword: string;  
  decPassword:string;  
  conversionEncryptOutput: string;  
  conversionDecryptOutput:string;  
  request: UserRequest;
  constructor(private primengConfig: PrimeNGConfig, public userService: UserService, private router:Router) {}
  ngOnInit() {
    this.primengConfig.ripple = true;    
    this.router.navigate(['']);
  }
  validateUser(){
    this.convertText();
    this.request = new UserRequest();
    this.request.user = this.usuario;
    this.request.password = this.conversionEncryptOutput.toString();
    this.userService.validateUser(this.request).subscribe(data => {
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

  convertText() {   
      this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.contra.trim(), 'grops2022');  
    }  
  
  }   
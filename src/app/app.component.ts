import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';                  //api
import { UserService } from './services/user.service';
import {Router} from '@angular/router';
import * as CryptoJS from 'crypto-js';  
import { UserRequest } from './model/userRequest';
import { UserModel } from './model/user.model';
import { RoleModel } from './model/role.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('xdd') xdd: ElementRef;
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
  userModel: UserModel;
  roleModel : RoleModel;
  constructor(private primengConfig: PrimeNGConfig, public userService: UserService, private router:Router) {}
  ngOnInit() {
    this.primengConfig.ripple = true;    
    this.router.navigate(['']);
  }
  validateUser(){
    this.convertText();
    this.request = new UserRequest();
    this.userModel = new UserModel();
    this.roleModel = new RoleModel();
    this.request.user = this.usuario;
    this.request.password = this.conversionEncryptOutput.toString();
    this.userService.validateUser(this.request).subscribe(data => {
      if(data != null){
        this.userLogged = true;    
        this.userModel = data;
        this.validateRol(this.userModel.user)       
        this.router.navigate(['home']);     
      }else{
        this.userLogged = false; 
        this.showErrorLogin = true;
      }
    });
    this.validateButton();
  }

  logOut(){
    this.usuario = null;
    this.contra = null;
    console.log(this.usuario +" "+ this.contra);
    this.userLogged = false;
    this.router.navigate(['']);
  }

  validateRol(user: string){
    this.userService.validateRole(user).subscribe(data => {
    
      this.roleModel = data;
      sessionStorage.setItem('role',JSON.stringify(this.roleModel))
    })

    this.roleModel = JSON.parse(sessionStorage.getItem('role'));

  }

  convertText() {   
      this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.contra.trim(), 'grops2022');  
    }  


  validateButton(){

    this.roleModel = JSON.parse(sessionStorage.getItem('role'));

    if(this.roleModel.baggage == false){
      console.log(this.roleModel);
      //document.getElementById("xdd").style.display= "none";
      const a = this.xdd.nativeElement;
      console.log(this.xdd);
    
    }
  }

}

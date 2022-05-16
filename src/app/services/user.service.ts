import { AircraftModel } from "src/app/model/aircraft.model";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserModel } from "../model/user.model";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};
@Injectable({
    providedIn: "root"
  })
export class UserService{ 
  url: string = 'http://localhost:8080/user';
   
    constructor(private http: HttpClient) {}

    validateUser(user:string, password:string): Observable<UserModel>{
        return this.http.get<UserModel>(this.url + '/validate?user=' + user + '&password='+password);
    }
}
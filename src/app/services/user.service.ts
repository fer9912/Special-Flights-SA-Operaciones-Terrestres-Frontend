import { AircraftModel } from "src/app/model/aircraft.model";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserModel } from "../model/user.model";
import { RoleModel } from "../model/role.model";
import { UserRequest } from "../model/userRequest";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};
@Injectable({
    providedIn: "root"
  })
export class UserService{ 
  url: string = 'https://grops-backend-dnj2km2huq-rj.a.run.app/user';
   
    constructor(private http: HttpClient) {}

    validateUser(request: UserRequest): Observable<UserModel>{
        return this.http.post<UserModel>(this.url + '/validate',request,httpOptions);
    }

    validateRole(user : string): Observable<RoleModel>{
      return this.http.get<RoleModel>(this.url + '/getRole?user=' + user);
  }

}
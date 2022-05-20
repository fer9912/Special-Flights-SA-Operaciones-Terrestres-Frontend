import { AircraftModel } from "src/app/model/aircraft.model";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ParametersModel } from "../model/parameters.model";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};
@Injectable({
    providedIn: "root"
  })
export class ParametersService{
  url: string = 'http://localhost:8080/parameters';
   
    constructor(private http: HttpClient) {}

    getParameters(): Observable<ParametersModel>{
        return this.http.get<ParametersModel>(this.url + '/get');
    }

    saveParameters(request: ParametersModel): Observable<ParametersModel>{
      return this.http.post<ParametersModel>(this.url + '/save',request, httpOptions);
  }
}
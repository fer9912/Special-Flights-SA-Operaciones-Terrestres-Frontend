import { AircraftModel } from "src/app/model/aircraft.model";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};
@Injectable({
    providedIn: "root"
  })
export class AircraftService{ 
  url: string = 'http://localhost:8080/aircraft';
   
    constructor(private http: HttpClient) {}

    getAircrafts(): Observable<AircraftModel[]>{
        return this.http.get<AircraftModel[]>(this.url + '/getAll');
    }
}
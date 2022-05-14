import { AirportModel } from "src/app/model/airport.model";
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
export class AirportService{ 
    url: string = 'http://localhost:8080/airport';
   
    constructor(private http: HttpClient) {}

    getAirports(): Observable<AirportModel[]>{
        return this.http.get<AirportModel[]>(this.url + '/getAll');
    }
}
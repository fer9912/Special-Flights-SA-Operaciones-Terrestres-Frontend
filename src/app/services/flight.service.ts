import { FlightModel } from "src/app/model/flight.model";
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
export class FlightService{ 
    url: string = 'http://localhost:8080/flight';
   
    constructor(private http: HttpClient) {}

    getFlight(code: string): Observable<FlightModel>{
        return this.http.get<FlightModel>(this.url + '/get?code=' + code);
    }


}
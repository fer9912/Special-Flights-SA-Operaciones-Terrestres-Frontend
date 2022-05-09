import { FlightModel } from "src/model/flight.model";
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
    url: string = 'https://grops-backend-dnj2km2huq-rj.a.run.app/flight';
   
    constructor(private http: HttpClient) {}

    getFlight(id: number): Observable<FlightModel>{
        return this.http.get<FlightModel>(this.url + '/get?id=' + id);
    }


}
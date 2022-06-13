import { FlightModel } from "src/app/model/flight.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: "root"
})
export class FlightService {
 url: string = 'https://grops-backend-dnj2km2huq-rj.a.run.app/flight';

  constructor(private http: HttpClient) { }

  getFlight(code: string): Observable<FlightModel> {
    return this.http.get<FlightModel>(this.url + '/get?code=' + code);
  }

  getAllFlights(): Observable<FlightModel[]> {
    return this.http.get<FlightModel[]>(this.url + '/getAll');
  }
}

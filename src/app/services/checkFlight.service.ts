import { CheckFlightModel } from "src/app/model/checkFlight.model";
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
export class CheckFlightService{

    url: string = 'http://localhost:8080/checkFlight';
   
    constructor(private http: HttpClient) {}

    getCheckFlight(code: string): Observable<CheckFlightModel>{
        return this.http.get<CheckFlightModel>(this.url + '/get?code=' + code);
    }

    saveCheckFlight(checkFlightModel: CheckFlightModel): Observable<CheckFlightModel>{
      return this.http.post<CheckFlightModel>(this.url + '/save',checkFlightModel, httpOptions);
  }

}
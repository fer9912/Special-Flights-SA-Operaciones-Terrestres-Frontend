import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FlightRouteRequestModel } from "../model/flight.route.request.model";
import { FlightRouteResponseModel } from "../model/flight.route.response.model";
import { UnmannedAircraftResponseModel } from "../model/unmanned.aircraft.response.model";
import { UnmannedAircraftRequestModel } from "../model/unmanned.aircraft.resquest.model";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};
@Injectable({
    providedIn: "root"
  })
export class FlightRouteMasterService{ 
    url: string = 'http://localhost:8080/flightRouteMaster';
   
    constructor(private http: HttpClient) {}

    generateRoute(request: FlightRouteRequestModel):Observable<FlightRouteResponseModel>{
        return this.http.post<FlightRouteResponseModel>(this.url + '/generateFlightRoute',request, httpOptions);
    }

    getUnmannedAircraft(origin:string ,destination:string):Observable<UnmannedAircraftResponseModel>{
      return this.http.get<UnmannedAircraftResponseModel>(this.url + '/getUnmannedAircraft?origin='+ origin+'&destination='+destination);
    }

    getUnmannedAircraftByCords(request: UnmannedAircraftRequestModel):Observable<UnmannedAircraftResponseModel>{
      return this.http.post<UnmannedAircraftResponseModel>(this.url + '/getUnmannedAircraftByCoords',request, httpOptions);
  }
}
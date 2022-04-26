import { PassengerModel } from "src/model/passenger.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
  })
export class PassengerService{ 
    url: string = 'https://grops-backend-dnj2km2huq-rj.a.run.app/passenger';
    constructor(private http: HttpClient) {}

    getPassenger(id: number): Observable<PassengerModel>{
        return this.http.get<PassengerModel>(this.url + '/get?id=' + id);
    }
}
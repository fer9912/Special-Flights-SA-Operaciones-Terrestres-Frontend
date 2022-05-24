
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SuppliesModel } from "../model/supplies.model";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};
@Injectable({
    providedIn: "root"
  })
export class SuppliesService{

    url: string = 'https://grops-backend-dnj2km2huq-rj.a.run.app/supplies';
   
    constructor(private http: HttpClient) {}

    getSupplies(code: string): Observable<SuppliesModel>{
        return this.http.get<SuppliesModel>(this.url + '/get?code=' + code);
    }



}
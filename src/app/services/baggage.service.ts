import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaggageModel } from "../model/baggage.model";
import { BaggageRequest } from "../model/baggage.request.model";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};
@Injectable({
    providedIn: "root"
  })
export class BaggageService{ 
    url: string = 'https://grops-backend-dnj2km2huq-rj.a.run.app/BaggageInfo';
   
    constructor(private http: HttpClient) {}

    getBaggage(request: BaggageRequest):Observable<BaggageModel[]>{
        return this.http.post<BaggageModel[]>(this.url + '/get',request, httpOptions);
    }
}

import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InsumoVueloDTOModel } from "../model/insumoVueloDTO.model";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};
@Injectable({
    providedIn: "root"
  })
export class SuppliesService{

    url: string = 'https://operaciones-mantenimiento.herokuapp.com/Insumo/Vuelo/allByVuelo/';
   
    constructor(private http: HttpClient) {}

    getSupplies(code: string): Observable<InsumoVueloDTOModel[]>{
        return this.http.get<InsumoVueloDTOModel[]>(this.url + code);
    }



}
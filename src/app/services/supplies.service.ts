
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InsumoVueloDTOModel } from "../model/insumoVueloDTO.model";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: "root"
})
export class SuppliesService {

  urlcatering: string = 'https://operaciones-mantenimiento.herokuapp.com/Insumo/Vuelo/allCateringByVuelo/';
  urlventa: string = 'https://operaciones-mantenimiento.herokuapp.com/Insumo/Vuelo/allVentaByVuelo/';
  urlsanitario: string = 'https://operaciones-mantenimiento.herokuapp.com/Insumo/Vuelo/allSanitarioByVuelo/';


  constructor(private http: HttpClient) { }

  getSuppliesCatering(code: string): Observable<InsumoVueloDTOModel[]> {
    return this.http.get<InsumoVueloDTOModel[]>(this.urlcatering + code);
  }
  getSuppliesVenta(code: string): Observable<InsumoVueloDTOModel[]> {
    return this.http.get<InsumoVueloDTOModel[]>(this.urlventa + code);
  }
  getSuppliesSanitario(code: string): Observable<InsumoVueloDTOModel[]> {
    return this.http.get<InsumoVueloDTOModel[]>(this.urlsanitario + code);
  }



}
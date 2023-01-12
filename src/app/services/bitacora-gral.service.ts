import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CargarBitacoraGral } from '../models/bitacorasVuelo/bitacoraGral.models';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class BitacoraGralService {

  constructor(private http:HttpClient) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers(){
    return{
      headers:{
        'x-token':this.token
      }
    }

  }

  cargarBitGral(desde:number=0){
    const url=`${base_url}/bitacora/bitacoraGral?desde=${desde}`;
    return this.http.get<CargarBitacoraGral>(url,this.headers);
  }

}

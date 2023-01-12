import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { CargarOpVuelo } from '../interfaces/cargar-opVuelo.interfaces';
import { OperadorVuelos, OperadorVuelosForm } from '../models/operadorVuelo.models';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class OperadorVuelosService {

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

  cargarOperadores(desde:number=0){
    const url=`${base_url}/opVuelo?desde=${desde}`;
    return this.http.get<CargarOpVuelo>(url,this.headers);
  }

  crearOperadorVuelo(formData:OperadorVuelosForm){
    return this.http.post(`${base_url}/opVuelo/crearOpVuelo`,formData)
  }

  actualizarOperadorVuelo(uid:string,precio :OperadorVuelos) {
    const url = `${ base_url }/opVuelo/actualizarOpVuelo/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarOperadorVuelo(uid:string) {
    const url = `${ base_url }/opVuelo/eliminarOpVuelo/${uid}`;
    return this.http.delete( url,this.headers );        
  }


}

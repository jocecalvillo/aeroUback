import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {CargarPrecioSegurida, PrecioSeguridad, PrecioSeguridaForm } from '../../models/precios/precioSeguridad.models';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosSeguridadHistService {

  constructor(private http:HttpClient,private router:Router,private ngZone:NgZone) { }
  
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


  cargarPrecios(desde:number=0) {

    const url = `${ base_url }/precio/seguridadHist?desde=${desde}`;
    return this.http.get<CargarPrecioSegurida>( url, this.headers );        
  }

  crearPrecio(formData:PrecioSeguridaForm){
    return this.http.post(`${base_url}/precio/seguridadHist`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioSeguridad) {
    const url = `${ base_url }/precio/seguridadHist/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/seguridadHist/${uid}`;
    return this.http.delete( url,this.headers );        
  }

}
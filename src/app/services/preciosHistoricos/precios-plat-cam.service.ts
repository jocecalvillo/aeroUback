import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CargarPrecioPlataformaCam, PrecioPlataformaCam, PrecioPlataformaCamForm } from 'src/app/models/precios/precioPlataformaCam.models';

import { environment } from 'src/environments/environment';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosPlatCamHistService {

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

    const url = `${ base_url }/precio/plataformaCamHist?desde=${desde}`;
    return this.http.get<CargarPrecioPlataformaCam>( url, this.headers );        
  }

  crearPrecio(formData:PrecioPlataformaCamForm){
    return this.http.post(`${base_url}/precio/plataformaCamHist`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioPlataformaCam) {
    const url = `${ base_url }/precio/plataformaCamHist/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/plataformaCamHist/${uid}`;
    return this.http.delete( url,this.headers );        
  }
  
}

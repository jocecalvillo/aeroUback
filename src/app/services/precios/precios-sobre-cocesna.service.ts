import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CargarPrecioSobreCocesna, PrecioSobreCocesna, PrecioSobreCocesnaForm } from 'src/app/models/precios/precioSobreCocesna.models';
import { environment } from 'src/environments/environment';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosSobreCocesnaService {

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

    const url = `${ base_url }/precio/sobreCocesna?desde=${desde}`;
    return this.http.get<CargarPrecioSobreCocesna>( url, this.headers );        
  }


  crearPrecio(formData:PrecioSobreCocesnaForm){
    return this.http.post(`${base_url}/precio/sobreCocesna`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioSobreCocesna) {
    const url = `${ base_url }/precio/sobreCocesna/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/sobreCocesna/${uid}`;
    return this.http.delete( url,this.headers );        
  }

}

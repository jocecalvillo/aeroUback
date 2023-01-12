import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CargarPrecioCatering, PrecioCatering, PrecioCateringForm } from '../../models/precios/precioCatering.models';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosCateringService {

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

    const url = `${ base_url }/precio/catering?desde=${desde}`;
    return this.http.get<CargarPrecioCatering>( url, this.headers );        
  }

  crearPrecio(formData:PrecioCateringForm){
    return this.http.post(`${base_url}/precio/catering`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioCatering) {
    const url = `${ base_url }/precio/catering/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/catering/${uid}`;
    return this.http.delete( url,this.headers );        
  }


}

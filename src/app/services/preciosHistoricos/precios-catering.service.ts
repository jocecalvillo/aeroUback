import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CargarPrecioCarringHist, PrecioCateringHistForm } from 'src/app/models/preciosHistoricos/precioCatering.models';
import { environment } from 'src/environments/environment';
import { PrecioCateringHist } from '../../models/preciosHistoricos/precioCatering.models';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosCateringHistService {

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

    const url = `${ base_url }/precio/cateringHist?desde=${desde}`;
    return this.http.get<CargarPrecioCarringHist>( url, this.headers );        
  }

  crearPrecio(formData:PrecioCateringHistForm){
    return this.http.post(`${base_url}/precio/cateringHist`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioCateringHist) {
    const url = `${ base_url }/precio/cateringHist/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/cateringHist/${uid}`;
    return this.http.delete( url,this.headers );        
  }


}

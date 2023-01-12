import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CargarPrecioCalculoSeneam, PrecioCalculoSeneam, PrecioCalculoSeneamForm } from 'src/app/models/precios/precioCalculoSeneam.models';
import { environment } from 'src/environments/environment';
import { CargarPrecioCalculoSeneamHist, PrecioCalculoSeneamHistForm, PrecioCalculoSeneamHist } from '../../models/preciosHistoricos/precioCalculoSeneam.models';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosCalculoSeneamHistService {

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

    const url = `${ base_url }/precio/calculoSeneamHist?desde=${desde}`;
    return this.http.get<CargarPrecioCalculoSeneamHist>( url, this.headers );        
  }


  crearPrecio(formData:PrecioCalculoSeneamHistForm){
    return this.http.post(`${base_url}/precio/calculoSeneamHist`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioCalculoSeneamHist) {
    const url = `${ base_url }/precio/calculoSeneamHist/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/calculoSeneamHist/${uid}`;
    return this.http.delete( url,this.headers );        
  }

}

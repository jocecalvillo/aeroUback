import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CargarPrecioSobreCocesna, PrecioSobreCocesna, PrecioSobreCocesnaForm } from 'src/app/models/precios/precioSobreCocesna.models';
import { environment } from 'src/environments/environment';
import { CargarPrecioSobreCocesnaHist, PrecioSobreCocesnaHistForm, PrecioSobreCocesnaHist } from '../../models/preciosHistoricos/precioSobreCocesnaH.models';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosSobreCocesnaHistService {

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

    const url = `${ base_url }/precio/sobreCocesnaHist?desde=${desde}`;
    return this.http.get<CargarPrecioSobreCocesnaHist>( url, this.headers );        
  }


  crearPrecio(formData:PrecioSobreCocesnaHistForm){
    return this.http.post(`${base_url}/precio/sobreCocesnaHist`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioSobreCocesnaHist) {
    const url = `${ base_url }/precio/sobreCocesnaHist/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/sobreCocesnaHist/${uid}`;
    return this.http.delete( url,this.headers );        
  }

}

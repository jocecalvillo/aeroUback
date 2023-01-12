import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CargarPrecioHotelTripulacion, PrecioHotelTripulacion, PrecioHotelTripulacionForm } from '../../models/precios/precioHotelTripulacion.models';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosHotelTripulacionSeHistrvice {

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

    const url = `${ base_url }/precio/hotelTripulacionHist?desde=${desde}`;
    return this.http.get<CargarPrecioHotelTripulacion>( url, this.headers );        
  
  }


  crearPrecio(formData:PrecioHotelTripulacionForm){
    return this.http.post(`${base_url}/precio/hotelTripulacionHist`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioHotelTripulacion) {
    const url = `${ base_url }/precio/hotelTripulacionHist/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/hotelTripulacionHist/${uid}`;
    return this.http.delete( url,this.headers );        
  }

}

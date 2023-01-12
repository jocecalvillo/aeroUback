import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CargarPrecioRentaEquipoRampa, PrecioRentaEquipoRampa, PrecioRentaEquipoRampaForm } from '../../models/precios/precioRentaEquipoRampa.models';

const base_url=environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class PreciosEquipoRampaService {

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
    const url = `${ base_url }/precio/rentaEquipo?desde=${desde}`;
    return this.http.get<CargarPrecioRentaEquipoRampa>( url, this.headers );        
  }

  crearPrecio(formData:PrecioRentaEquipoRampaForm){
    return this.http.post(`${base_url}/precio/rentaEquipo`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioRentaEquipoRampa) {
    const url = `${ base_url }/precio/rentaEquipo/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/rentaEquipo/${uid}`;
    return this.http.delete( url,this.headers );        
  }


}

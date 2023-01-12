import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {CargarPrecioRentaAlmacen, PrecioRentaAlmacen, PrecioRentaAlmacenForm} from 'src/app/models/precios/precioRentaAlmacen.models'

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosRentaAlmacenHistService {

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

    const url = `${ base_url }/precio/rentaAlmacenHist?desde=${desde}`;
    return this.http.get<CargarPrecioRentaAlmacen>( url, this.headers );        
  }

  crearPrecio(formData:PrecioRentaAlmacenForm){
    return this.http.post(`${base_url}/precio/rentaAlmacenHist`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioRentaAlmacen) {
    const url = `${ base_url }/precio/rentaAlmacenHist/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/rentaAlmacenHist/${uid}`;
    return this.http.delete( url,this.headers );        
  }

}

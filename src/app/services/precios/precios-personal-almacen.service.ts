import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CargarPrecioPersonalAlamacen, PrecioPersonalAlamacenForm, PrecioPersonalAlamacen } from 'src/app/models/precios/precioPersonalAlmacen.models';
import { environment } from 'src/environments/environment';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosPersonalAlmacenService {

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

    const url = `${ base_url }/precio/personalAlmacen?desde=${desde}`;
    return this.http.get<CargarPrecioPersonalAlamacen>( url, this.headers );        
  }


  crearPrecio(formData:PrecioPersonalAlamacenForm){
    return this.http.post(`${base_url}/precio/personalAlmacen`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioPersonalAlamacen) {
    const url = `${ base_url }/precio/personalAlmacen/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/personalAlmacen/${uid}`;
    return this.http.delete( url,this.headers );        
  }
}

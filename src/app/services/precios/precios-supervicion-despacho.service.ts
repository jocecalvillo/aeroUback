import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CargarPrecioSupervicionDespacho, PrecioSupervicionDespacho, PrecioSupervicionDespachoForm } from 'src/app/models/precios/precioSupervicionDespacho.models';
import { environment } from 'src/environments/environment';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosSupervicionDespachoService {

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

    const url = `${ base_url }/precio/supervicionDespacho?desde=${desde}`;
    return this.http.get<CargarPrecioSupervicionDespacho>( url, this.headers );        
  }

  crearPrecio(formData:PrecioSupervicionDespachoForm){
    return this.http.post(`${base_url}/precio/supervicionDespacho`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioSupervicionDespacho) {
    const url = `${ base_url }/precio/supervicionDespacho/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/supervicionDespacho/${uid}`;
    return this.http.delete( url,this.headers );        
  }

}

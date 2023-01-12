import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CargarPrecioMantenimiento, PrecioMantenimiento, PrecioMantenimientoForm } from '../../models/precios/precioMantenimiento.models';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosMantenimientoHistService {

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
    const url = `${ base_url }/precio/mantenimientoHist?desde=${desde}`;
    return this.http.get<CargarPrecioMantenimiento>( url, this.headers );        
  }

  crearPrecios(formData:PrecioMantenimientoForm){
    return this.http.post(`${base_url}/precio/mantenimientoHist`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioMantenimiento) {
    const url = `${ base_url }/precio/mantenimientoHist/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/mantenimientoHist/${uid}`;
    return this.http.delete( url,this.headers );        
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CargaPrecioPlataforma, PrecioPlataforma, PrecioPlataformaForm } from '../../models/precios/precioPlataforma.model';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosPlataformaService {

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

    const url = `${ base_url }/precio/plataforma?desde=${desde}`;
    return this.http.get<CargaPrecioPlataforma>( url, this.headers );        
  }

  crearPrecio(formData:PrecioPlataformaForm){
    return this.http.post(`${base_url}/precio/plataforma`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioPlataforma) {
    const url = `${ base_url }/precio/plataforma/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/plataforma/${uid}`;
    return this.http.delete( url,this.headers );        
  }





}
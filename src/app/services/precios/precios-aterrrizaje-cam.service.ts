import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LLaveRandom } from 'src/app/models/llave.models';
import { CargarPrecioAterrizajeCam, PrecioAterrizajeCam, PrecioAterrizajeCamForm } from 'src/app/models/precios/precioAterrizajeCam.models';
import { environment } from 'src/environments/environment';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosAterrrizajeCamService {

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
    const url = `${ base_url }/precio/aterrizajeCam?desde=${desde}`;
    return this.http.get<CargarPrecioAterrizajeCam>( url, this.headers );        
  }

  crearAterrizaje(formData:PrecioAterrizajeCamForm){
    return this.http.post(`${base_url}/precio/aterrizajeCam`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioAterrizajeCam) {
    const url = `${ base_url }/precio/aterrizajeCam/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/aterrizajeCam/${uid}`;
    return this.http.delete( url,this.headers );        
  }

  generarId(){
    const url= `${ base_url }/random/generarCodigo`;
    return this.http.get<LLaveRandom>(url);
  }

}

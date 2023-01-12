import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CargarPrecioViaticos, PrecioViaticos, PrecioViaticosForm } from '../../models/precios/precioViaticos.moles';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosViaticosService {

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

    const url = `${ base_url }/precio/viaticos?desde=${desde}`;
    return this.http.get<CargarPrecioViaticos>( url, this.headers );        
  }


  crearPrecio(formData:PrecioViaticosForm){
    return this.http.post(`${base_url}/precio/viaticos`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioViaticos) {
    const url = `${ base_url }/precio/viaticos/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/viaticos/${uid}`;
    return this.http.delete( url,this.headers );        
  }
}


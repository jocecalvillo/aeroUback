import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';
import { PrecioAterrizajeMexHistForm, CargaPrecioAterrizajeMexHist, PrecioAterrizajeMexHist } from '../../models/preciosHistoricos/precioAterrizajeMex.models';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosAterrizajeMexHistService {

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

    const url = `${ base_url }/precio/aterrizajeMexHist?desde=${desde}`;
    return this.http.get<CargaPrecioAterrizajeMexHist>( url, this.headers );        
  }


crearPrecios(precio :PrecioAterrizajeMexHistForm) {
    const url = `${ base_url }/precio/aterrizajeMexHist`;
    return this.http.post( url,precio,this.headers );        
  }

  actualizarPrecios(uid:string,precio :PrecioAterrizajeMexHist) {

    const url = `${ base_url }/precio/aterrizajeMexHist/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {

    const url = `${ base_url }/precio/aterrizajeMexHist/${uid}`;
    return this.http.delete( url,this.headers );        
  }

}

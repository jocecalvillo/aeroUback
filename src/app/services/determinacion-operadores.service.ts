import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CargaDetOperadores } from '../interfaces/cargar-detOperadores.interfaces';
import { CargaDeterOperadores, DeterminacionOperadores, DeterminacionOperadoresForm } from '../models/deterOperadores.models';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class DeterminacionOperadoresService {

  constructor(private http:HttpClient) { }

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

  cargarDetOperadores(desde:number=0){
    const url=`${base_url}/detOperador/obtenerOperadores?desde=${desde}`;
    return this.http.get<CargaDeterOperadores>(url,this.headers);
  }

  crearOperador(formData:DeterminacionOperadoresForm){
    return this.http.post(`${base_url}/detOperador/crearOperadores`,formData)
  }

  actualizarOperador(uid:string,precio :DeterminacionOperadores) {
    const url = `${ base_url }/detOperador/actualizarOperadores/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarOperador(uid:string) {
    const url = `${ base_url }/detOperador/eliminarOperadores/${uid}`;
    return this.http.delete( url,this.headers );        
  }

}

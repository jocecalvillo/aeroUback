import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CargarPrecioMigracionCam, PrecioMigracionCam, PrecioMigracionCamForm } from 'src/app/models/precios/preciosMigracionCam.models';
import { environment } from 'src/environments/environment';
import { CargarPrecioMigracionCamHist, PrecioMigracionCamHistForm, PrecioMigracionCamHist } from '../../models/preciosHistoricos/preciosMigracionCamH.models';


const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosMigracionCamHistService {

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

    const url = `${ base_url }/precio/migracionCamHist?desde=${desde}`;
    return this.http.get<CargarPrecioMigracionCamHist>( url, this.headers );        
  }

  crearPrecio(formData:PrecioMigracionCamHistForm){
    return this.http.post(`${base_url}/precio/migracionCamHist`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioMigracionCamHist) {
    const url = `${ base_url }/precio/migracionCamHist/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/migracionCamHist/${uid}`;
    return this.http.delete( url,this.headers );        
  }

}

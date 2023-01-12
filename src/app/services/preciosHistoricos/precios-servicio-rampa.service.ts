import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CargarPrecioServicioRampa, PrecioServicioRampa, PrecioServicioRampaForm } from 'src/app/models/precios/precioServicioRampa.models';
import { environment } from 'src/environments/environment';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosServicioRampaHistService {

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

    const url = `${ base_url }/precio/servicioRampaHist?desde=${desde}`;
    return this.http.get<CargarPrecioServicioRampa>( url, this.headers );        
  }


  crearPrecio(formData:PrecioServicioRampaForm){
    return this.http.post(`${base_url}/precio/servicioRampaHist`,formData)
  }

  actualizarPrecios(uid:string,precio :PrecioServicioRampa) {
    const url = `${ base_url }/precio/servicioRampaHist/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {
    const url = `${ base_url }/precio/servicioRampaHist/${uid}`;
    return this.http.delete( url,this.headers );        
  }
}

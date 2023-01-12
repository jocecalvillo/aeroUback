import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CargarSumaryXa } from 'src/app/models/vitacoras/vitacorasXa';
import { environment } from 'src/environments/environment';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class SummaryMatriculasService {

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

  cargarEfr(desde:number=0) {

    const url = `${ base_url }/sumaryMatricula/xaEfr?desde=${desde}`;
    return this.http.get<CargarSumaryXa>( url, this.headers );        
  }

  cargarLfr(desde:number=0) {

    const url = `${ base_url }/sumaryMatricula/xaLfr?desde=${desde}`;
    return this.http.get<CargarSumaryXa>( url, this.headers );        
  }

  cargarGgl(desde:number=0) {

    const url = `${ base_url }/sumaryMatricula/xaGgl?desde=${desde}`;
    return this.http.get<CargarSumaryXa>( url, this.headers );        
  }

  cargarLrc(desde:number=0) {

    const url = `${ base_url }/sumaryMatricula/xaLrc?desde=${desde}`;
    return this.http.get<CargarSumaryXa>( url, this.headers );        
  }

  cargarUyr(desde:number=0) {

    const url = `${ base_url }/sumaryMatricula/xaUyr?desde=${desde}`;
    return this.http.get<CargarSumaryXa>( url, this.headers );        
  }

}

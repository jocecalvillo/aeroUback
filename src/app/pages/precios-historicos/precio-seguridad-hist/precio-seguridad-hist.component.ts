import { Component, OnInit } from '@angular/core';
import { PreciosSeguridadHistService } from 'src/app/services/preciosHistoricos/precios-seguridad.service';
import { PrecioSeguridadHist } from '../../../models/preciosHistoricos/precioSeguridad.models';

@Component({
  selector: 'app-precio-seguridad-hist',
  templateUrl: './precio-seguridad-hist.component.html',
  styles: [
  ]
})
export class PrecioSeguridadHistComponent implements OnInit {

  public totalPrecios: number=0;
  public precioSeguridad:PrecioSeguridadHist[]=[];
  public precioSeguridadTemp:PrecioSeguridadHist[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private seguridadServices:PreciosSeguridadHistService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.seguridadServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioSeguridad=precios;
        this.precioSeguridadTemp=precios;
        this.cargando=false;
      }
    )

  }

  cambiarPagina(valor:number){

    this.desde+=valor;

    if(this.desde<0){
      this.desde=0;
    }else if(this.desde>=this.totalPrecios){
      this.desde-=valor;
    }
    this.cargarDatos();
  }


}

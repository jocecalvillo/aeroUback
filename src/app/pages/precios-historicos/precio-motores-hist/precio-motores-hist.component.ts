import { Component, OnInit } from '@angular/core';
import { PreciosMotoresHistService } from 'src/app/services/preciosHistoricos/precios-motores.service';
import { PrecioMotoresHist } from '../../../models/preciosHistoricos/precioMotores.models';

@Component({
  selector: 'app-precio-motores-hist',
  templateUrl: './precio-motores-hist.component.html',
  styles: [
  ]
})
export class PrecioMotoresHistComponent implements OnInit {

  public totalPrecios: number=0;
  public precioMotores:PrecioMotoresHist[]=[];
  public precioMotoresTemp:PrecioMotoresHist[]=[];

  public desde: number = 0;
  public cargando: boolean = true;


  constructor(private motoresServices:PreciosMotoresHistService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.motoresServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioMotores=precios;
        this.precioMotoresTemp=precios;
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

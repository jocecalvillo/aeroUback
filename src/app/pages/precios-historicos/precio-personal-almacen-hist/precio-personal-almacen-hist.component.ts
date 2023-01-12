import { Component, OnInit } from '@angular/core';
import { PreciosPersonalAlmacenHistService } from 'src/app/services/preciosHistoricos/precios-personal-almacen.service';
import { PrecioPersonalAlamacenHist } from '../../../models/preciosHistoricos/precioPersonalAlmacen.models';

@Component({
  selector: 'app-precio-personal-almacen-hist',
  templateUrl: './precio-personal-almacen-hist.component.html',
  styles: [
  ]
})
export class PrecioPersonalAlmacenHistComponent implements OnInit {

  public totalPrecios: number=0;
  public precioPersonal:PrecioPersonalAlamacenHist[]=[];
  public precioPersonalTemp:PrecioPersonalAlamacenHist[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private personalServices:PreciosPersonalAlmacenHistService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.personalServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioPersonal=precios;
        this.precioPersonalTemp=precios;
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

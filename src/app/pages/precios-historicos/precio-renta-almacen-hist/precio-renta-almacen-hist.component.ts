import { Component, OnInit } from '@angular/core';
import { PreciosRentaAlmacenHistService } from 'src/app/services/preciosHistoricos/precios-renta-almacen.service';
import { PrecioRentaAlmacenesHist } from '../../../models/preciosHistoricos/precioRentaAlmacenes.models';

@Component({
  selector: 'app-precio-renta-almacen-hist',
  templateUrl: './precio-renta-almacen-hist.component.html',
  styles: [
  ]
})
export class PrecioRentaAlmacenHistComponent implements OnInit {

  public totalPrecios: number=0;
  public precioAlamacen:PrecioRentaAlmacenesHist[]=[];
  public precioAlmacenTemp:PrecioRentaAlmacenesHist[]=[];

  public desde: number = 0;
  public cargando: boolean = true;
  
  constructor(private almacenServices:PreciosRentaAlmacenHistService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.almacenServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioAlamacen=precios;
        this.precioAlmacenTemp=precios;
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

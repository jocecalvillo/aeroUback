import { Component, OnInit } from '@angular/core';
import { PreciosMantenimientoHistService } from 'src/app/services/preciosHistoricos/precios-mantenimiento.service';
import { PrecioMantenimientoHist } from '../../../models/preciosHistoricos/precioMantenimiento.models';

@Component({
  selector: 'app-precio-mantenimiento-hist',
  templateUrl: './precio-mantenimiento-hist.component.html',
  styles: [
  ]
})
export class PrecioMantenimientoHistComponent implements OnInit {

  public totalPrecios: number=0;
  public precioMantenimiento:PrecioMantenimientoHist[]=[];
  public precioMantenimientoTemp:PrecioMantenimientoHist[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private mantenimientoServices:PreciosMantenimientoHistService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.mantenimientoServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioMantenimiento=precios;
        this.precioMantenimientoTemp=precios;
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

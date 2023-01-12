import { Component, OnInit } from '@angular/core';
import { PreciosMigracionCamHistService } from 'src/app/services/preciosHistoricos/precios-migracion-cam.service';
import { PrecioMigracionCamHist } from '../../../models/preciosHistoricos/preciosMigracionCamH.models';

@Component({
  selector: 'app-precio-migracion-cam-hist',
  templateUrl: './precio-migracion-cam-hist.component.html',
  styles: [
  ]
})
export class PrecioMigracionCamHistComponent implements OnInit {

  public totalPrecios: number=0;
  public precioMigracion:PrecioMigracionCamHist[]=[];
  public precioMigracionTemp:PrecioMigracionCamHist[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private migracionServices:PreciosMigracionCamHistService) { }
  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.migracionServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioMigracion=precios;
        this.precioMigracionTemp=precios;
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

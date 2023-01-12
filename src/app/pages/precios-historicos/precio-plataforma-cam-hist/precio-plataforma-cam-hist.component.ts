import { Component, OnInit } from '@angular/core';
import { PreciosPlatCamHistService } from 'src/app/services/preciosHistoricos/precios-plat-cam.service';
import { PrecioPlataformaCamHist } from '../../../models/preciosHistoricos/precioPlataformaCam.models';

@Component({
  selector: 'app-precio-plataforma-cam-hist',
  templateUrl: './precio-plataforma-cam-hist.component.html',
  styles: [
  ]
})
export class PrecioPlataformaCamHistComponent implements OnInit {

  public totalPrecios: number=0;
  public preciosPlataformaCam:PrecioPlataformaCamHist[]=[];
  public preciosPlataformaCamTemp:PrecioPlataformaCamHist[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private plataformaCamServices:PreciosPlatCamHistService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.plataformaCamServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        this.totalPrecios=total;
        this.preciosPlataformaCam=precios;
        this.preciosPlataformaCamTemp=precios;
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

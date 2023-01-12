import { Component, OnInit } from '@angular/core';
import { PreciosSupervicionDespachoCamHistService } from 'src/app/services/preciosHistoricos/precios-supervicion-despacho-cam.service';
import { PrecioSupervicionDespachoCamHist } from '../../../models/preciosHistoricos/precioSupervicionDespachoCam.models';

@Component({
  selector: 'app-precio-supervicion-despacho-cam-hist',
  templateUrl: './precio-supervicion-despacho-cam-hist.component.html',
  styles: [
  ]
})
export class PrecioSupervicionDespachoCamHistComponent implements OnInit {

  public totalPrecios: number=0;
  public precioSupervicion:PrecioSupervicionDespachoCamHist[]=[];
  public precioSupervicionTemp:PrecioSupervicionDespachoCamHist[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private superCam :PreciosSupervicionDespachoCamHistService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.superCam.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioSupervicion=precios;
        this.precioSupervicionTemp=precios;
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

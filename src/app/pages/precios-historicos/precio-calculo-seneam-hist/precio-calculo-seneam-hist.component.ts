import { Component, OnInit } from '@angular/core';
import { PreciosCalculoSeneamHistService } from 'src/app/services/preciosHistoricos/precios-calculo-seneam.service';
import { PrecioCalculoSeneamHist } from '../../../models/preciosHistoricos/precioCalculoSeneam.models';

@Component({
  selector: 'app-precio-calculo-seneam-hist',
  templateUrl: './precio-calculo-seneam-hist.component.html',
  styles: [
  ]
})
export class PrecioCalculoSeneamHistComponent implements OnInit {


  public totalPrecios: number=0;
  public preciosCalculo:PrecioCalculoSeneamHist[]=[];
  public preciosCalculoTemp:PrecioCalculoSeneamHist[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private calculoServices:PreciosCalculoSeneamHistService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.calculoServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.preciosCalculo=precios;
        this.preciosCalculoTemp=precios;
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

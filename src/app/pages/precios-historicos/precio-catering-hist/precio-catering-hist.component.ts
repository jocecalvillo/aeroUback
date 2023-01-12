import { Component, OnInit } from '@angular/core';
import { PreciosCateringHistService } from 'src/app/services/preciosHistoricos/precios-catering.service';
import { PrecioCateringHist } from '../../../models/preciosHistoricos/precioCatering.models';

@Component({
  selector: 'app-precio-catering-hist',
  templateUrl: './precio-catering-hist.component.html',
  styles: [
  ]
})
export class PrecioCateringHistComponent implements OnInit {

  public totalPrecios: number=0;
  public precioCatering:PrecioCateringHist[]=[];
  public precioCateringTemp:PrecioCateringHist[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private cateringServices:PreciosCateringHistService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.cateringServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioCatering=precios;
        this.precioCateringTemp=precios;
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

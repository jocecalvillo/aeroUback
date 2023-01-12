import { Component, OnInit } from '@angular/core';
import { PreciosViaticosHistService } from 'src/app/services/preciosHistoricos/precios-viaticos.service';
import { PrecioViaticosHist } from '../../../models/preciosHistoricos/precioViaticosH.models';

@Component({
  selector: 'app-precio-viaticos-hist',
  templateUrl: './precio-viaticos-hist.component.html',
  styles: [
  ]
})
export class PrecioViaticosHistComponent implements OnInit {

  public totalPrecios: number=0;
  public precioViaticos:PrecioViaticosHist[]=[];
  public precioViaticosTemp:PrecioViaticosHist[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private viaticosServices:PreciosViaticosHistService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.viaticosServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioViaticos=precios;
        this.precioViaticosTemp=precios;
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

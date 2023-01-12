import { Component, OnInit } from '@angular/core';
import { PreciosSobreCocesnaHistService } from 'src/app/services/preciosHistoricos/precios-sobre-cocesna.service';
import { PrecioSobreCocesnaHist } from '../../../models/preciosHistoricos/precioSobreCocesnaH.models';

@Component({
  selector: 'app-precio-sobre-cocesna-hist',
  templateUrl: './precio-sobre-cocesna-hist.component.html',
  styles: [
  ]
})
export class PrecioSobreCocesnaHistComponent implements OnInit {

  public totalPrecios: number=0;
  public precioSobre:PrecioSobreCocesnaHist[]=[];
  public precioSobreTemp:PrecioSobreCocesnaHist[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private sobreServices:PreciosSobreCocesnaHistService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.sobreServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioSobre=precios;
        this.precioSobreTemp=precios;
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

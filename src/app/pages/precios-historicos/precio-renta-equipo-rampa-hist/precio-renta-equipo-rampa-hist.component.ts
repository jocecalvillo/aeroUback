import { Component, OnInit } from '@angular/core';
import { PreciosEquipoRampaHistService } from 'src/app/services/preciosHistoricos/precios-equipo-rampa.service';
import { PrecioRentaEquipoRampaHist } from '../../../models/preciosHistoricos/precioRentaEquipoRampa.models';

@Component({
  selector: 'app-precio-renta-equipo-rampa-hist',
  templateUrl: './precio-renta-equipo-rampa-hist.component.html',
  styles: [
  ]
})
export class PrecioRentaEquipoRampaHistComponent implements OnInit {

  public totalPrecios: number=0;
  public preciosRentaEquipo:PrecioRentaEquipoRampaHist[]=[];
  public preciosRentaEquipoTemp:PrecioRentaEquipoRampaHist[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private equipoCamSerices: PreciosEquipoRampaHistService ) { }

   ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.equipoCamSerices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.preciosRentaEquipo=precios;
        this.preciosRentaEquipoTemp=precios;
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

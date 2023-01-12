import { Component, OnInit } from '@angular/core';
import { PreciosServicioRampaHistService } from 'src/app/services/preciosHistoricos/precios-servicio-rampa.service';
import { PrecioServicioRampaHist } from '../../../models/preciosHistoricos/precioServicioRampa.models';

@Component({
  selector: 'app-precio-servicio-rampa-hist',
  templateUrl: './precio-servicio-rampa-hist.component.html',
  styles: [
  ]
})
export class PrecioServicioRampaHistComponent implements OnInit {

  public totalPrecios: number=0;
  public precioSrampa:PrecioServicioRampaHist[]=[];
  public precioSrampaTemp:PrecioServicioRampaHist[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private srampaServices:PreciosServicioRampaHistService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.srampaServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioSrampa=precios;
        this.precioSrampaTemp=precios;
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

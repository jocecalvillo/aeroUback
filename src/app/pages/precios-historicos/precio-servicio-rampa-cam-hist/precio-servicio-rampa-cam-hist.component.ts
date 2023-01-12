import { Component, OnInit } from '@angular/core';
import { PreciosPersonalRampaHistService } from 'src/app/services/preciosHistoricos/precios-personal-rampa.service';
import { PrecioPersonalRampaHist } from '../../../models/preciosHistoricos/precioPersonalRampa.models';

@Component({
  selector: 'app-precio-servicio-rampa-cam-hist',
  templateUrl: './precio-servicio-rampa-cam-hist.component.html',
  styles: [
  ]
})
export class PrecioServicioRampaCamHistComponent implements OnInit {

  public totalPrecios: number=0;
  public precioRampa:PrecioPersonalRampaHist[]=[];
  public precioRampaTemp:PrecioPersonalRampaHist[]=[];

  public desde: number = 0;
  public cargando: boolean = true;


  constructor(private servicesRampa:PreciosPersonalRampaHistService) { }

ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.servicesRampa.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioRampa=precios;
        this.precioRampaTemp=precios;
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



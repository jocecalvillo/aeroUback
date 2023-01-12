import { Component, OnInit } from '@angular/core';
import { PrecioPersonalRampaHist } from 'src/app/models/preciosHistoricos/precioPersonalRampa.models';
import { PreciosPersonalRampaHistService } from 'src/app/services/preciosHistoricos/precios-personal-rampa.service';

@Component({
  selector: 'app-precio-personal-rampa-hist',
  templateUrl: './precio-personal-rampa-hist.component.html',
  styles: [
  ]
})
export class PrecioPersonalRampaHistComponent implements OnInit {

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

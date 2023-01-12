import { Component, OnInit } from '@angular/core';
import { PrecioPersonalRampa } from 'src/app/models/precios/precioPersonalRampa.models';
import { PreciosPersonalRampaService } from 'src/app/services/precios/precios-personal-rampa.service';

@Component({
  selector: 'app-precio-servicio-rampa-cam',
  templateUrl: './precio-servicio-rampa-cam.component.html',
  styles: [
  ]
})
export class PrecioServicioRampaCamComponent implements OnInit {

  
  public totalPrecios: number=0;
  public precioRampa:PrecioPersonalRampa[]=[];
  public precioRampaTemp:PrecioPersonalRampa[]=[];

  public desde: number = 0;
  public cargando: boolean = true;


  constructor(private servicesRampa:PreciosPersonalRampaService) { }

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

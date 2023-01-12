import { Component, OnInit } from '@angular/core';
import { PreciosHotelTripulacionSeHistrvice } from 'src/app/services/preciosHistoricos/precios-hotel-tripulacion.service';
import { PrecioHotelTripulacionHist } from '../../../models/preciosHistoricos/precioHotelTripulacion.models';

@Component({
  selector: 'app-precio-hotel-tripulacion-hist',
  templateUrl: './precio-hotel-tripulacion-hist.component.html',
  styles: [
  ]
})
export class PrecioHotelTripulacionHistComponent implements OnInit {

  public totalPrecios: number=0;
  public precioHotel:PrecioHotelTripulacionHist[]=[];
  public precioHotelTemp:PrecioHotelTripulacionHist[]=[];

  public desde: number = 0;
  public cargando: boolean = true;


  constructor(private hotelServices:PreciosHotelTripulacionSeHistrvice) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.hotelServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioHotel=precios;
        this.precioHotelTemp=precios;
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

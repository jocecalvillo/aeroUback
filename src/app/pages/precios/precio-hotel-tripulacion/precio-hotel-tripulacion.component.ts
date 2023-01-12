import { Component, OnInit } from '@angular/core';
import { PrecioHotelTripulacion } from 'src/app/models/precios/precioHotelTripulacion.models';
import { PreciosHotelTripulacionService } from 'src/app/services/precios/precios-hotel-tripulacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-precio-hotel-tripulacion',
  templateUrl: './precio-hotel-tripulacion.component.html',
  styles: [
  ]
})
export class PrecioHotelTripulacionComponent implements OnInit {

  public totalPrecios: number=0;
  public precioHotel:PrecioHotelTripulacion[]=[];
  public precioHotelTemp:PrecioHotelTripulacion[]=[];

  public desde: number = 0;
  public cargando: boolean = true;



  constructor(private hotelServices:PreciosHotelTripulacionService) { }

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

  guardarCambios(precio:PrecioHotelTripulacion){
    this.hotelServices.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado',precio.est,'success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioHotelTripulacion){
    this.hotelServices.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ',precio.est,'success');
      }
    )
    console.log(precio);
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { PreciosHotelTripulacionSeHistrvice } from 'src/app/services/preciosHistoricos/precios-hotel-tripulacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { PrecioHotelTripulacionForm } from '../../../models/precios/precioHotelTripulacion.models';
import { PreciosHotelTripulacionService } from '../../../services/precios/precios-hotel-tripulacion.service';

@Component({
  selector: 'app-precio-hotel-tripulacion-form',
  templateUrl: './precio-hotel-tripulacion-form.component.html',
  styles: [
  ]
})
export class PrecioHotelTripulacionFormComponent implements OnInit {

  public precioHotel:PrecioHotelTripulacionForm = new PrecioHotelTripulacionForm();
  public titulo :string="Crear Precio Hotel Tripulación";
  public keys:string="";

  
  constructor(private hotelSerices: PreciosHotelTripulacionService ,private router:Router,
    private iden :GeneradorKeysService ,
    private hist :PreciosHotelTripulacionSeHistrvice,
    private user: UsuarioService) { }


  ngOnInit(): void {
    this.key();
  }


  public create():void{

    this.precioHotel.usuario=this.user.usuario.nombre
   this.precioHotel.idHistorico=this.keys;
    this.hotelSerices.crearPrecio(this.precioHotel).subscribe(
      precioAter=>{
        this.hist.crearPrecio(this.precioHotel).subscribe();
        this.router.navigate(['/dashboard/precioHotelTripulacion']),

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nuevo Precio Hotel Tripulación',
          showConfirmButton: false,
          timer: 2500
        })
        
      }
    )

  }


  public regreso():void{
    console.log("Cancelar");
    this.router.navigate(['/dashboard/precioHotelTripulacion'])
  }

  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }

}

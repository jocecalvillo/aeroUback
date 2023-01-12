import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { PreciosEquipoRampaHistService } from 'src/app/services/preciosHistoricos/precios-equipo-rampa.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { PrecioRentaEquipoRampa, PrecioRentaEquipoRampaForm } from '../../../models/precios/precioRentaEquipoRampa.models';
import { PreciosEquipoRampaService } from '../../../services/precios/precios-equipo-rampa.service';

@Component({
  selector: 'app-precio-equipo-rampa-form',
  templateUrl: './precio-equipo-rampa-form.component.html',
  styles: [
  ]
})
export class PrecioEquipoRampaFormComponent implements OnInit {


  public precioRampa:PrecioRentaEquipoRampaForm = new PrecioRentaEquipoRampaForm();
  public titulo :string="Crear Precio Renta Equipo Rampa"; 
  public keys:string="";
  
  constructor(private rampaSerices: PreciosEquipoRampaService ,
    private router:Router,
    private iden :GeneradorKeysService,
    private user: UsuarioService,
    private hist:PreciosEquipoRampaHistService) { }

  ngOnInit(): void {
    this.key();
  }

  public create():void{
    this.precioRampa.usuario=this.user.usuario.nombre
    this.precioRampa.idHistorico=this.keys;

    this.rampaSerices.crearPrecio(this.precioRampa).subscribe(
      precioAter=>{
        this.hist.crearPrecio(this.precioRampa).subscribe();
        this.router.navigate(['/dashboard/precioRentaEquipoRampa']),

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nuevo Precio Aterrizaje',
          showConfirmButton: false,
          timer: 2500
        })
        
      }
    )

  }


  public regreso():void{
    console.log("Cancelar");
    this.router.navigate(['/dashboard/precioAterrizaCam'])
  }

  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }

}

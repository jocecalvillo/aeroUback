import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrecioServicioRampa, PrecioServicioRampaForm } from 'src/app/models/precios/precioServicioRampa.models';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { PreciosServicioRampaService } from 'src/app/services/precios/precios-servicio-rampa.service';
import { PreciosServicioRampaHistService } from 'src/app/services/preciosHistoricos/precios-servicio-rampa.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-precio-servicio-rampa-form',
  templateUrl: './precio-servicio-rampa-form.component.html',
  styles: [
  ]
})
export class PrecioServicioRampaFormComponent implements OnInit {

  public sRampa:PrecioServicioRampaForm=new PrecioServicioRampaForm();
  public titulo :string="Crear Precio Catering";
  public keys:string=""; 

  constructor(private sRampaServices:PreciosServicioRampaService,private router:Router,
    private iden :GeneradorKeysService,
    private user: UsuarioService,
    private hist :PreciosServicioRampaHistService ) { }

  ngOnInit(): void {
    this.key();
  }

  public create():void{
   
    this.sRampa.usuario=this.user.usuario.nombre
    this.sRampa.idHistorico=this.keys;

    this.sRampaServices.crearPrecio(this.sRampa).subscribe(
      precioAter=>{
        this.hist.crearPrecio(this.sRampa).subscribe();
        this.router.navigate(['/dashboard/precioServicioRampa']),

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nuevo Precio Servicio Rampa',
          showConfirmButton: false,
          timer: 2500
        })
        
      }
    )

  }


  public regreso():void{
    console.log("Cancelar");
    this.router.navigate(['/dashboard/precioServicioRampa'])
  }

  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { PreciosPersonalRampaHistService } from 'src/app/services/preciosHistoricos/precios-personal-rampa.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { PrecioPersonalRampaForm } from '../../../models/precios/precioPersonalRampa.models';
import { PreciosPersonalRampaService } from '../../../services/precios/precios-personal-rampa.service';

@Component({
  selector: 'app-precio-personal-rampa-form',
  templateUrl: './precio-personal-rampa-form.component.html',
  styles: [
  ]
})
export class PrecioPersonalRampaFormComponent implements OnInit {


  public perRam:PrecioPersonalRampaForm=new PrecioPersonalRampaForm();
  public titulo :string="Crear Precio Personal Rampa";
  public keys:string=""; 

  constructor(private prampaServices:PreciosPersonalRampaService ,
    private router:Router,
    private iden :GeneradorKeysService,
    private user: UsuarioService,
    private hist:PreciosPersonalRampaHistService
    ) { }

  ngOnInit(): void {
    this.key();
  }

  public create():void{
    this.perRam.usuario=this.user.usuario.nombre
    this.perRam.idHistorico=this.keys;

    this.prampaServices.crearPrecio(this.perRam).subscribe(
      precioAter=>{
        this.hist.crearPrecio(this.perRam).subscribe();
        this.router.navigate(['/dashboard/precioPersonalRampa']),

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
    this.router.navigate(['/dashboard/precioPersonalRampa'])
  }

  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }

}

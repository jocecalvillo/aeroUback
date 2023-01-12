import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrecioMigracionCamForm } from 'src/app/models/precios/preciosMigracionCam.models';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { PreciosMigracionCamService } from 'src/app/services/precios/precios-migracion-cam.service';
import { PreciosMigracionCamHistService } from 'src/app/services/preciosHistoricos/precios-migracion-cam.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-precio-migracion-cam-form',
  templateUrl: './precio-migracion-cam-form.component.html',
  styles: [
  ]
})
export class PrecioMigracionCamFormComponent implements OnInit {

  public migracion:PrecioMigracionCamForm= new PrecioMigracionCamForm();
  public titulo :string="Crear Precio Migracion Cam";
  public keys:string="";

  constructor(private migracionServices:PreciosMigracionCamService,private router:Router,
    private iden :GeneradorKeysService ,
    private hist :PreciosMigracionCamHistService,
    private user: UsuarioService) { }

  ngOnInit(): void {
    this.key();
  }

  
  public create():void{
    this.migracion.usuario=this.user.usuario.nombre
    this.migracion.idHistorico=this.keys;
    this.migracionServices.crearPrecio(this.migracion).subscribe(
      precioAter=>{
        this.hist.crearPrecio(this.migracion).subscribe();
        this.router.navigate(['/dashboard/precioMigracionCam']),

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nuevo Precio Migracion Cam',
          showConfirmButton: false,
          timer: 2500
        })
        
      }
    )

  }


  public regreso():void{
    console.log("Cancelar");
    this.router.navigate(['/dashboard/precioMigracionCam'])
  }

  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreciosMigracionCamService } from '../../../services/precios/precios-migracion-cam.service';
import { PrecioMantenimientoForm } from '../../../models/precios/precioMantenimiento.models';
import Swal from 'sweetalert2';
import { PreciosMantenimientoService } from '../../../services/precios/precios-mantenimiento.service';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PreciosMantenimientoHistService } from 'src/app/services/preciosHistoricos/precios-mantenimiento.service';

@Component({
  selector: 'app-precio-mantenimiento-form',
  templateUrl: './precio-mantenimiento-form.component.html',
  styles: [
  ]
})
export class PrecioMantenimientoFormComponent implements OnInit {

  public precioMantenimiento:PrecioMantenimientoForm = new PrecioMantenimientoForm();
  public titulo :string="Crear Precio Mantenimiento";
  public keys:string=""; 

  constructor(private mantenimientoSerices: PreciosMantenimientoService ,
    private router:Router,
    private iden :GeneradorKeysService,
    private user: UsuarioService,
    private hist:PreciosMantenimientoHistService) { }

  ngOnInit(): void {
    this.key();
  }

  public create():void{
    this.precioMantenimiento.usuario=this.user.usuario.nombre
    this.precioMantenimiento.idHistorico=this.keys;

    this.mantenimientoSerices.crearPrecios(this.precioMantenimiento).subscribe(
      precioAter=>{
        this.hist.crearPrecios(this.precioMantenimiento).subscribe();
        this.router.navigate(['/dashboard/precioMantenimiento']),

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nuevo Precio Mantenimiento',
          showConfirmButton: false,
          timer: 2500
        })
        
      }
    )

  }


  public regreso():void{
    console.log("Cancelar");
    this.router.navigate(['/dashboard/precioMantenimiento'])
  }

  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { PreciosSeguridadService } from 'src/app/services/precios/precios-seguridad.service';
import { PreciosSeguridadHistService } from 'src/app/services/preciosHistoricos/precios-seguridad.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { PrecioSeguridaForm } from '../../../models/precios/precioSeguridad.models';

@Component({
  selector: 'app-precio-seguridad-form',
  templateUrl: './precio-seguridad-form.component.html',
  styles: [
  ]
})
export class PrecioSeguridadFormComponent implements OnInit {

  
  public seguridad:PrecioSeguridaForm=new PrecioSeguridaForm();
  public titulo :string="Crear Precio Seguridad";
  public keys:string=""; 

  constructor(private seguridadServices:PreciosSeguridadService ,
    private router:Router,
    private iden :GeneradorKeysService,
    private user: UsuarioService,
    private hist: PreciosSeguridadHistService
    ) { }


  ngOnInit(): void {
    this.key();
  }

  public create():void{
  
    this.seguridad.usuario=this.user.usuario.nombre
    this.seguridad.idHistorico=this.keys;

    this.seguridadServices.crearPrecio(this.seguridad).subscribe(
      precioAter=>{
        this.hist.crearPrecio(this.seguridad).subscribe();
        this.router.navigate(['/dashboard/precioSeguridad']),

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
    this.router.navigate(['/dashboard/precioSeguridad'])
  }

  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }



}

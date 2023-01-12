import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrecioMotoresForm } from 'src/app/models/precios/precioMotores.models';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { PreciosMotoresHistService } from 'src/app/services/preciosHistoricos/precios-motores.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { PreciosMotoresService } from '../../../services/precios/precios-motores.service';

@Component({
  selector: 'app-precio-motores-form',
  templateUrl: './precio-motores-form.component.html',
  styles: [
  ]
})
export class PrecioMotoresFormComponent implements OnInit {

  public motor:PrecioMotoresForm= new PrecioMotoresForm();
  public titulo :string="Crear Precio Motor";
  public keys:string="";

  constructor(private motorServices:PreciosMotoresService ,private router:Router,
    private iden :GeneradorKeysService ,private hist: PreciosMotoresHistService,
    private user: UsuarioService) { }

  ngOnInit(): void {
    this.key();
  }

  public create():void{
    
   this.motor.usuario=this.user.usuario.nombre
    this.motor.idHistorico=this.keys;
    this.motorServices.crearPrecio(this.motor).subscribe(
      precioAter=>{

        this.hist.crearPrecio(this.motor).subscribe();
        this.router.navigate(['/dashboard/precioMotores']),

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nuevo Precio Motor',
          showConfirmButton: false,
          timer: 2500
        })
        
      }
    )

  }


  public regreso():void{
    console.log("Cancelar");
    this.router.navigate(['/dashboard/precioMotores'])
  }

  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }


}

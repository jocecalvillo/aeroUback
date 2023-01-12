import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { PreciosPersonalAlmacenHistService } from 'src/app/services/preciosHistoricos/precios-personal-almacen.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { PrecioPersonalAlamacenForm } from '../../../models/precios/precioPersonalAlmacen.models';
import { PreciosPersonalAlmacenService } from '../../../services/precios/precios-personal-almacen.service';

@Component({
  selector: 'app-precio-personal-almacen-form',
  templateUrl: './precio-personal-almacen-form.component.html',
  styles: [
  ]
})
export class PrecioPersonalAlmacenFormComponent implements OnInit {

  public almacen:PrecioPersonalAlamacenForm=new PrecioPersonalAlamacenForm();
  public titulo :string="Crear Precio Personal Almacen";
  public keys:string=""; 

  constructor(private personalServices:PreciosPersonalAlmacenService ,
    private router:Router,
    private iden :GeneradorKeysService,
    private user: UsuarioService,
    private hist:PreciosPersonalAlmacenHistService) { }


  ngOnInit(): void {
    this.key();
  }

  public create():void{
    this.almacen.usuario=this.user.usuario.nombre
    this.almacen.idHistorico=this.keys;

    this.personalServices.crearPrecio(this.almacen).subscribe(
      precioAter=>{
        this.hist.crearPrecio(this.almacen).subscribe();
        this.router.navigate(['/dashboard/precioPersonalAlmacen']),

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
    this.router.navigate(['/dashboard/precioPersonalAlmacen'])
  }

  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }

}

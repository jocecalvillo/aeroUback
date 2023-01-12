import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { PreciosRentaAlmacenService } from 'src/app/services/precios/precios-renta-almacen.service';
import { PreciosRentaAlmacenHistService } from 'src/app/services/preciosHistoricos/precios-renta-almacen.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { PrecioRentaAlmacenForm } from '../../../models/precios/precioRentaAlmacen.models';

@Component({
  selector: 'app-precio-renta-almacen-form',
  templateUrl: './precio-renta-almacen-form.component.html',
  styles: [
  ]
})
export class PrecioRentaAlmacenFormComponent implements OnInit {

  
  public almacen:PrecioRentaAlmacenForm=new PrecioRentaAlmacenForm();
  public titulo :string="Crear Precio Renta Almacen";
  public keys:string=""; 

  constructor(private almacenServices:PreciosRentaAlmacenService,
    private router:Router,
    private iden :GeneradorKeysService,
    private user: UsuarioService,
    private hist:PreciosRentaAlmacenHistService
    ) { }

  ngOnInit(): void {
    this.key();
  }

  public create():void{
    this.almacen.usuario=this.user.usuario.nombre
    this.almacen.idHistorico=this.keys;


    this.almacenServices.crearPrecio(this.almacen).subscribe(
      precioAter=>{
        this.hist.crearPrecio(this.almacen).subscribe();
        this.router.navigate(['/dashboard/precioRentaAlmacen']),

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
    this.router.navigate(['/dashboard/precioRentaAlmacen'])
  }

  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }


}

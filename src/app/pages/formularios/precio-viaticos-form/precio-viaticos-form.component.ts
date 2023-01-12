import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { PreciosViaticosHistService } from 'src/app/services/preciosHistoricos/precios-viaticos.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { PrecioViaticosForm } from '../../../models/precios/precioViaticos.moles';
import { PreciosViaticosService } from '../../../services/precios/precios-viaticos.service';

@Component({
  selector: 'app-precio-viaticos-form',
  templateUrl: './precio-viaticos-form.component.html',
  styles: [
  ]
})
export class PrecioViaticosFormComponent implements OnInit {

  public viaticos:PrecioViaticosForm= new PrecioViaticosForm();
  public titulo :string="Crear Precio Viaticos";
  public keys:string="";

  constructor(private viaticosServices:PreciosViaticosService,private router:Router,
    private iden :GeneradorKeysService ,
    private hist :PreciosViaticosHistService,
    private user: UsuarioService) { }

  ngOnInit(): void {
    this.key();
  }

  public create():void{
   
    this.viaticos.usuario=this.user.usuario.nombre
    this.viaticos.idHistorico=this.keys;
    this.viaticosServices.crearPrecio(this.viaticos).subscribe(
      precioAter=>{
        this.hist.crearPrecio(this.viaticos).subscribe();
        this.router.navigate(['/dashboard/precioViaticos']),

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nuevo Precio Viaticos',
          showConfirmButton: false,
          timer: 2500
        })
        
      }
    )

  }


  public regreso():void{
    console.log("Cancelar");
    this.router.navigate(['/dashboard/precioViaticos'])
  }

  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }


}

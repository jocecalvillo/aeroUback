import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { PreciosSobreCocesnaHistService } from 'src/app/services/preciosHistoricos/precios-sobre-cocesna.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { PrecioSobreCocesnaForm } from '../../../models/precios/precioSobreCocesna.models';
import { PreciosSobreCocesnaService } from '../../../services/precios/precios-sobre-cocesna.service';

@Component({
  selector: 'app-precio-sobre-cocesna-form',
  templateUrl: './precio-sobre-cocesna-form.component.html',
  styles: [
  ]
})
export class PrecioSobreCocesnaFormComponent implements OnInit {

  public cocesna:PrecioSobreCocesnaForm= new PrecioSobreCocesnaForm();
  public titulo :string="Crear Precio Sobre COCESNA";
  public keys:string="";



  constructor(private cocesnaServices:PreciosSobreCocesnaService ,private router:Router,
    private iden :GeneradorKeysService ,
    private hist :PreciosSobreCocesnaHistService,
    private user: UsuarioService) { }

  ngOnInit(): void {
    this.key();
  }

  public create():void{
    this.cocesna.usuario=this.user.usuario.nombre
    this.cocesna.idHistorico=this.keys
    this.cocesnaServices.crearPrecio(this.cocesna).subscribe(
      precioAter=>{
        this.hist.crearPrecio(this.cocesna).subscribe();
        this.router.navigate(['/dashboard/precioSobreCocesna']),

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nuevo Precio Sobre COCESNA',
          showConfirmButton: false,
          timer: 2500
        })
        
      }
    )

  }


  public regreso():void{
    console.log("Cancelar");
    this.router.navigate(['/dashboard/precioSobreCocesna'])
  }

  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }


}

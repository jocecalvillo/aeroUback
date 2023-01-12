import { Component, OnInit } from '@angular/core';
import { PrecioAterrizajeCamForm } from 'src/app/models/precios/precioAterrizajeCam.models';
import { PrecioAterrizajeCamFormComponent } from '../precio-aterrizaje-cam-form/precio-aterrizaje-cam-form.component';
import { PreciosAterrizajeMexService } from '../../../services/precios-aterrizaje-mex.service';
import Swal from 'sweetalert2';
import { PrecioAterrizajeMexForm } from 'src/app/models/precioAterrizajeMex.models';
import { Router } from '@angular/router';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { PreciosAterrizajeMexHistService } from 'src/app/services/preciosHistoricos/precios-aterrizaje-mex.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-precio-aterrizaje-mex-form',
  templateUrl: './precio-aterrizaje-mex-form.component.html',
  styles: [
  ]
})
export class PrecioAterrizajeMexFormComponent implements OnInit {

  public aterrizaje:PrecioAterrizajeMexForm= new PrecioAterrizajeMexForm()
  public titulo :string="Crear Aterrizaje México";
  public keys:string="";

  constructor(private  aterriajeService:PreciosAterrizajeMexService,private router:Router,
    private iden :GeneradorKeysService ,private hist:PreciosAterrizajeMexHistService,
    private user: UsuarioService) { }


  ngOnInit(): void {
    this.key();
  }

  public create():void{
    this.aterrizaje.usuario=this.user.usuario.nombre;
    this.aterrizaje.idHistorico=this.keys;
    this.aterriajeService.crearPrecios(this.aterrizaje).subscribe(
      precioAter=>{
        

        this.hist.crearPrecios(this.aterrizaje).subscribe();
        this.router.navigate(['/dashboard/precioAterrizajeMex']);

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nuevo Precio Aterrizaje México',
          showConfirmButton: false,
          timer: 2500
        })
        
      }
    )

  }


  public regreso():void{
    console.log("Cancelar");
    this.router.navigate(['/dashboard/precioAterrizajeMex'])
  }

  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }


}

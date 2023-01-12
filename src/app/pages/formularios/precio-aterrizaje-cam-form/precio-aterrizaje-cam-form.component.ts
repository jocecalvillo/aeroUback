import { Component, OnInit } from '@angular/core';
import { PrecioAterrizajeCam, PrecioAterrizajeCamForm } from 'src/app/models/precios/precioAterrizajeCam.models';
import { PreciosAterrrizajeCamService } from 'src/app/services/precios/precios-aterrrizaje-cam.service';
import {Router} from '@angular/router'
import Swal from 'sweetalert2';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { PreciosAterrrizajeCamHistService } from 'src/app/services/preciosHistoricos/precios-aterrrizaje-cam.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-precio-aterrizaje-cam-form',
  templateUrl: './precio-aterrizaje-cam-form.component.html',
  styles: [
  ]
})
export class PrecioAterrizajeCamFormComponent implements OnInit {

  //private precioAterrizajeCam: precioAterrizajeCam= new PrecioAterrizajeCam();

  public precioAter:PrecioAterrizajeCamForm = new PrecioAterrizajeCamForm();
  public titulo :string="Crear Aterrizaje Cam";
  public keys:string="";

  constructor(private aterizajeCamSerices: PreciosAterrrizajeCamService ,
    private router:Router,private iden :GeneradorKeysService ,
    private hist :PreciosAterrrizajeCamHistService,
    private user: UsuarioService) { }

  ngOnInit(): void {
     this.key();
  }   
  

  public create():void{
    
    this.precioAter.idHistorico=this.keys
    this.precioAter.usuario=this.user.usuario.nombre
    this.aterizajeCamSerices.crearAterrizaje(this.precioAter).subscribe(
      
      (res)=>{
               
        this.hist.crearPrecio(this.precioAter).subscribe();
        this.router.navigate(['/dashboard/precioAterrizaCam']),

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nuevo Precio Aterrizaje Cam',
          showConfirmButton: false,
          timer: 2500
        })
        
      }
    )


  }


  public regreso():void{
    console.log("Cancelar");
    this.router.navigate(['/dashboard/precioAterrizaCam'])
  }


  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }


}

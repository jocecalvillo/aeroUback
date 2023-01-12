import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { PreciosPlatCamService } from 'src/app/services/precios/precios-plat-cam.service';
import { PreciosPlatCamHistService } from 'src/app/services/preciosHistoricos/precios-plat-cam.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { PrecioPlataformaCamForm } from '../../../models/precios/precioPlataformaCam.models';

@Component({
  selector: 'app-precio-plata-cam-form',
  templateUrl: './precio-plata-cam-form.component.html',
  styles: [
  ]
})
export class PrecioPlataCamFormComponent implements OnInit {

  public plataformaCam:PrecioPlataformaCamForm=new PrecioPlataformaCamForm();
  public titulo :string="Crear Precio Plataforma CAM";
  public keys:string=""; 

  constructor(private personalCamServices:PreciosPlatCamService,private router:Router,
    private iden :GeneradorKeysService,
    private user: UsuarioService,
    private hist:PreciosPlatCamHistService) { }

  ngOnInit(): void {
    this.key();
  }

  public create():void{
    this.plataformaCam.usuario=this.user.usuario.nombre
    this.plataformaCam.idHistorico=this.keys;
    this.personalCamServices.crearPrecio(this.plataformaCam).subscribe(
      precioAter=>{
        this.hist.crearPrecio(this.plataformaCam).subscribe();
        this.router.navigate(['/dashboard/precioPlataformaCam']),

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nuevo Precio Plataforma CAM',
          showConfirmButton: false,
          timer: 2500
        })
        
      }
    )

  }


  public regreso():void{
    console.log("Cancelar");
    this.router.navigate(['/dashboard/precioPlataformaCam'])
  }

  
  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }



}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrecioPlataformaForm } from 'src/app/models/precios/precioPlataforma.model';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { PreciosPlataformaService } from 'src/app/services/precios/precios-plataforma.service';
import { PreciosPlataformaHistService } from 'src/app/services/preciosHistoricos/precios-plataforma.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { PreciosPlatCamService } from '../../../services/precios/precios-plat-cam.service';

@Component({
  selector: 'app-precio-plataforma-form',
  templateUrl: './precio-plataforma-form.component.html',
  styles: [
  ]
})
export class PrecioPlataformaFormComponent implements OnInit {

  public plataforma:PrecioPlataformaForm=new PrecioPlataformaForm();
  public titulo :string="Crear Precio Plataforma ";
  public keys:string="";

  constructor(private plataformaServices:PreciosPlataformaService,
    private router:Router,
    private iden :GeneradorKeysService,
    private user: UsuarioService,
    private hist:PreciosPlataformaHistService
    ) { }

  ngOnInit(): void {
    this.key();
  }
  public create():void{
    this.plataforma.usuario=this.user.usuario.nombre
    this.plataforma.idHistorico=this.keys;

    this.plataformaServices.crearPrecio(this.plataforma).subscribe(
      precioAter=>{
        this.hist.crearPrecio(this.plataforma).subscribe();
        this.router.navigate(['/dashboard/precioPlataforma']),

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nuevo Precio Plataforma ',
          showConfirmButton: false,
          timer: 2500
        })
        
      }
    )

  }


  public regreso():void{
    console.log("Cancelar");
    this.router.navigate(['/dashboard/precioPlataforma'])
  }

  
  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }


}

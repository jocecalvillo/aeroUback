import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrecioSupervicionDespachoCamForm } from 'src/app/models/precios/precioSupervicionDespachoCam.models';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { PreciosSupervicionDespachoCamService } from 'src/app/services/precios/precios-supervicion-despacho-cam.service';
import { PreciosSupervicionDespachoCamHistService } from 'src/app/services/preciosHistoricos/precios-supervicion-despacho-cam.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { PrecioSupervicionDespachoForm } from '../../../models/precios/precioSupervicionDespacho.models';
import { PreciosSupervicionDespachoService } from '../../../services/precios/precios-supervicion-despacho.service';

@Component({
  selector: 'app-precio-supervicion-despacho-cam-form',
  templateUrl: './precio-supervicion-despacho-cam-form.component.html',
  styles: [
  ]
})
export class PrecioSupervicionDespachoCamFormComponent implements OnInit {

  public supervicion:PrecioSupervicionDespachoCamForm= new PrecioSupervicionDespachoCamForm();
  public titulo :string="Crear Supervicion Despacho CAM";
  public keys:string="";

  constructor(private supervicionServices:PreciosSupervicionDespachoCamService,
    private router:Router,
    private iden :GeneradorKeysService,
    private user: UsuarioService,
    private hist: PreciosSupervicionDespachoCamHistService
    ) { }

  ngOnInit(): void {
    this.key();
  }

  public create():void{
    this.supervicion.usuario=this.user.usuario.nombre
    this.supervicion.idHistorico=this.keys;
    this.supervicionServices.crearPrecio(this.supervicion).subscribe(
      precioAter=>{
        this.hist.crearPrecio(this.supervicion).subscribe();
        this.router.navigate(['/dashboard/precioSupervicionDespachoCam']),

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nuevo Supervicion Despacho CAM',
          showConfirmButton: false,
          timer: 2500
        })
        
      }
    )

  }


  public regreso():void{
    console.log("Cancelar");
    this.router.navigate(['/dashboard/precioSupervicionDespachoCam'])
  }

  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }

}

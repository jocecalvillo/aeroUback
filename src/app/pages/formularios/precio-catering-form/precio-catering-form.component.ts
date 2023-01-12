import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrecioCateringForm } from 'src/app/models/precios/precioCatering.models';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { PreciosCateringHistService } from 'src/app/services/preciosHistoricos/precios-catering.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { PreciosCateringService } from '../../../services/precios/precios-catering.service';

@Component({
  selector: 'app-precio-catering-form',
  templateUrl: './precio-catering-form.component.html',
  styles: [
  ]
})
export class PrecioCateringFormComponent implements OnInit {


  public catering:PrecioCateringForm=new PrecioCateringForm();
  public titulo :string="Crear Precio Catering";
  public keys:string="";


  constructor(private cateringServices:PreciosCateringService ,private router:Router,
    private iden :GeneradorKeysService ,private hist:PreciosCateringHistService,
    private user: UsuarioService) { }

  ngOnInit(): void {
    this.key();
  }

  public create():void{
    this.catering.usuario=this.user.usuario.nombre
    this.catering.idHistorico=this.keys
    this.cateringServices.crearPrecio(this.catering).subscribe(
      precioAter=>{
        this.hist.crearPrecio(this.catering).subscribe();
        this.router.navigate(['/dashboard/precioCatering']),

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nuevo Precio Catering',
          showConfirmButton: false,
          timer: 2500
        })
        
      }
    )

  }

  public regreso():void{
    console.log("Cancelar");
    this.router.navigate(['/dashboard/precioCatering'])
  }

  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }

}

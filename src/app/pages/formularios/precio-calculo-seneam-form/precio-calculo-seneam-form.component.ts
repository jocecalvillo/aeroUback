import { Component, OnInit } from '@angular/core';
import { PreciosCalculoSeneamService } from 'src/app/services/precios/precios-calculo-seneam.service';
import { PrecioCalculoSeneamForm } from 'src/app/models/precios/precioCalculoSeneam.models';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { PreciosCalculoSeneamHistService } from 'src/app/services/preciosHistoricos/precios-calculo-seneam.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-precio-calculo-seneam-form',
  templateUrl: './precio-calculo-seneam-form.component.html',
  styles: [
  ]
})
export class PrecioCalculoSeneamFormComponent implements OnInit {


  public precioCalculo:PrecioCalculoSeneamForm = new PrecioCalculoSeneamForm();
  public titulo :string="Crear Preacio Calculo Seneam";
  public keys:string="";


  constructor(private calculoServices:PreciosCalculoSeneamService,private router:Router,
    private iden :GeneradorKeysService ,
    private hist :PreciosCalculoSeneamHistService,
    private user: UsuarioService) { }

  ngOnInit(): void {
    this.key();
  }

  public create():void{
   
    this.precioCalculo.usuario=this.user.usuario.nombre
    this.precioCalculo.idHistorico=this.keys;

    this.calculoServices.crearPrecio(this.precioCalculo).subscribe(
      precioAter=>{
        this.hist.crearPrecio(this.precioCalculo).subscribe();
        this.router.navigate(['/dashboard/precioCSeneam']),

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nuevo Calculo Seneam',
          showConfirmButton: false,
          timer: 2500
        })
        
      }
    )

  }


  public regreso():void{
    console.log("Cancelar");
    this.router.navigate(['/dashboard/precioCSeneam'])
  }

  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }

}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrecioSupervicionDespacho, PrecioSupervicionDespachoForm } from 'src/app/models/precios/precioSupervicionDespacho.models';
import { GeneradorKeysService } from 'src/app/services/generador-keys.service';
import { PreciosSupervicionDespachoService } from 'src/app/services/precios/precios-supervicion-despacho.service';
import { PreciosSupervicionDespachoHistService } from 'src/app/services/preciosHistoricos/precios-supervicion-despacho.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-precio-supervicion-despacho-form',
  templateUrl: './precio-supervicion-despacho-form.component.html',
  styles: [
  ]
})
export class PrecioSupervicionDespachoFormComponent implements OnInit {

  public supervicion:PrecioSupervicionDespachoForm= new PrecioSupervicionDespachoForm();
  public titulo :string="Crear Supervicion Despacho";
  public keys:string=""; 

  constructor(private supervicionServices:PreciosSupervicionDespachoService,
    private router:Router,
    private iden :GeneradorKeysService,
    private user: UsuarioService,
    private hist: PreciosSupervicionDespachoHistService
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
        this.router.navigate(['/dashboard/precioSupervicionDespacho']),

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nuevo Supervicion Despacho',
          showConfirmButton: false,
          timer: 2500
        })
        
      }
    )

  }


  public regreso():void{
    console.log("Cancelar");
    this.router.navigate(['/dashboard/precioSupervicionDespacho'])
  }

  public  key():void{
    this.iden.generarId().subscribe(resp=>this.keys=resp.idRandom);
  }


}

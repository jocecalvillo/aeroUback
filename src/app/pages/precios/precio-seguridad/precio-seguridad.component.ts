import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PrecioSeguridad } from '../../../models/precios/precioSeguridad.models';
import { PreciosSeguridadService } from '../../../services/precios/precios-seguridad.service';

@Component({
  selector: 'app-precio-seguridad',
  templateUrl: './precio-seguridad.component.html',
  styles: [
  ]
})
export class PrecioSeguridadComponent implements OnInit {

  public totalPrecios: number=0;
  public precioSeguridad:PrecioSeguridad[]=[];
  public precioSeguridadTemp:PrecioSeguridad[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private seguridadServices:PreciosSeguridadService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.seguridadServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioSeguridad=precios;
        this.precioSeguridadTemp=precios;
        this.cargando=false;
      }
    )

  }

  cambiarPagina(valor:number){

    this.desde+=valor;

    if(this.desde<0){
      this.desde=0;
    }else if(this.desde>=this.totalPrecios){
      this.desde-=valor;
    }
    this.cargarDatos();
  }

  guardarCambios(precio:PrecioSeguridad){
    this.seguridadServices.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado',precio.est,'success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioSeguridad){
    this.seguridadServices.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ',precio.est,'success');
      }
    )
    console.log(precio);
  }


}

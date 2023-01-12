import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PrecioMantenimiento } from '../../../models/precios/precioMantenimiento.models';
import { PreciosMantenimientoService } from '../../../services/precios/precios-mantenimiento.service';

@Component({
  selector: 'app-precio-mantenimiento',
  templateUrl: './precio-mantenimiento.component.html',
  styles: [
  ]
})
export class PrecioMantenimientoComponent implements OnInit {

  public totalPrecios: number=0;
  public precioMantenimiento:PrecioMantenimiento[]=[];
  public precioMantenimientoTemp:PrecioMantenimiento[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private mantenimientoServices:PreciosMantenimientoService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.mantenimientoServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioMantenimiento=precios;
        this.precioMantenimientoTemp=precios;
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

  guardarCambios(precio:PrecioMantenimiento){
    this.mantenimientoServices.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado',precio.est,'success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioMantenimiento){
    this.mantenimientoServices.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ',precio.est,'success');
      }
    )
    console.log(precio);
  }



}

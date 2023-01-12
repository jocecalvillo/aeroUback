import { Component, OnInit } from '@angular/core';
import { PreciosPersonalAlmacenService } from 'src/app/services/precios/precios-personal-almacen.service';
import Swal from 'sweetalert2';
import { PrecioPersonalAlamacen } from '../../../models/precios/precioPersonalAlmacen.models';

@Component({
  selector: 'app-precio-personal-almacen',
  templateUrl: './precio-personal-almacen.component.html',
  styles: [
  ]
})
export class PrecioPersonalAlmacenComponent implements OnInit {

  public totalPrecios: number=0;
  public precioPersonal:PrecioPersonalAlamacen[]=[];
  public precioPersonalTemp:PrecioPersonalAlamacen[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private personalServices:PreciosPersonalAlmacenService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.personalServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioPersonal=precios;
        this.precioPersonalTemp=precios;
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

  guardarCambios(precio:PrecioPersonalAlamacen){
    this.personalServices.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado',precio.est,'success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioPersonalAlamacen){
    this.personalServices.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ',precio.est,'success');
      }
    )
    console.log(precio);
  }

}

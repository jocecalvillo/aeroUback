import { Component, OnInit } from '@angular/core';
import { PrecioRentaAlmacen } from 'src/app/models/precios/precioRentaAlmacen.models';
import { PreciosRentaAlmacenService } from 'src/app/services/precios/precios-renta-almacen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-precio-renta-almacen',
  templateUrl: './precio-renta-almacen.component.html',
  styles: [
  ]
})
export class PrecioRentaAlmacenComponent implements OnInit {

  public totalPrecios: number=0;
  public precioAlamacen:PrecioRentaAlmacen[]=[];
  public precioAlmacenTemp:PrecioRentaAlmacen[]=[];

  public desde: number = 0;
  public cargando: boolean = true;
  
  constructor(private almacenServices:PreciosRentaAlmacenService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.almacenServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioAlamacen=precios;
        this.precioAlmacenTemp=precios;
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

  guardarCambios(precio:PrecioRentaAlmacen){
    this.almacenServices.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado',precio.est,'success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioRentaAlmacen){
    this.almacenServices.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ',precio.est,'success');
      }
    )
    console.log(precio);
  }


}

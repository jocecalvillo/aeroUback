import { Component, OnInit } from '@angular/core';
import { PrecioMotores } from 'src/app/models/precios/precioMotores.models';

import { PreciosMotoresService } from 'src/app/services/precios/precios-motores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-precio-motores',
  templateUrl: './precio-motores.component.html',
  styles: [
  ]
})
export class PrecioMotoresComponent implements OnInit {

  public totalPrecios: number=0;
  public precioMotores:PrecioMotores[]=[];
  public precioMotoresTemp:PrecioMotores[]=[];

  public desde: number = 0;
  public cargando: boolean = true;


  constructor(private motoresServices:PreciosMotoresService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.motoresServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioMotores=precios;
        this.precioMotoresTemp=precios;
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

  guardarCambios(precio:PrecioMotores){
    this.motoresServices.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado',precio.est,'success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioMotores){
    this.motoresServices.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ',precio.est,'success');
      }
    )
    console.log(precio);
  }


}

import { Component, OnInit } from '@angular/core';
import { PrecioMigracionCam } from 'src/app/models/precios/preciosMigracionCam.models';

import { PreciosMigracionCamService } from 'src/app/services/precios/precios-migracion-cam.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-precio-migracion-cam',
  templateUrl: './precio-migracion-cam.component.html',
  styles: [
  ]
})
export class PrecioMigracionCamComponent implements OnInit {

  public totalPrecios: number=0;
  public precioMigracion:PrecioMigracionCam[]=[];
  public precioMigracionTemp:PrecioMigracionCam[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private migracionServices:PreciosMigracionCamService) { }
  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.migracionServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioMigracion=precios;
        this.precioMigracionTemp=precios;
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

  guardarCambios(precio:PrecioMigracionCam){
    this.migracionServices.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado',precio.est,'success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioMigracionCam){
    this.migracionServices.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ',precio.est,'success');
      }
    )
    console.log(precio);
  }

}

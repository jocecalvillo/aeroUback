import { Component, OnInit } from '@angular/core';
import { PreciosSupervicionDespachoCamService } from 'src/app/services/precios/precios-supervicion-despacho-cam.service';
import Swal from 'sweetalert2';
import { PrecioSupervicionDespachoCam } from '../../../models/precios/precioSupervicionDespachoCam.models';

@Component({
  selector: 'app-precio-supervicion-despacho-cam',
  templateUrl: './precio-supervicion-despacho-cam.component.html',
  styles: [
  ]
})
export class PrecioSupervicionDespachoCamComponent implements OnInit {

  public totalPrecios: number=0;
  public precioSupervicion:PrecioSupervicionDespachoCam[]=[];
  public precioSupervicionTemp:PrecioSupervicionDespachoCam[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private superCam :PreciosSupervicionDespachoCamService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.superCam.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioSupervicion=precios;
        this.precioSupervicionTemp=precios;
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

  guardarCambios(precio:PrecioSupervicionDespachoCam){
    this.superCam.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado',precio.est,'success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioSupervicionDespachoCam){
    this.superCam.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ',precio.est,'success');
      }
    )
    console.log(precio);
  }


}

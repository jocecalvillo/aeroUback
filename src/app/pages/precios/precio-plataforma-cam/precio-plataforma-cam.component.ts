import { Component, OnInit } from '@angular/core';
import { PrecioPlataformaCam } from 'src/app/models/precios/precioPlataformaCam.models';
import { PreciosPlatCamService } from 'src/app/services/precios/precios-plat-cam.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-precio-plataforma-cam',
  templateUrl: './precio-plataforma-cam.component.html',
  styles: [
  ]
})
export class PrecioPlataformaCamComponent implements OnInit {

  public totalPrecios: number=0;
  public preciosPlataformaCam:PrecioPlataformaCam[]=[];
  public preciosPlataformaCamTemp:PrecioPlataformaCam[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private plataformaCamServices:PreciosPlatCamService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.plataformaCamServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        this.totalPrecios=total;
        this.preciosPlataformaCam=precios;
        this.preciosPlataformaCamTemp=precios;
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

  guardarCambios(precio:PrecioPlataformaCam){
    this.plataformaCamServices.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado',precio.est,'success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioPlataformaCam){
    this.plataformaCamServices.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ',precio.est,'success');
      }
    )
    console.log(precio);
  }


}

import { Component, OnInit } from '@angular/core';
import { PrecioAterrizajeMexHist } from 'src/app/models/preciosHistoricos/precioAterrizajeMex.models';
import { PreciosAterrizajeMexHistService } from 'src/app/services/preciosHistoricos/precios-aterrizaje-mex.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-precio-aterrizaje-mex-hist',
  templateUrl: './precio-aterrizaje-mex-hist.component.html',
  styles: [
  ]
})
export class PrecioAterrizajeMexHistComponent implements OnInit {


  public totalPrecios: number=0;
  public precios:PrecioAterrizajeMexHist[]=[];
  public preciosTemp:PrecioAterrizajeMexHist[]=[];
  public cargando: boolean = true;
  public desde: number = 0;
  constructor(private precioAterrizajeMex : PreciosAterrizajeMexHistService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }


  cargarDatos(){
    this.cargando=true;
    this.precioAterrizajeMex.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        this.totalPrecios=total;
        this.precios=precios;
        this.preciosTemp=precios;
        this.cargando=false;
    console.log(precios);
    });
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

  guardarCambios(precio:PrecioAterrizajeMexHist){
    this.precioAterrizajeMex.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado',precio.aterrizaje,'success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioAterrizajeMexHist){
    this.precioAterrizajeMex.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ',precio.aterrizaje,'success');
      }
    )
    console.log(precio);
  }

}

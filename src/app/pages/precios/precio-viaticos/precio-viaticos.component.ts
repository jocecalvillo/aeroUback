import { Component, OnInit } from '@angular/core';
import { PrecioViaticos } from 'src/app/models/precios/precioViaticos.moles';
import { PreciosViaticosService } from 'src/app/services/precios/precios-viaticos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-precio-viaticos',
  templateUrl: './precio-viaticos.component.html',
  styles: [
  ]
})
export class PrecioViaticosComponent implements OnInit {

  public totalPrecios: number=0;
  public precioViaticos:PrecioViaticos[]=[];
  public precioViaticosTemp:PrecioViaticos[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private viaticosServices:PreciosViaticosService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.viaticosServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioViaticos=precios;
        this.precioViaticosTemp=precios;
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

  guardarCambios(precio:PrecioViaticos){
    this.viaticosServices.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado',precio.est,'success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioViaticos){
    this.viaticosServices.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ',precio.est,'success');
      }
    )
    console.log(precio);
  }

}

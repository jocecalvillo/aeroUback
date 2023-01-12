import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PrecioSupervicionDespacho } from '../../../models/precios/precioSupervicionDespacho.models';
import { PreciosSupervicionDespachoService } from '../../../services/precios/precios-supervicion-despacho.service';

@Component({
  selector: 'app-precio-supervicion-despacho',
  templateUrl: './precio-supervicion-despacho.component.html',
  styles: [
  ]
})
export class PrecioSupervicionDespachoComponent implements OnInit {

  public totalPrecios: number=0;
  public precioSupervicion:PrecioSupervicionDespacho[]=[];
  public precioSupervicionTemp:PrecioSupervicionDespacho[]=[];

  public desde: number = 0;
  public cargando: boolean = true;


  constructor(private supervicionServices :PreciosSupervicionDespachoService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.supervicionServices.cargarPrecios(this.desde).subscribe(
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

  guardarCambios(precio:PrecioSupervicionDespacho){
    this.supervicionServices.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado',precio.est,'success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioSupervicionDespacho){
    this.supervicionServices.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ',precio.est,'success');
      }
    )
    console.log(precio);
  }


}

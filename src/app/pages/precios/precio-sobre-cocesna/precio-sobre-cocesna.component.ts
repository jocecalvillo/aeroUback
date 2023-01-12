import { Component, OnInit } from '@angular/core';
import { PrecioSobreCocesna } from 'src/app/models/precios/precioSobreCocesna.models';
import { PreciosSobreCocesnaService } from 'src/app/services/precios/precios-sobre-cocesna.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-precio-sobre-cocesna',
  templateUrl: './precio-sobre-cocesna.component.html',
  styles: [
  ]
})
export class PrecioSobreCocesnaComponent implements OnInit {

  public totalPrecios: number=0;
  public precioSobre:PrecioSobreCocesna[]=[];
  public precioSobreTemp:PrecioSobreCocesna[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private sobreServices:PreciosSobreCocesnaService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.sobreServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioSobre=precios;
        this.precioSobreTemp=precios;
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

  guardarCambios(precio:PrecioSobreCocesna){
    this.sobreServices.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado',precio.est,'success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioSobreCocesna){
    this.sobreServices.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ',precio.est,'success');
      }
    )
    console.log(precio);
  }

}

import { Component, OnInit } from '@angular/core';
import { PreciosCalculoSeneamService } from '../../../services/precios/precios-calculo-seneam.service';
import { PrecioCalculoSeneam } from 'src/app/models/precios/precioCalculoSeneam.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-precio-calculo-seneam',
  templateUrl: './precio-calculo-seneam.component.html',
  styles: [
  ]
})
export class PrecioCalculoSeneamComponent implements OnInit {


  public totalPrecios: number=0;
  public preciosCalculo:PrecioCalculoSeneam[]=[];
  public preciosCalculoTemp:PrecioCalculoSeneam[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private calculoServices:PreciosCalculoSeneamService) { }

  
  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.calculoServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.preciosCalculo=precios;
        this.preciosCalculoTemp=precios;
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

  guardarCambios(precio:PrecioCalculoSeneam){
    this.calculoServices.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado','success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioCalculoSeneam){
    this.calculoServices.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ','success');
      }
    )
    console.log(precio);
  }


}

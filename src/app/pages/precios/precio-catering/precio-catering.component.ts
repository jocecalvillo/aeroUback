import { Component, OnInit } from '@angular/core';
import { PrecioCatering } from 'src/app/models/precios/precioCatering.models';
import { PreciosCateringService } from 'src/app/services/precios/precios-catering.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-precio-catering',
  templateUrl: './precio-catering.component.html',
  styles: [
  ]
})
export class PrecioCateringComponent implements OnInit {

  public totalPrecios: number=0;
  public precioCatering:PrecioCatering[]=[];
  public precioCateringTemp:PrecioCatering[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private cateringServices:PreciosCateringService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.cateringServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioCatering=precios;
        this.precioCateringTemp=precios;
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

  guardarCambios(precio:PrecioCatering){
    this.cateringServices.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado',precio.est,'success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioCatering){
    this.cateringServices.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ',precio.est,'success');
      }
    )
    console.log(precio);
  }

}

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PrecioServicioRampa } from '../../../models/precios/precioServicioRampa.models';
import { PreciosServicioRampaService } from '../../../services/precios/precios-servicio-rampa.service';

@Component({
  selector: 'app-precio-servicio-rampa',
  templateUrl: './precio-servicio-rampa.component.html',
  styles: [
  ]
})
export class PrecioServicioRampaComponent implements OnInit {

  public totalPrecios: number=0;
  public precioSrampa:PrecioServicioRampa[]=[];
  public precioSrampaTemp:PrecioServicioRampa[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private srampaServices:PreciosServicioRampaService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.srampaServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioSrampa=precios;
        this.precioSrampaTemp=precios;
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

  guardarCambios(precio:PrecioServicioRampa){
    this.srampaServices.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado',precio.est,'success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioServicioRampa){
    this.srampaServices.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ',precio.est,'success');
      }
    )
    console.log(precio);
  }

}

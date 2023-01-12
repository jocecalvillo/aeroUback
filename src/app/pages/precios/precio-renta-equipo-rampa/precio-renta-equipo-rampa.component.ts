import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PrecioRentaEquipoRampa } from '../../../models/precios/precioRentaEquipoRampa.models';
import { PreciosEquipoRampaService } from '../../../services/precios/precios-equipo-rampa.service';

@Component({
  selector: 'app-precio-renta-equipo-rampa',
  templateUrl: './precio-renta-equipo-rampa.component.html',
  styles: [
  ]
})
export class PrecioRentaEquipoRampaComponent implements OnInit {

  public totalPrecios: number=0;
  public preciosRentaEquipo:PrecioRentaEquipoRampa[]=[];
  public preciosRentaEquipoTemp:PrecioRentaEquipoRampa[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private equipoCamSerices: PreciosEquipoRampaService ) { }

   ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.equipoCamSerices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.preciosRentaEquipo=precios;
        this.preciosRentaEquipoTemp=precios;
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

  guardarCambios(precio:PrecioRentaEquipoRampa){
    this.equipoCamSerices.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado',precio.est,'success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioRentaEquipoRampa){
    this.equipoCamSerices.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ',precio.est,'success');
      }
    )
    console.log(precio);
  }


}

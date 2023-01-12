import { Component, OnInit } from '@angular/core';
import { PrecioPersonalRampa } from 'src/app/models/precios/precioPersonalRampa.models';
import { PreciosPersonalRampaService } from 'src/app/services/precios/precios-personal-rampa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-precio-personal-rampa',
  templateUrl: './precio-personal-rampa.component.html',
  styles: [
  ]
})
export class PrecioPersonalRampaComponent implements OnInit {

  public totalPrecios: number=0;
  public precioRampa:PrecioPersonalRampa[]=[];
  public precioRampaTemp:PrecioPersonalRampa[]=[];

  public desde: number = 0;
  public cargando: boolean = true;


  constructor(private servicesRampa:PreciosPersonalRampaService) { }

ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.servicesRampa.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalPrecios=total;
        this.precioRampa=precios;
        this.precioRampaTemp=precios;
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

  guardarCambios(precio:PrecioPersonalRampa){
    this.servicesRampa.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado','success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioPersonalRampa){
    this.servicesRampa.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ','success');
      }
    )
    console.log(precio);
  }


}

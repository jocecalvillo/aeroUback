import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PrecioPlataforma } from '../../../models/precios/precioPlataforma.model';
import { PreciosPlataformaService } from '../../../services/precios/precios-plataforma.service';

@Component({
  selector: 'app-precio-plataforma',
  templateUrl: './precio-plataforma.component.html',
  styles: [
  ]
})
export class PrecioPlataformaComponent implements OnInit {

  public totalPrecios: number=0;
  public cargando: boolean = true;
  public desde: number = 0;

  public precios:PrecioPlataforma[]=[];
  public preciosTemp:PrecioPlataforma[]=[];




  constructor(private precioPlataformaServices:PreciosPlataformaService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.precioPlataformaServices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        this.totalPrecios=total;
        this.precios=precios;
        this.preciosTemp=precios;
        this.cargando=false;
      }
    )

  }


  guardarCambios(precio:PrecioPlataforma){
    this.precioPlataformaServices.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado','success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioPlataforma){
    this.precioPlataformaServices.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ','success');
      }
    )
    console.log(precio);
  }

}

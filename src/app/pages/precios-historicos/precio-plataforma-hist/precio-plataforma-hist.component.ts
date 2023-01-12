import { Component, OnInit } from '@angular/core';
import { PrecioPlataformaHist } from 'src/app/models/preciosHistoricos/precioPlataforma.model';
import { PreciosPlataformaHistService } from 'src/app/services/preciosHistoricos/precios-plataforma.service';

@Component({
  selector: 'app-precio-plataforma-hist',
  templateUrl: './precio-plataforma-hist.component.html',
  styles: [
  ]
})
export class PrecioPlataformaHistComponent implements OnInit {

  public totalPrecios: number=0;
  public cargando: boolean = true;
  public desde: number = 0;

  public precios:PrecioPlataformaHist[]=[];
  public preciosTemp:PrecioPlataformaHist[]=[];
  constructor(private precioPlataformaServices:PreciosPlataformaHistService) { }

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


}

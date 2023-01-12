import { Component, OnInit } from '@angular/core';
import { PreciosSupervicionDespachoHistService } from 'src/app/services/preciosHistoricos/precios-supervicion-despacho.service';
import { PrecioSupervicionDespachoHist } from '../../../models/preciosHistoricos/precioSupervicionDespacho.models';

@Component({
  selector: 'app-precio-supervicion-despacho-hist',
  templateUrl: './precio-supervicion-despacho-hist.component.html',
  styles: [
  ]
})
export class PrecioSupervicionDespachoHistComponent implements OnInit {

  public totalPrecios: number=0;
  public precioSupervicion:PrecioSupervicionDespachoHist[]=[];
  public precioSupervicionTemp:PrecioSupervicionDespachoHist[]=[];

  public desde: number = 0;
  public cargando: boolean = true;


  constructor(private supervicionServices :PreciosSupervicionDespachoHistService) { }

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

}

import { Component, OnInit } from '@angular/core';
import { BitacoraVuelo } from 'src/app/interfaces/bitVuelo.interfaces';
import { BitacoraVueloGral } from 'src/app/models/bitacorasVuelo/bitacoraVueloGral.models';
import { BitacoraVueloService } from 'src/app/services/bitacora-vuelo.service';
import { BusquedasService } from 'src/app/services/busquedas.service';

@Component({
  selector: 'app-vuelo-xalrc',
  templateUrl: './vuelo-xalrc.component.html',
  styles: [
  ]
})
export class VueloXalrcComponent implements OnInit {

  public totalVuelos: number=0;
  public xalrc:BitacoraVueloGral[]=[];
  public xalrcTemp:BitacoraVueloGral[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private bitacoraVueloServices:BitacoraVueloService ,private busquedaService:BusquedasService) { }

  ngOnInit(): void {

    this.cargarDatos();
  }


  cargarDatos(){
    this.cargando=true;
    this.bitacoraVueloServices.cargarBitVuelo2(this.desde,'lrc').subscribe(
      ({total,bitVuelos})=>{
        this.totalVuelos=total;
        this.xalrc=bitVuelos;
        this.xalrcTemp=bitVuelos;
        this.cargando=false;
      }
    );
  }


  cambiarPagina(valor:number){

    this.desde+=valor;

    if(this.desde<0){
      this.desde=0;
    }else if(this.desde>=this.totalVuelos){
      this.desde-=valor;
    }
    this.cargarDatos();
  }

  buscar(termino: string){
  
    if(termino.length===0){
      return this.xalrc=this.xalrcTemp;
    }

    this.busquedaService.buscarVuelo('xaLrc',termino).subscribe(
      resp=> {
        this.xalrc=resp;
      }
    );

    return;

  }

}



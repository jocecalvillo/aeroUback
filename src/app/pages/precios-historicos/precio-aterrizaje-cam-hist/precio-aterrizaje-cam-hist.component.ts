import { Component, OnInit } from '@angular/core';
import { PrecioAterrizajeCamHist } from 'src/app/models/preciosHistoricos/precioAterrizajeCam.models';
import { PreciosAterrrizajeCamHistService} from 'src/app/services/preciosHistoricos/precios-aterrrizaje-cam.service';

@Component({
  selector: 'app-precio-aterrizaje-cam-hist',
  templateUrl: './precio-aterrizaje-cam-hist.component.html',
  styles: [
  ]
})
export class PrecioAterrizajeCamHistComponent implements OnInit {

  public totalPrecios: number=0;
  public preciosAterrizajeCam:PrecioAterrizajeCamHist[]=[];
  public preciosAterrizajeCamTemp:PrecioAterrizajeCamHist[]=[];

  public desde: number = 0;
  public cargando: boolean = true;
  public idRand:string="";
  
  constructor(private aterizajeCamSerices: PreciosAterrrizajeCamHistService) { }

  ngOnInit(): void {
    this.cargarDatos();
  
  }

  
  cargarDatos(){
    this.cargando=true;
    this.aterizajeCamSerices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        this.totalPrecios=total;
        this.preciosAterrizajeCam=precios;
        this.preciosAterrizajeCamTemp=precios;
        this.cargando=false;
        
        console.log(precios);
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

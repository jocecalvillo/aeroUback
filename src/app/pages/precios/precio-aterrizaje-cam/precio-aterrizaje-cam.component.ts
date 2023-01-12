import { Component, OnInit } from '@angular/core';
import { PrecioAterrizajeCam } from 'src/app/models/precios/precioAterrizajeCam.models';
import { PreciosAterrrizajeCamService } from 'src/app/services/precios/precios-aterrrizaje-cam.service';
import { PreciosAterrrizajeCamHistService } from 'src/app/services/preciosHistoricos/precios-aterrrizaje-cam.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-precio-aterrizaje-cam',
  templateUrl: './precio-aterrizaje-cam.component.html',
  styles: [
  ]
})
export class PrecioAterrizajeCamComponent implements OnInit {

  public totalPrecios: number=0;
  public preciosAterrizajeCam:PrecioAterrizajeCam[]=[];
  public preciosAterrizajeCamTemp:PrecioAterrizajeCam[]=[];

  public desde: number = 0;
  public cargando: boolean = true;
  public idRand:string="";

  constructor(private aterizajeCamSerices: PreciosAterrrizajeCamService ,
    private user: UsuarioService,
    private hist :PreciosAterrrizajeCamHistService
     ) { }

  ngOnInit(): void {
    this.cargarDatos();
  
  }

  cargarDatos(){
    this.cargando=true;
    this.aterizajeCamSerices.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        //console.log(precios);
        this.totalPrecios=total;
        this.preciosAterrizajeCam=precios;
        this.preciosAterrizajeCamTemp=precios;
        this.cargando=false;
        
      this.aterizajeCamSerices.generarId().subscribe(
        (resp)=>{
          console.log(resp.msg);
        }
        );
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

  guardarCambios(precio:PrecioAterrizajeCam){
    this.aterizajeCamSerices.actualizarPrecios(precio.uid,precio).subscribe(
      
      resp=>{

        this.idRand=precio.idHistorico;
        this.hist.actualizarPrecios(this.idRand,precio).subscribe();
        
        Swal.fire('Actualizado',precio.est,'success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioAterrizajeCam){
    this.idRand=precio.idHistorico;

    this.aterizajeCamSerices.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.hist.eliminarPrecios(this.idRand).subscribe();
        this.cargarDatos();
        Swal.fire('Eliminado ',precio.est,'success');
      }
    )
    console.log(precio);
  }



}

import { Component, OnInit } from '@angular/core';
import { SumaryXa } from 'src/app/models/vitacoras/vitacorasXa';
import { SummaryMatriculasService } from 'src/app/services/summary/summary-matriculas.service';

@Component({
  selector: 'app-sumary-xa-lfr',
  templateUrl: './sumary-xa-lfr.component.html',
  styles: [
  ]
})
export class SumaryXaLfrComponent implements OnInit {

  public totalMatricula: number=0;
  public efr:SumaryXa[]=[]
  public efrTemp:SumaryXa[]=[]

  public desde: number = 0;
  public cargando: boolean = true;

  minDate="2020-01-01";
  maxDate="3000-01-01";



  constructor(private summary:SummaryMatriculasService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.summary.cargarLfr(this.desde).subscribe(
      ({total,precios})=>{
        console.log(precios);
        this.totalMatricula=total;
        this.efr=precios;
        this.efrTemp=precios;
        this.cargando=false;
      }
    )

  }

  cambiarPagina(valor:number){

    this.desde+=valor;

    if(this.desde<0){
      this.desde=0;
    }else if(this.desde>=this.totalMatricula){
      this.desde-=valor;
    }
    this.cargarDatos();
  }


}

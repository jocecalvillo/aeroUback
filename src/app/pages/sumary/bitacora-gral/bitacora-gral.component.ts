import { Component, OnInit } from '@angular/core';
import { BitacoraGral } from 'src/app/models/bitacorasVuelo/bitacoraGral.models';
import { BitacoraGralService } from 'src/app/services/bitacora-gral.service';

@Component({
  selector: 'app-bitacora-gral',
  templateUrl: './bitacora-gral.component.html',
  styles: [
  ]
})
export class BitacoraGralComponent implements OnInit {

  constructor(private bitacorasGral:BitacoraGralService) { }

  minDate="2020-01-01";
  maxDate="3000-01-01";


  TodayDate:any;
  date1=new Date();


  currentYear=this.date1.getUTCFullYear();
  currenMonth=this.date1.getUTCMonth();
  currentDay=this.date1.getUTCDate();

  FinalMounth:any;
  FinalDay:any;

  public bitGral:BitacoraGral[]=[];
  public bitGralTemp:BitacoraGral[]=[];


  public desde: number = 0;
  public cargando: boolean = true;

  public totalVuelos: number=0;


  ngOnInit(): void {


    if(this.currenMonth<10){
      this.FinalMounth="0"+this.currenMonth;
    }else{
      this.FinalMounth=this.currenMonth;
    }

    if(this.currentDay<10){
      this.FinalDay="0"+this.currentDay;
    }else{
      this.FinalDay=this.currentDay;
    }

    this.TodayDate=this.currentYear +"-"+this.currenMonth+"-"+this.FinalDay;
    console.log(this.TodayDate);

  }

  cargarDatos(){
    this.cargando=true;
    this.bitacorasGral.cargarBitGral(this.desde).subscribe(
      ({total,bitVuelos})=>{
        this.totalVuelos=total;
        this.bitGral=bitVuelos;
        this.bitGralTemp=bitVuelos;
        this.cargando=false;
        console.log(bitVuelos);
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

 

}

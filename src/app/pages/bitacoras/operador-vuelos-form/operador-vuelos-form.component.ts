import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperadorVuelosForm } from 'src/app/models/operadorVuelo.models';
import { OperadorVuelosService } from 'src/app/services/operador-vuelos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-operador-vuelos-form',
  templateUrl: './operador-vuelos-form.component.html',
  styles: [
  ]
})
export class OperadorVuelosFormComponent implements OnInit {


  public operadores:OperadorVuelosForm= new OperadorVuelosForm();
  public titulo :string="Crear Beterminacion Operadores";

  constructor(private opVuelosServices: OperadorVuelosService,private router:Router) { }

  ngOnInit(): void {
  }

  public create():void{
    console.log(this.operadores)
    this.opVuelosServices.crearOperadorVuelo(this.operadores).subscribe(
      precioAter=>{
        this.router.navigate(['/dashboard/bitOperadorVuelos']),

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nuevo Operador Vuelo',
          showConfirmButton: false,
          timer: 2500
        })
        
      }
    )

  }


  public regreso():void{
    console.log("Cancelar");
    this.router.navigate(['/dashboard/bitOperadorVuelos'])
  }

}

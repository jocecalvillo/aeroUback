import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeterminacionOperadoresService } from 'src/app/services/determinacion-operadores.service';
import Swal from 'sweetalert2';
import { DeterminacionOperadoresForm } from '../../../models/deterOperadores.models';

@Component({
  selector: 'app-deter-operadores-form',
  templateUrl: './deter-operadores-form.component.html',
  styles: [
  ]
})
export class DeterOperadoresFormComponent implements OnInit {


  public operadores:DeterminacionOperadoresForm= new DeterminacionOperadoresForm();
  public titulo :string="Crear Beterminacion Operadores";

  constructor(private detOperadoresServices: DeterminacionOperadoresService,private router:Router) { }

  ngOnInit(): void {
  }

  public create():void{
    console.log(this.operadores)
    this.detOperadoresServices.crearOperador(this.operadores).subscribe(
      precioAter=>{
        this.router.navigate(['/dashboard/bitDeterOperadores']),

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nuevo Precio Determinación Operador',
          showConfirmButton: false,
          timer: 2500
        })
        
      }
    )

  }


  public regreso():void{
    console.log("Cancelar");
    this.router.navigate(['/dashboard/bitDeterOperadores'])
  }


}

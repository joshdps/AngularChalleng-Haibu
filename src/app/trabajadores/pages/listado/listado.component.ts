import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../../interfaces/trabajador.interface';
import { TrabajadorService } from '../../services/trabajador.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  trabajadores: Trabajador[] = []

  constructor( private trabajadoresService: TrabajadorService // Inyeccion del servicio
    ) { }

  ngOnInit(): void {

    // Llamada al servicio para obtener el listado de trabajadores desde API
    this.trabajadoresService.getTrabajadores()
      .subscribe( trabajadores =>  this.trabajadores = trabajadores );
      
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Trabajador } from '../../interfaces/trabajador.interface';
import { TrabajadorService } from '../../services/trabajador.service';
import * as moment from 'moment';


@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5px}
  `]
})
export class TrabajadorComponent implements OnInit {

  // Declaraciones de variables 
  trabajador!: Trabajador;
  direccion: string = '';
  estadoRut: string = 'Válido';
  estadoFechaNacimiento: string = 'Válida';

  // Mapping  para pipe i18Select de estado de trabajador
  estadoTrabajadorMap = {
    '0' : 'Inactivo',
    '1' : 'Activo'
  }


  constructor(
    private activatedRoute: ActivatedRoute,
    private trabajadoresService: TrabajadorService // Importa servicio
  ) { }

  ngOnInit(): void {

    // Se toma el parámetro Id de la URL y rescata trabajador por ese valor
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.trabajadoresService.getTrabajadorPorId(id) ),
      )
      .subscribe(trabajador => {

        // Valida el RUT
        if (!this.trabajadoresService.validaRut(trabajador.rut)) this.estadoRut = 'Inválido';

        const { calle, numero, comuna, nombre } = trabajador.direccion
        
        // Si existe el campo comuna se agrega a la dirección, si no, se envia el campo nombre
        if (trabajador.direccion.comuna ) {
          this.direccion = ` ${calle} ${numero}, ${comuna}`
        }else{
          this.direccion = ` ${calle} ${numero}, ${nombre}`
        } 
        

        // Valida que el formato de la fecha sea correcto:
        if ( !moment( trabajador.fechaNacimiento, 'DD/MM/YYYY', true ).isValid() )
         this.estadoFechaNacimiento = 'Inválida'
        
        
        
        

        //Se toma el trabajador del response
        return this.trabajador = trabajador
      })
  }



}

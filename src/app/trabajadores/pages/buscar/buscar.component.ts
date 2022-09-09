import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// Libs de Terceros
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

// Recursos propios
import { TrabajadorService } from '../../services/trabajador.service';
import { Trabajador } from '../../interfaces/trabajador.interface';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  //Declaración de variables 
  keyword: string = '';  // string de busqueda ingresado por el usuario en el autocomplete
  trabajadores: Trabajador[] = []; // Contiene el listado total de los trabajadores a mostrar inicialmente
  trabajadoresResultados: Trabajador[] = []  // Contiene el resultados de la busqueda en autocomplete
  trabajadorSeleccionado: Trabajador[] | undefined = [];
  ultimaSeleccionada: string = ''


  constructor(private trabajadoresService: TrabajadorService) { }

  ngOnInit(): void {
    this.trabajadoresService.getTrabajadores()
      .subscribe( trabajadores => this.trabajadores = trabajadores )
  }

  // Metodo buscar se valida si no se ha seleccionado ningun trabajador del listado
  buscar() {
    if ( this.trabajadorSeleccionado === undefined ) return
  
    // Llamada a metodo del servicio para obtener trabajadores que coincidan con el nombre
    this.trabajadoresService.getTrabajadoresPorNombre( this.keyword )
      .subscribe( trabajadores => this.trabajadores = trabajadores)
  }

    // Llamada a metodo del servicio para obtener trabajadores por el Id seleccionado
    opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

    if ( !event.option.value ) {
      this.trabajadorSeleccionado = undefined
      return
    }
    const trabajador: Trabajador = event.option.value;
    this.keyword = trabajador.id.toString();

    this.trabajadoresService.getTrabajadorPorId( this.keyword! )
      .subscribe( trabajador => {
            this.trabajadorSeleccionado!.pop()
        return this.trabajadorSeleccionado!.push( trabajador )
      });
  }
}

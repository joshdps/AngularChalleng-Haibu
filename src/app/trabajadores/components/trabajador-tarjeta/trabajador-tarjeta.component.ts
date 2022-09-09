import { Component, Input } from '@angular/core';
import { Trabajador } from '../../interfaces/trabajador.interface';

@Component({
  selector: 'app-trabajador-tarjeta',
  templateUrl: './trabajador-tarjeta.component.html',
  styles: [`
    mat-card{ margin-top: 20px;}
    mat-card:hover{
      background-color: lightblue;
      cursor: pointer;
    }
    `
  ]
})
export class TrabajadorTarjetaComponent {
  
  
  @Input() trabajadores: Trabajador[] = []
  
  color:string = 'primary';
  
  constructor() { }
}

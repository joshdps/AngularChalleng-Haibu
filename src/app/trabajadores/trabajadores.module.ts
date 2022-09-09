/*  
** Modulos de Angular
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

/*  
** Componentes de terceros
*/

/*  
** Componentes Propios
*/
import { TrabajadoresRoutingModule } from './trabajadores-routing.module';
import { MaterialModule } from '../material/material.module';

import { BuscarComponent } from './pages/buscar/buscar.component';
import { TrabajadorComponent } from './pages/trabajador/trabajador.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { TrabajadorTarjetaComponent } from './components/trabajador-tarjeta/trabajador-tarjeta.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    BuscarComponent,
    HomeComponent,
    TrabajadorComponent,
    ListadoComponent,
    TrabajadorTarjetaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    TrabajadoresRoutingModule,
    MaterialModule
    

  ]
})
export class TrabajadoresModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscarComponent } from './pages/buscar/buscar.component';
import { TrabajadorComponent } from './pages/trabajador/trabajador.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';




const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [

      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: ':id',
        component: TrabajadorComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TrabajadoresRoutingModule { }

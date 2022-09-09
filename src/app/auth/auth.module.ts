/*  
** Modulos de Angular
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*  
** Componentes propios
*/
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }

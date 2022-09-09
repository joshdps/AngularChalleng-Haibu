import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container{margin: 10px}
  `]
})
export class HomeComponent implements OnInit{

  // getter para validar autorización
  get auth(){
    return this.authService.auth;
  }

  constructor( private router: Router,
               private authService: AuthService // Se inyecta el servicio Auth para validar el login
  ) { }

  // Deslogeo
  logout(){
    this.router.navigate(['./auth'])
  }

  ngOnInit(): void {
    this.auth;
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  div {
    position: fixed; 
    left: 45%; 
    top: 50%
  }  
    `] 
})
export class LoginComponent {

  constructor( private router: Router,
               private authService: AuthService) { }

  login(){

    this.authService.login('1')
      .subscribe( user => {
        if ( user.id ){
          this.router.navigate(['./trabajadores']);
        }
      })
   
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  email: string = '';
  password: string = '';

  iniciarCesion:string|null = null;

  constructor(private router:Router, private authService: AuthService){}

  ngOnInit():void{

    this.iniciarCesion = sessionStorage.getItem('token');

  }

  loginUser():void{

    //email:eve.holt@reqres.in
    //password: 1234
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        if(response.token){
          sessionStorage.setItem('token', response.token);
          this.router.navigate(['/home']);

        }
      },
      (error) => console.log(`ha ocurrido un error ${error}`),
      () => console.info('Proceso de login terminado')
    )

    //sessionStorage.setItem('token', '1234567');
    //this.router.navigate(['/contactos']);
  }

}

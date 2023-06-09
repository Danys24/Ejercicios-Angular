import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  //email: string = '';
  //password: string = '';

  iniciarCesion:string|null = null;

  constructor(private router:Router, private authService: AuthService){}

  ngOnInit():void{

    this.iniciarCesion = sessionStorage.getItem('token');

  }

  loginUser(value:any):void{

    let {email, password} = value;

    //email:eve.holt@reqres.in
    //password: 1234
    this.authService.login(email,password).subscribe(
      (response) => {
        if(response.token){
          sessionStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);

        }
      },
      (error) => console.log(`ha ocurrido un error ${error}`),
      () => console.info('Proceso de login terminado')
    )

    //sessionStorage.setItem('token', '1234567');
    //this.router.navigate(['/contactos']);
  }

}

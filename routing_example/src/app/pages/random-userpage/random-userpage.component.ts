import { Component, OnInit } from '@angular/core';
import { Contacto, Results } from 'src/app/models/randomuser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-userpage',
  templateUrl: './random-userpage.component.html',
  styleUrls: ['./random-userpage.component.scss']
})
export class RandomUserpageComponent implements OnInit{

  contact: Contacto | undefined;

  constructor(private randomUserService:RandomUserService){}

  ngOnInit():void{

    this.randomUserService.obtenerRandomUser().subscribe((response:Results) => {

      this.contact = response.results[0];

    });
  }

  generateRandomContact(){

    this.randomUserService.obtenerRandomUser().subscribe(
      {
        next: (response:Results) => {
          this.contact = response.results[0];
        },
        error: (error) => console.error(`Error: ${error}`),
        complete: () => console.info('Peticion Terminada')
      }
    )
  }

  obtenerListaUsers(n:number){
    this.randomUserService.obtenerRandomUsers(n).subscribe(
      {
        next: (response:Results) => {
          console.log(response);
        },
        error: (error) => console.error(`Error: ${error}`),
        complete: () => console.info('Peticion Terminada')
      }
    )
  }

}

import { Component, Input, OnInit } from '@angular/core';

import { RandomUserService } from '../../services/random-user.service';

import { Contacto, Results } from 'src/app/models/randomuser';


@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})

export class RandomUserComponent implements OnInit{

  @Input() randomContact: Contacto | undefined;

  constructor(){}

  ngOnInit():void{

  }

}

import { Component, OnInit, OnChanges } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnChanges{

  title = 'routing_example';
  cerrarCesion:string|null=null;

  constructor(private router:Router){}

  ngOnInit():void{
    this.cerrarCesion = sessionStorage.getItem('token');
  }

  ngOnChanges():void{
  }

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

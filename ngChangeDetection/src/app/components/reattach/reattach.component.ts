import { Component, OnInit, Injectable, ChangeDetectorRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PrecioBitcoinProvider {

  precio: number = 100;

  constructor(){
    setInterval(() => {
      this.precio = Math.floor(Math.random() * 1000) + 100;
      console.log(`Precio Actual: ${this.precio}`);
    }, 500)
  }

}

@Component({
  selector: 'app-reattach',
  templateUrl: './reattach.component.html',
  styleUrls: ['./reattach.component.scss'],
  inputs: ['enVivo']
})
export class ReattachComponent implements OnInit{

  mostrarEnVivo: boolean = true;

  constructor(private _ref:ChangeDetectorRef, public precioBitcoinProvider: PrecioBitcoinProvider){}

  set enVivo(valor: boolean){
    this.mostrarEnVivo = valor;

    if(valor){
      this._ref.reattach();
    }else{
      this._ref.detach();
    }

    //this._ref.markForCheck()

  }

  ngOnInit():void{



  }

}

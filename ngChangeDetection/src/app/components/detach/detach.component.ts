import { Component, OnInit, Injectable, ChangeDetectorRef } from '@angular/core';

import * as Mock from 'mockjs';

@Injectable({
  providedIn: 'root'
})

export class DataListProvider{

  get data(){
    const RandomName = Mock.Random;
    return [
        RandomName.first(),
        RandomName.first(),
        RandomName.first(),
        RandomName.first(),
        RandomName.first(),
      ];
  }

}

@Component({
  selector: 'app-detach',
  templateUrl: './detach.component.html',
  styleUrls: ['./detach.component.scss']
})
export class DetachComponent implements OnInit{

  constructor(private _ref:ChangeDetectorRef, public dataList:DataListProvider){}

  ngOnInit():void{


    //Desacoplar el componente del html a traves del detach
    this._ref.detach();

    //cuando un componente esta desacoplado de decirle que replique los cambios en el html
    //1. con el detectChanges()
    //2. con el reattach(): que sirve para volver a acoplar el componente

    //cada 3 segundos, le decimos a Angular que revise los nombres generados
    // es decir, que revise los cambios que detecte el componente y los replique en el html

    setInterval(() =>{
      this._ref.detectChanges();
    }, 3000)

  }

}

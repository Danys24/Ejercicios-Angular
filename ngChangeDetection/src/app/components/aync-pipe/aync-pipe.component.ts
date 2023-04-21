import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-aync-pipe',
  templateUrl: './aync-pipe.component.html',
  styleUrls: ['./aync-pipe.component.scss']
})
export class AyncPipeComponent implements OnInit{

  @Input() items$ !: Observable<any>;

  constructor(){}

  ngOnInit():void{

  }

}

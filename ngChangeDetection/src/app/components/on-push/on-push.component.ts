import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.scss'],
  //changeDetection: ChangeDetectionStrategy.Default
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit{

  segundos:number = 0;

  constructor(){

  }

  ngOnInit():void {

    setInterval(() => {
      this.segundos++;

      console.log(`segundos Transcurridos ${this.segundos} segundos`);
    }, 1000);
  }

}

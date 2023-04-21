import { Component } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngChangeDetection';

  live: boolean = true;

  items = [{
    numero: 0
  }];

  items$ = new BehaviorSubject(this.items);

  addItem(){

    const nuevoItem = Math.floor(Math.random() * 100) + 1;

    this.items.push(
      {
        numero: nuevoItem
      }

    );

    this.items$.next(this.items);

  }

}

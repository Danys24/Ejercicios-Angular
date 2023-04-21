import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OnPushComponent } from './components/on-push/on-push.component';
import { DetachComponent } from './components/detach/detach.component';
import { ReattachComponent } from './components/reattach/reattach.component';
import { NgZoneComponent } from './components/ng-zone/ng-zone.component';
import { AyncPipeComponent } from './components/aync-pipe/aync-pipe.component';

import { DataListProvider } from './components/detach/detach.component';
import { PrecioBitcoinProvider } from './components/reattach/reattach.component';

@NgModule({
  declarations: [
    AppComponent,
    OnPushComponent,
    DetachComponent,
    ReattachComponent,
    NgZoneComponent,
    AyncPipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataListProvider,
    PrecioBitcoinProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

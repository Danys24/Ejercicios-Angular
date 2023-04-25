import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemploAttrComponent } from './components/ejemplo-attr/ejemplo-attr.component';
import { EjemploStructComponent } from './components/ejemplo-struct/ejemplo-struct.component';
import { EjemploLifeCycleComponent } from './components/ejemplo-life-cycle/ejemplo-life-cycle.component';
import { AttrDirective } from './directives/attr.directive';
import { StructDirective } from './directives/struct.directive';
import { LifeCycleDirective } from './directives/life-cycle.directive';

import { AuthFormsModule } from './modules/auth-forms/auth-forms.module';

@NgModule({
  declarations: [
    AppComponent,
    EjemploAttrComponent,
    EjemploStructComponent,
    EjemploLifeCycleComponent,
    AttrDirective,
    StructDirective,
    LifeCycleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthFormsModule
  ],
  providers: [
    // Disponemos de las estrategias de precarga
    OptInPreloadingStrategy,
    NetworkAwarePreloadStrategy,
    OnDemandPreloadingStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

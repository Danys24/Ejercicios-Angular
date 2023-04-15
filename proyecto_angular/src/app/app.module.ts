import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//modulos de angular material
import { MatFormFieldModule } from '@angular/material/form-field';

//Locale para que los formatos obtenidos de los PIPES sean transformados a un formato en español
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
registerLocaleData(localeES); // registramos el LOCALE_ID de 'es' para poder usarlo en los pipes

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ListsModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalcularPuntosPipe } from './pipes/calcular-puntos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    EjemploPipesComponent,
    MultiplicaPipe,
    CalcularPuntosPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ListsModule,
    //HttpClientModule sirve para hacer peticiones http
    HttpClientModule,
    //importmos Reactive formsModule para trabajar con formualarios reactivos
    ReactiveFormsModule,
    //modulos de angular material
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [
    //registramos el Locale ES para que los pipes salgan español
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArbolComponent } from './components/arbol/arbol.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    ArbolComponent
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ArbolComponent

  ]
})
export class MaterialModule { }

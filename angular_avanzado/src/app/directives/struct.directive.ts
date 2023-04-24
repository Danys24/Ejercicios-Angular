import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[rolCorrecto]'
})
export class StructDirective {

  private _mostrando: boolean = false;

  constructor(private _templateRef: TemplateRef<any>, private _viewContainer: ViewContainerRef) { }

  @Input() set rolCorrecto(condicion: boolean){
    if(condicion && !this._mostrando){
      this._viewContainer.createEmbeddedView(this._templateRef);
      this._mostrando = true;
    }else{
      this._viewContainer.clear();
      this._mostrando = false;
    }
  }

}

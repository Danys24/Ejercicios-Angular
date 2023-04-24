import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  @Input() defaultColor = '';
  @Input('appAttr') highLightColor = '';

  constructor(private _elementRef:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this._cambiarColor(this.highLightColor || this.defaultColor || 'tomato');

  }

  @HostListener('mouseleave') onMouseLeave(){
    this._cambiarColor(null);

  }

  //metodo que cambia el color de fondo de un componente
  private _cambiarColor(color:string | null){

    this._elementRef.nativeElement.style.backgroundColor = color;

  }

}

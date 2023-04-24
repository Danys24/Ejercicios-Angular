import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMouseOver]'
})
export class MouseOverDirective {

  @Input() defaultColor = '';
  @Input('appMouseOver') highLightColor = '';

  @HostListener('mouseenter') onMouseEnter(){
    this._changeColor(this.highLightColor || this.defaultColor || 'blue', 'white');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this._changeColor(null, null);
  }

  constructor(private _elementRef:ElementRef) { }

  private _changeColor(backgroundColor:string | null, color:string | null){
    this._elementRef.nativeElement.style.backgroundColor = backgroundColor;
    this._elementRef.nativeElement.style.color = color;
  }

}

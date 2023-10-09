import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
@HostBinding('style.backgroundColor') color:any;
  constructor() { }
@HostListener('mouseenter') mouseenter(){// en ecoute le click ou le mouseover
  this.color='red';
}
@HostListener('mouseleave') mouseleave(){// en ecoute le click ou le mouseover
  this.color='blue';
}

@HostBinding('style.color') changeStyle:any;
@HostListener('keyup') keyup(){
  this.changeStyle='green';
}
}

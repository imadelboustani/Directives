import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({selector: '[appBasicHighLight]',})
export class BasicHightLightDirective implements OnInit {
constructor(private elementRef: ElementRef){
}
ngOnInit() {
  this.elementRef.nativeElement.style.backgroundColor = 'red' ;
}
}

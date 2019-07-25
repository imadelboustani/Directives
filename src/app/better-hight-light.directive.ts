import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHightLight]'
})
export class BetterHightLightDirective implements OnInit {
  @Input('lawal') DefaultColor = 'transparent' ;
  @Input('tani') HighlightColor = 'green' ;
@HostBinding('style.backgroundColor') BackGroundColor ;
  constructor( private elemRef: ElementRef, private renderer: Renderer2) {this.renderer.destroy(); }
  ngOnInit() {
    this.BackGroundColor = this.DefaultColor;
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'green');
    this.renderer.destroy();
  }
@HostListener('mouseenter')  mouse() {
    this.BackGroundColor = this.HighlightColor;
  // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'green');
}
@HostListener('mouseleave') fuckingLeaving() {
   // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent');
  this.BackGroundColor = this.DefaultColor;
  }
}

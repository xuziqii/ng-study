import { Directive, Renderer2, ElementRef, OnInit, HostBinding } from '@angular/core'

@Directive({
  selector: '[appGirdItem]'
})
export class GirdItemDirective implements OnInit {
  constructor (private elr: ElementRef, private renderer2: Renderer2) {
  }
  ngOnInit(): void {
    this.renderer2.setStyle(this.elr.nativeElement, 'display', 'grid')
    this.renderer2.setStyle(this.elr.nativeElement, 'grid-template-areas', `'image' 'title'`)
    this.renderer2.setStyle(this.elr.nativeElement, 'place-items', 'center')
    this.renderer2.setStyle(this.elr.nativeElement, 'width', '4rem')
    this.renderer2.setStyle(this.elr.nativeElement, 'background-color', 'green')
  }
}

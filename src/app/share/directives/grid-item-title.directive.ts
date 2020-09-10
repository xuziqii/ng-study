import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core'

@Directive({
  selector: '[appGirdItemTitle]'
})
export class GirdItemTitleDirective implements OnInit{
  constructor (private elr: ElementRef, private renderer2: Renderer2) {
  }
  ngOnInit(): void {
    this.renderer2.setStyle(this.elr.nativeElement, 'grid-area', 'title')
  }
}

import { Directive, Renderer2, ElementRef, Input, OnInit, HostListener } from '@angular/core'

@Directive({
  selector: '[appGirdItemImage]'
})
export class GirdItemImageDirective implements OnInit {
  @Input() appGirdItemImage = '2rem'
  @Input() fitMode = 'cover'
  constructor (private elr: ElementRef, private renderer2: Renderer2) {
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class
    this.renderer2.setStyle(this.elr.nativeElement, 'grid-area', 'image')
    this.renderer2.setStyle(this.elr.nativeElement, 'width', this.appGirdItemImage)
    this.renderer2.setStyle(this.elr.nativeElement, 'height', this.appGirdItemImage)
    this.renderer2.setStyle(this.elr.nativeElement, 'object-fit', this.fitMode)
  }

  @HostListener('click', ['$event.target'])
  handleClick(target) {
    console.log(target)
  }
}

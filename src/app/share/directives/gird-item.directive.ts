import { Directive, HostBinding, Input } from '@angular/core'

@Directive({
  selector: '[appGirdItem]'
})
export class GirdItemDirective {
  @HostBinding('style.display') display = 'grid'
  @HostBinding('style.grid-template-areas') templateArea = `'image' 'title'`
  @HostBinding('style.place-items') @Input() placeItems = 'center'
  @HostBinding('style.background-color') bgColor = 'green'
}

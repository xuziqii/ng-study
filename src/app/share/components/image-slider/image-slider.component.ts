import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  constructor() { }

  @ViewChild('refTest', {static: true}) refTest: ElementRef

  ngOnInit() {
    console.log(this.refTest.nativeElement)
  }

}

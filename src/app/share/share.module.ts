import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShareRoutingModule } from './share-routing.module';
import { ScrollTabsComponent, ImageSliderComponent, HorizontalGridComponent } from './components'

@NgModule({
  declarations: [
    ScrollTabsComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    FormsModule,
  ],
  exports: [
    ScrollTabsComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
  ],
})
export class ShareModule { }

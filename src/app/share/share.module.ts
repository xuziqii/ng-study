import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShareRoutingModule } from './share-routing.module';
import { ScrollTabsComponent, ImageSliderComponent, HorizontalGridComponent } from './components'
import { GirdItemDirective, GirdItemImageDirective, GirdItemTitleDirective } from './directives'
@NgModule({
  declarations: [
    ScrollTabsComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GirdItemDirective,
    GirdItemImageDirective,
    GirdItemTitleDirective,
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
    GirdItemDirective,
    GirdItemImageDirective,
    GirdItemTitleDirective,
  ],
})
export class ShareModule { }

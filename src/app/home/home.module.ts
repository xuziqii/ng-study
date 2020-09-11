import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

import { ShareModule } from '../share'
import { HomeContainerComponent } from './components'

@NgModule({
  declarations: [
    HomeContainerComponent
  ],
  imports: [
    HomeRoutingModule,
    ShareModule,
  ],
  exports: [
  ]
})
export class HomeModule { }

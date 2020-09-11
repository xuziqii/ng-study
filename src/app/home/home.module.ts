import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

import { ShareModule } from '../share'
import { HomeContainerComponent, HomeDetailComponent } from './components'

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
  ],
  imports: [
    HomeRoutingModule,
    ShareModule,
  ],
  exports: [
  ]
})
export class HomeModule { }

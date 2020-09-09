import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

import { ShareModule } from '../share'

@NgModule({
  declarations: [],
  imports: [
    HomeRoutingModule,
    ShareModule,
  ],
  exports: [
  ]
})
export class HomeModule { }

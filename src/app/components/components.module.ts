import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import {ButtonModule} from 'primeng/button';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    BannerComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    BannerComponent
  ]
})
export class ComponentsModule { }

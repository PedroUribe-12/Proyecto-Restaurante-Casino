import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ButtonModule} from 'primeng/button';
import { CardComponent } from './card/card.component';
import { CardModule} from 'primeng/card';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule} from 'primeng/carousel';
import {RatingModule} from 'primeng/rating';
import { CardChefComponent } from './card-chef/card-chef.component';
import {AngularTiltModule} from 'angular-tilt'

@NgModule({
  declarations: [
    BannerComponent,
    CardComponent,
    CarouselComponent,
    CardChefComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    RatingModule,
    AngularTiltModule 
  ],
  exports: [
    BannerComponent,
    CardComponent,
    CarouselComponent,
    CardChefComponent
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ButtonModule} from 'primeng/button';
import { CardComponent } from './card/card.component';
import { CardModule} from 'primeng/card';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule} from 'primeng/carousel';

@NgModule({
  declarations: [
    BannerComponent,
    CardComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    CarouselModule,
  ],
  exports: [
    BannerComponent,
    CardComponent,
    CarouselComponent
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DessertsComponent } from './desserts/desserts.component';
import { ComponentsModule } from '../components/components.module';
import { PlatillosComponent } from './platillos/platillos.component';



@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    AboutUsComponent,
    DessertsComponent,
    PlatillosComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }

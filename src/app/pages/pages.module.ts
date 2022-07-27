import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ComponentsModule } from '../components/components.module';
import { PlatillosComponent } from './platillos/platillos.component';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {ImageModule} from 'primeng/image';

@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    AboutUsComponent,
    PlatillosComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ButtonModule,
    ChipsModule,
    InputTextModule,
    InputTextareaModule,
    ImageModule
  ]
})
export class PagesModule { }

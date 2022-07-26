import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DessertsComponent } from './pages/desserts/desserts.component';
import { HomeComponent } from './pages/home/home.component';
import { PlatillosComponent } from './pages/platillos/platillos.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'sobre_nosotros',
    component: AboutUsComponent
  },
  {
    path:'contacto',
    component: ContactComponent
  },
  {
    path:'postres',
    component: DessertsComponent
  },
  {
    path:'platillos',
    component: PlatillosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

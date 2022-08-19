import { Component } from '@angular/core';
import * as AOS from 'aos'
import { UsuariosService } from './services/usuarios.service';
import { Usuario } from './shared/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restaurante';

  constructor(private servicioUsuarios: UsuariosService){

  }

  ngOnInit(){
    AOS.init(),
    window.addEventListener('load',AOS.refresh)

    this.servicioUsuarios.getUsuarios();
  }
}

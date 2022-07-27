import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { 
    window.addEventListener("scroll", function(){
      var menubar:any = this.document.querySelector(".p-component");
      menubar.classList.toggle("abajo", this.window.scrollY>0)
    })
  }

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio',
        routerLink: 'home'
      },
      {
        label: 'Platillos',
        routerLink: 'platillos'
      },
      {
        label: 'Contacto',
        routerLink: 'contacto'
      },
      {
        label: 'Nosotros',
        routerLink: 'sobre_nosotros'
      }
  ];
  }

}

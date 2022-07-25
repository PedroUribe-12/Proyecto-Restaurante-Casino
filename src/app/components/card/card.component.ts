import { Component, OnInit } from '@angular/core';
import { Chefs } from 'src/app/shared/chefs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  chefs: Chefs[] = [];

  constructor() {}

  ngOnInit(): void {
    this.chefs = [
      {
        nombre:'Gordon Ramsi',
        descripcion:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo veritatis dolorum, vero molestiae amet.',
        imagen:'../../../assets/chefs/gordon_ramsey-removebg-preview.png',
        e_micheline:2
      },
      {
        nombre:'Massimo Bottura',
        descripcion:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo veritatis dolorum, vero molestiae amet.',
        imagen:'../../../assets/chefs/Massimo Bottura.png',
        e_micheline:2
      },
      {
        nombre:'Christophe Krywonis',
        descripcion:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo veritatis dolorum, vero molestiae amet.',
        imagen:'../../../assets/chefs/Christophe Krywonis.png',
        e_micheline:2
      },
      {
        nombre:'Donato de Santi',
        descripcion:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo veritatis dolorum, vero molestiae amet.',
        imagen:'../../../assets/chefs/Donato de Santi.png',
        e_micheline:2
      }
    ]
  }

}

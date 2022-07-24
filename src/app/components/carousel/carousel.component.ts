import { Component, OnInit } from '@angular/core';
import { Platillo } from 'src/app/shared/platillo';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  responsiveOptions: any[] = [];

  constructor() { 

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
  }

  platillos: Platillo[] = [{
    nombre:'Qcy',
    precio: 10,
    imagen:'https://i.pinimg.com/564x/38/34/83/383483c4ed4a62bed7451f9bddccb521.jpg',
    descripcion:'Hola como te va'
    },
    {
      nombre:'Qcy',
      precio: 15,
      imagen:'https://i.pinimg.com/564x/8d/48/5e/8d485e592edbfae2943842deff17a9ac.jpg',
      descripcion:'Hola como te va'
    },
    {
      nombre:'Qcy',
      precio: 20,
      imagen:'https://i.pinimg.com/564x/70/3f/a6/703fa6f1251461c8e85e336b04ce6f2b.jpg',
      descripcion:'Hola como te va'
    },
  ]

}

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
          breakpoint: '2000px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '1074px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '842px',
          numVisible: 1,
          numScroll: 1
      }
      
    ];
  }

  ngOnInit(): void {
  }

  val3: number = 5;

  platillos: Platillo[] = [{
      nombre: 'Magret con pure de remolacha', 
      precio: 10,
      imagen:'../../../assets/platillos/2.jpg',
      descripcion:'Hola como te va',
    },
    {
      nombre:'Magret con salsa granada',
      precio: 15,
      imagen:'../../../assets/platillos/1.jpg',
      descripcion:'Hola como te va',
    },
    {
      nombre:'Beef Wellington',
      precio: 20,
      imagen:'../../../assets/platillos/3.jpg',
      descripcion:'Hola como te va',
    },
  ]
}

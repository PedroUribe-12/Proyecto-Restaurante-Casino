import { Component, OnInit } from '@angular/core';
import { Platillo2 } from 'src/app/shared/platillo2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  responsiveOptions: any[] = [];

  constructor() {
    this.responsiveOptions = [
      {
          breakpoint: '2000px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '1173px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '931px',
          numVisible: 1,
          numScroll: 1
      }
      
    ];
  }

  ngOnInit(): void {
  }

  val3: number = 5;

  platillos2: Platillo2[] = [{
      nombre: 'Salmon con tomates', 
      precio: 20,
      imagen:'../../../assets/platillos/4.jpg',
    },
    {
      nombre:'Camaron en salsa',
      precio: 25,
      imagen:'../../../assets/platillos/7.png',
    },
    {
      nombre:'Sushi',
      precio: 25,
      imagen:'../../../assets/platillos/9.jpg',
    },
  ]

  platillos: Platillo2[] = [
    {
      nombre: 'Magret con pure de remolacha', 
      precio: 10,
      imagen:'../../../assets/platillos/2.jpg',
    },
    {
      nombre:'Magret con salsa granada',
      precio: 15,
      imagen:'../../../assets/platillos/1.jpg',
    },
    {
      nombre:'Beef Wellington',
      precio: 20,
      imagen:'../../../assets/platillos/3.jpg',
    }
  ]

}

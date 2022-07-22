import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  valores: string[] = [];

  public autoResize: boolean = true;

  valueIconLeft: any;

  constructor() { }

  ngOnInit(): void {
  }

}

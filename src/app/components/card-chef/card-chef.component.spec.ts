import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChefComponent } from './card-chef.component';

describe('CardChefComponent', () => {
  let component: CardChefComponent;
  let fixture: ComponentFixture<CardChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcodeComponent } from './cardcode.component';

describe('CardcodeComponent', () => {
  let component: CardcodeComponent;
  let fixture: ComponentFixture<CardcodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardcodeComponent]
    });
    fixture = TestBed.createComponent(CardcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

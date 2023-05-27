import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerocontainerComponent } from './herocontainer.component';

describe('HerocontainerComponent', () => {
  let component: HerocontainerComponent;
  let fixture: ComponentFixture<HerocontainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerocontainerComponent]
    });
    fixture = TestBed.createComponent(HerocontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

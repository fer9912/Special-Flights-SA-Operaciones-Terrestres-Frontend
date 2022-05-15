import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggageInfoComponent } from './baggage-info.component';

describe('BaggageInfoComponent', () => {
  let component: BaggageInfoComponent;
  let fixture: ComponentFixture<BaggageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaggageInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaggageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

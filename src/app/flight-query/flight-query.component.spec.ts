import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightQueryComponent } from './flight-query.component';

describe('FlightQueryComponent', () => {
  let component: FlightQueryComponent;
  let fixture: ComponentFixture<FlightQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

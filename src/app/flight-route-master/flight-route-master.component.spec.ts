import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightRouteMasterComponent } from './flight-route-master.component';


describe('FlightRouteMasterComponent', () => {
  let component: FlightRouteMasterComponent;
  let fixture: ComponentFixture<FlightRouteMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightRouteMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightRouteMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

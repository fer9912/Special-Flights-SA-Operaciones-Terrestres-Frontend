import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmannedAircraftByCoordsComponent } from './unmanned-aircraft-by-coords.component';

describe('UnmannedAircraftByCoordsComponent', () => {
  let component: UnmannedAircraftByCoordsComponent;
  let fixture: ComponentFixture<UnmannedAircraftByCoordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnmannedAircraftByCoordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnmannedAircraftByCoordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

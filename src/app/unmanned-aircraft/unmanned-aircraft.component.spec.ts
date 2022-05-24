import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmannedAircraftComponent } from './unmanned-aircraft.component';

describe('UnmannedAircraftComponent', () => {
  let component: UnmannedAircraftComponent;
  let fixture: ComponentFixture<UnmannedAircraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnmannedAircraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnmannedAircraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListFlightComponent } from './check-list-flight.component';

describe('CheckListVueloComponent', () => {
  let component: CheckListFlightComponent;
  let fixture: ComponentFixture<CheckListFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckListFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckListFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

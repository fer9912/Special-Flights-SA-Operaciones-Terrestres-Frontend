import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListVueloComponent } from './check-list-vuelo.component';

describe('CheckListVueloComponent', () => {
  let component: CheckListVueloComponent;
  let fixture: ComponentFixture<CheckListVueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckListVueloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckListVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

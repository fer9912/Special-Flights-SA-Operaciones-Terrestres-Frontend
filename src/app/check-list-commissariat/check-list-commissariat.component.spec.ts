import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListCommissariatComponent } from './check-list-commissariat.component';

describe('CheckListCommissariatComponent', () => {
  let component: CheckListCommissariatComponent;
  let fixture: ComponentFixture<CheckListCommissariatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckListCommissariatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckListCommissariatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

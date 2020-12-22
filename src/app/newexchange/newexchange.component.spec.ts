import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewexchangeComponent } from './newexchange.component';

describe('NewexchangeComponent', () => {
  let component: NewexchangeComponent;
  let fixture: ComponentFixture<NewexchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewexchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

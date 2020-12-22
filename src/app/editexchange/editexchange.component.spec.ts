import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditexchangeComponent } from './editexchange.component';

describe('EditexchangeComponent', () => {
  let component: EditexchangeComponent;
  let fixture: ComponentFixture<EditexchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditexchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

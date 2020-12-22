import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateexchangeComponent } from './updateexchange.component';

describe('UpdateexchangeComponent', () => {
  let component: UpdateexchangeComponent;
  let fixture: ComponentFixture<UpdateexchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateexchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

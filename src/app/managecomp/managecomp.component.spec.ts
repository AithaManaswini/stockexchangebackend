import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecompComponent } from './managecomp.component';

describe('ManagecompComponent', () => {
  let component: ManagecompComponent;
  let fixture: ComponentFixture<ManagecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

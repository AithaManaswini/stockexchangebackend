import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcompComponent } from './ccomp.component';

describe('CcompComponent', () => {
  let component: CcompComponent;
  let fixture: ComponentFixture<CcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

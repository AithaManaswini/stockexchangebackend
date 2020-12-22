import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsectorsComponent } from './csectors.component';

describe('CsectorsComponent', () => {
  let component: CsectorsComponent;
  let fixture: ComponentFixture<CsectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

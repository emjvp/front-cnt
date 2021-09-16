import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteMasAncianoComponent } from './paciente-mas-anciano.component';

describe('PacienteMasAncianoComponent', () => {
  let component: PacienteMasAncianoComponent;
  let fixture: ComponentFixture<PacienteMasAncianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteMasAncianoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteMasAncianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesEnConsultaComponent } from './pacientes-en-consulta.component';

describe('PacientesEnConsultaComponent', () => {
  let component: PacientesEnConsultaComponent;
  let fixture: ComponentFixture<PacientesEnConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesEnConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesEnConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

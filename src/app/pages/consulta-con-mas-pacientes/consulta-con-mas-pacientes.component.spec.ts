import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaConMasPacientesComponent } from './consulta-con-mas-pacientes.component';

describe('ConsultaConMasPacientesComponent', () => {
  let component: ConsultaConMasPacientesComponent;
  let fixture: ComponentFixture<ConsultaConMasPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaConMasPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaConMasPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFumadoresUrgentesComponent } from './lista-fumadores-urgentes.component';

describe('ListaFumadoresUrgentesComponent', () => {
  let component: ListaFumadoresUrgentesComponent;
  let fixture: ComponentFixture<ListaFumadoresUrgentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFumadoresUrgentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFumadoresUrgentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { RegistrarPacientesComponent } from './pages/registrar-pacientes/registrar-pacientes.component';
import { ConsultasComponent } from "./pages/consultas/consultas.component";
import { SalaDeEsperaComponent } from "./pages/sala-de-espera/sala-de-espera.component";
import { HomeComponent } from "./pages/home/home.component";
import { PacientesEnConsultaComponent } from './pages/pacientes-en-consulta/pacientes-en-consulta.component';
import { PacienteMasAncianoComponent } from './pages/paciente-mas-anciano/paciente-mas-anciano.component';
import { ConsultaConMasPacientesComponent } from './pages/consulta-con-mas-pacientes/consulta-con-mas-pacientes.component';
import { ListaFumadoresUrgentesComponent } from './pages/lista-fumadores-urgentes/lista-fumadores-urgentes.component';

const routes: Routes = [ {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'pacientes',
  component: PacientesComponent
},
{
  path: 'pacientes/registrar',
  component: RegistrarPacientesComponent
},
{
  path: 'consultas',
  component: ConsultasComponent
},
{
  path: 'pacientesensalaespera',
  component: SalaDeEsperaComponent
},
{
  path: 'pacientesenconsulta',
  component: PacientesEnConsultaComponent
},
{
  path: 'pacientemasanciano',
  component: PacienteMasAncianoComponent
},
{
  path: 'maspacientesatendidos',
  component: ConsultaConMasPacientesComponent
},
{
  path: 'listarpacientesfumadores',
  component: ListaFumadoresUrgentesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

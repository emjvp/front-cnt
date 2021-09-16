import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { SalaDeEsperaComponent } from './pages/sala-de-espera/sala-de-espera.component';
import { RegistrarPacientesComponent } from './pages/registrar-pacientes/registrar-pacientes.component';
import { HomeComponent } from './pages/home/home.component';
import { ApiServiceService } from './services/api-service.service';
import { PacientesEnConsultaComponent } from './pages/pacientes-en-consulta/pacientes-en-consulta.component';
import { PacienteMasAncianoComponent } from './pages/paciente-mas-anciano/paciente-mas-anciano.component';
import { ListaFumadoresUrgentesComponent } from './pages/lista-fumadores-urgentes/lista-fumadores-urgentes.component';
import { ConsultaConMasPacientesComponent } from './pages/consulta-con-mas-pacientes/consulta-con-mas-pacientes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PacientesComponent,
    ConsultasComponent,
    SalaDeEsperaComponent,
    RegistrarPacientesComponent,
    HomeComponent,
    PacientesEnConsultaComponent,
    PacienteMasAncianoComponent,
    ListaFumadoresUrgentesComponent,
    ConsultaConMasPacientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

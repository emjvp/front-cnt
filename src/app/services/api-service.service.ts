import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  API_URI = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  getPacientes(){
    return this.http.get(`${this.API_URI}/pacientes`);
  }

  getPacienteMasAnciano(){
    return this.http.get(`${this.API_URI}/pacientemasanciano`);
  }

  getMasPacientesAtendidos(){
    return this.http.get(`${this.API_URI}/maspacientesatendidos`);
  }

  getFumadores(){
    return this.http.get(`${this.API_URI}/listarfumadoresporprioridad`);
  }

  getConsultas(){
    return this.http.get(`${this.API_URI}/listarconsultas`);
  }

  liberarConsultas(){
    return this.http.put(`${this.API_URI}/liberarconsultas`, '');
  }

  optimizarAtencion(){
    return this.http.get(`${this.API_URI}/optimizaratencion`);
  }

  atenderPaciente(id: any){
    return this.http.get(`${this.API_URI}/atenderpaciente/${id}`);
  }
}

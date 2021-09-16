import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from "../../services/api-service.service";

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  // @HostBinding('class') classes = 'row';

  pacientes: any = [];

  constructor(private apiService: ApiServiceService) {
    this.apiService.getPacientes().subscribe(
      res => {
        this.pacientes = res;
      },
      err => console.error(err)
    );
   }

  optimizarAtencion(){
    this.apiService.optimizarAtencion().subscribe(
      res => {
        this.pacientes = res;
      },
      err => console.error(err)
    );
   }

  atenderPaciente(id: any){
    this.apiService.atenderPaciente(id).subscribe(
      res => {
       console.log(res);
      },
      err => console.error(err)
    );
  }

  ngOnInit(): void {

  }

}

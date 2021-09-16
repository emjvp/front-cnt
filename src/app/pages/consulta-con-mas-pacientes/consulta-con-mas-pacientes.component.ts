import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-consulta-con-mas-pacientes',
  templateUrl: './consulta-con-mas-pacientes.component.html',
  styleUrls: ['./consulta-con-mas-pacientes.component.css']
})
export class ConsultaConMasPacientesComponent implements OnInit {

  consultaConMasPacientes: any;
  constructor(private apiService: ApiServiceService) {
    this.apiService.getMasPacientesAtendidos().subscribe(
      (res) => {
        this.consultaConMasPacientes = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  ngOnInit(): void {
  }

}

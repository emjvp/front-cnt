import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  consultas: any;
  constructor(private apiService: ApiServiceService, private router: Router) {
    apiService.getConsultas().subscribe(
      res => {
        this.consultas = res
        console.log(res)
    },

      err => console.log(err)
    );
  }

  ngOnInit(): void {
  }


  liberarConsultas(){

    this.apiService.liberarConsultas().subscribe(
      res => {this.consultas = res

      alert('Se han desocupado las consultas')

    },

      err => console.log(err)
    );
    // alert('Se han liberados las consultas');
    // this.router.navigate(['/pacientesensalaespera']);

  }
}

import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-lista-fumadores-urgentes',
  templateUrl: './lista-fumadores-urgentes.component.html',
  styleUrls: ['./lista-fumadores-urgentes.component.css']
})
export class ListaFumadoresUrgentesComponent implements OnInit {

  fumadores: any;
  constructor(private apiService: ApiServiceService) {
    apiService.getFumadores().subscribe(
      res =>{
        this.fumadores = res;
      },
      err => {
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-paciente-mas-anciano',
  templateUrl: './paciente-mas-anciano.component.html',
  styleUrls: ['./paciente-mas-anciano.component.css']
})
export class PacienteMasAncianoComponent implements OnInit {

  pacienteMasAnciano: any;
  constructor(private apiService: ApiServiceService) {
    this.apiService.getPacienteMasAnciano().subscribe(
      (res) => {

        this.pacienteMasAnciano = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  ngOnInit(): void {
  }

}

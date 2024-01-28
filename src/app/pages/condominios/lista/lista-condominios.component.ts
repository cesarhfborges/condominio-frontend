import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../core/services/http.service";

@Component({
  selector: 'app-lista-condominios',
  templateUrl: './lista-condominios.component.html',
  styleUrls: ['./lista-condominios.component.scss']
})
export class ListaCondominiosComponent implements OnInit {

  lista: any[] = [];


  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
    this.http.getCondominios().subscribe({
      next: value => {
        this.lista = value;
      }
    })
  }
}

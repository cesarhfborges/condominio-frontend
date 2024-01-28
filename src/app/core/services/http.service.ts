import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Moradores} from "../../shared/models/moradores.interface";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly URL: string = 'http://localhost:5000/api';

  constructor(
    private http: HttpClient
  ) {
  }

  getCondominios(): Observable<any> {
    return this.http.get<any>(`${this.URL}/condominios`, {
      headers: {
        authorization: 'Bearer 000000'
      }
    });
  }

  getCondominio(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL}/condominios/${id}`, {
      headers: {
        authorization: 'Bearer 000000'
      }
    });
  }

  getMoradores(condominio: number): Observable<Moradores[]> {
    return this.http.get<Moradores[]>(`${this.URL}/condominios/${condominio}/telefones`, {
      headers: {
        authorization: 'Bearer 000000'
      }
    });
  }
}

import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URI: string = 'http://localhost:5000';

  constructor(
    private http: HttpClient
  ) {
  }


  login({email, password}): Observable<any> {
    return this.http.post(`${this.URI}/api/auth/login`, {email, password});
  }
}

import { Injectable } from '@angular/core';
import {Auth} from "../interfaces/auth";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private uuid: string;
  private authKey: string = btoa('application');

  constructor() {
    // this.uuid = uuidv4();
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem(this.authKey);
  }

  public sessionClear(): void {
    localStorage.removeItem(this.authKey);
  }

  public async credentials(): Promise<Auth|null> {
    return new Promise((resolve, reject) => {
      const l = localStorage.getItem(this.authKey);
      if (!!l) {
        const decode = atob(l);
        const data: Auth = JSON.parse(decode);
        return resolve(data);
      } else {
        return resolve(null);
      }
    });
  }

  // public user(): Observable<User | null> {
  //   const credentials = from(this.credentials())
  //   return credentials.pipe(
  //     map(i => i.user),
  //     catchError(() => of(null))
  //   );
  // }

  public setAuth(auth: any): void {
    const encode = JSON.stringify(auth);
    const encrypt = btoa(encode);
    localStorage.setItem(this.authKey, encrypt);
  }
}

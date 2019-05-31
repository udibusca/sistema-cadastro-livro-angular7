import { Injectable, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  public showNavBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  private authenticated = false;
  uri = 'http://localhost:9000/login';
  //private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private router: Router, private http: HttpClient) { }

  signIn(user: User) {

    this.getLogin(user).subscribe(
      us => {
        console.log('RetornoOk : ' + us.msgUsuario)
        if ((user.email === us.email || user.email === us.email)
          && user.password === us.password) {
          this.authenticated = true;
          this.showNavBar(true);
          this.router.navigate(['/']);
        } else {
          this.authenticated = false;
        }
        console.log("Está Autenticado ? " + this.authenticated)
      },
      err => {
        console.log('RetornoErr : ' + err)
        console.log("Está Autenticado ? " + this.authenticated)
      }
    )

  }

  logout() {
    this.authenticated = false;
    this.showNavBar(false);
    this.router.navigate(['/entrar']);
  }

  isAuthenticated() {
    return this.authenticated;
  }

  private showNavBar(ifShow: boolean) {
    this.showNavBarEmitter.emit(ifShow);
  }

  getLoginP(user) {

    this.http.post(`${this.uri}`, user,
    )
      .subscribe(res => console.log('Retorno : ' + res));
  }


  getLogin(user: User): Observable<User> {
    return this.http.post<User>(`${this.uri}`, user,
      {
        observe: 'body',
        responseType: 'json'
      }
    );
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserLogin } from './../models/userlogin';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url?: string = 'http://localhost:8080/pwe'

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public register(user: User) {
    console.log(user)
    let obs = this.http.post(`${this.url}/register`, user);
    obs
      .subscribe(
        (resp) => {
          console.log(resp)
        }
      );
    return obs;
  }

  public login(user: UserLogin) {
    let obs = this.http.post(`${this.url}/login`, user);
    obs
      .subscribe(
        (resp: any) => {
          window.sessionStorage.setItem('token', JSON.stringify(resp.token));
          this.router.navigateByUrl("/");
        }
      );
    return obs;
  }
}
